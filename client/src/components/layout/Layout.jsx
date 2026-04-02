import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { CustomCursor } from "../ui";

const Layout = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1 relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
