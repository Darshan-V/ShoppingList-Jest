import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex ">
      <main>{children}</main>
    </div>
  );
};

export default Layout;
