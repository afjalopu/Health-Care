import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NavbarCamp from './../NavbarCamp/NavbarCamp';

const Layout = (props) => {
  return (
    <div>
      <NavbarCamp />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
