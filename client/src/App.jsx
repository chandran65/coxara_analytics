import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";
import BiksPage from "./pages/BiksPage";
import ResourcesPage from "./pages/ResourcesPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Company Routes */}
          <Route path="company/about" element={<AboutPage />} />
          <Route path="company/team" element={<TeamPage />} />
          <Route path="company/careers" element={<CareersPage />} />
          <Route path="company/contact" element={<ContactPage />} />

          {/* Industries Routes */}
          <Route path="industries" element={<IndustriesPage />} />

          {/* Services Routes */}
          <Route path="services" element={<ServicesPage />} />

          {/* Solutions Routes */}
          <Route path="solutions" element={<SolutionsPage />} />

          {/* BIKS Routes */}
          <Route path="biks" element={<BiksPage />} />

          {/* Resources Routes */}
          <Route path="resources" element={<ResourcesPage />} />

          {/* AiImage Route */}
          <Route path="aiimage" element={<PlaceholderPage title="AiImage" />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
