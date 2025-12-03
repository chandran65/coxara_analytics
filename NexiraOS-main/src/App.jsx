import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import DataStudio from './pages/DataStudio';
import ExperimentStudio from './pages/ExperimentStudio';
import SimulationStudio from './pages/SimulationStudio';
import LoginPage from './pages/LoginPage';

function App() {
  const [activeTab, setActiveTab] = useState('data');
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [connectedSource, setConnectedSource] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('nexira_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('nexira_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('nexira_user');
    setActiveTab('data'); // Reset tab
    setConnectedSource(null); // Reset source on logout
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'data':
        return <DataStudio connectedSource={connectedSource} onConnectSource={setConnectedSource} />;
      case 'experiment':
        return <ExperimentStudio connectedSource={connectedSource} />;
      case 'simulation':
        return <SimulationStudio connectedSource={connectedSource} />;
      default:
        return <DataStudio connectedSource={connectedSource} onConnectSource={setConnectedSource} />;
    }
  };

  if (isLoading) {
    return null; // Or a loading spinner
  }

  if (!user) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <Layout
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      user={user}
      onLogout={handleLogout}
      connectedSource={connectedSource}
    >
      {renderContent()}
    </Layout>
  );
}

export default App;
