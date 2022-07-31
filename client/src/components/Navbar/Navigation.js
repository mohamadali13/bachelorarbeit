import React from "react";
import "../../style/Navbar/Navigation.scss";
import NavLinks from "./NavLinks";

const theNavigation = () => {
  return (
    <nav className="navigation">
      <NavLinks />
    </nav>
  );
};

export default theNavigation;
