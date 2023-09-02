import React from "react";

type LayoutInterface = {
  children: React.ReactNode | React.ReactNode[];
};

const Layout: React.FC<LayoutInterface> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
