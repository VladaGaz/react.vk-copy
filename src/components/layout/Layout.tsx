import React, { FC } from "react";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      {children}
    </>
  );
};

export default Layout;
