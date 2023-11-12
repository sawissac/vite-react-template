import React from "react";

type LayoutInterface = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return (
    <div className="w-full min-h-screen grid place-content-center">
      {children}
    </div>
  );
};

export default Layout;
