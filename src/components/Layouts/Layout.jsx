import React from "react";
import Header from "../Layouts/Header";

const Layout = (props) => {
  return (
    <div className="black">
      <Header />

      <main style={{ minHeight: "80vh" }}>{props.children}</main>
    </div>
  );
};
export default Layout;
