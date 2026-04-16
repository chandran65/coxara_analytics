import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";

import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";
import IndustriesPage from "./pages/IndustriesPage";
import ServicesPage from "./pages/ServicesPage";
import SolutionsPage from "./pages/SolutionsPage";

import ResourcesPage from "./pages/ResourcesPage";
import PlaceholderPage from "./pages/PlaceholderPage";
import ProductsPage from "./pages/ProductsPage";
import MindoraPage from "./pages/MindoraPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Company Routes */}
          <Route path="company/about" element={<AboutPage />} />

          <Route path="company/careers" element={<CareersPage />} />
          <Route path="company/contact" element={<ContactPage />} />

          {/* Industries Routes */}
          <Route path="industries" element={<IndustriesPage />} />

          {/* Services Routes */}
          <Route path="services" element={<ServicesPage />} />

          {/* Solutions Routes */}
          <Route path="solutions" element={<SolutionsPage />} />

          {/* Products Routes */}
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/mindora" element={<MindoraPage />} />



          {/* Resources Routes */}
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="resources/:category" element={<ResourcesPage />} />

          {/* AiImage Route */}
          <Route path="aiimage" element={<PlaceholderPage title="AiImage" />} />

          {/* 404 - catch-all */}
          <Route
            path="*"
            element={
              <PlaceholderPage
                title="Page Not Found"
                description="The page you're looking for doesn't exist."
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
