import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import LeftCurtain from "./LeftCurtain";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 grid-rows-5 gap-0 h-screen">
      <div className="hidden lg:flex bg-blue-200 col-span-1 row-span-5  justify-center items-center">
        <LeftCurtain />
      </div>
      <div className="bg-red-200 col-span-full sm:col-span-2 lg:col-span-4 row-span-1 flex justify-center items-center">
        <Header />
      </div>

      <main className="bg-green-200 col-span-full sm:col-span-2 lg:col-span-4 row-span-3 flex justify-center items-center">
        {children}
      </main>
      <div className="bg-pink-200 col-span-full sm:col-span-2 lg:col-span-4 row-span-1 flex justify-center items-center">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
