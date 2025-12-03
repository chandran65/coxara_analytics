import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 relative">
        {/* Blur overlay for content below navbar - makes navbar text readable */}
        <div
          className="fixed top-0 left-0 right-0 h-24 pointer-events-none z-40"
          style={{
            backdropFilter: "blur(2px)",
            WebkitBackdropFilter: "blur(2px)",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, transparent 100%)",
          }}
        />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
