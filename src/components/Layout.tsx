import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex dark:bg-red-950 bg-slate-200 h-full text-white w-full ">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
