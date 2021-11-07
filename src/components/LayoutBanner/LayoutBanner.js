import React from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import NavbarCamp from "../NavbarCamp/NavbarCamp";

const LayoutBanner = (props) => {
  return (
    <div>
      <NavbarCamp />
      {props.children}
      <Footer />
    </div>
  );
};

export default LayoutBanner;
