import React from "react";
import "../style/NavBar.scss";
import Navigation from "../components/Navbar/Navigation";
import MobileNavigation from "../components/Navbar/MobileNavigation";

const theNavBar = () => {
  return (
    <div className="NavBar">
      <div className="logoDiv">BENCOM</div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
};

export default theNavBar;
