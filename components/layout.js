import React from "react";
import Navbar from "./navbar";
function Layout({ children }) {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
}

export default Layout;
