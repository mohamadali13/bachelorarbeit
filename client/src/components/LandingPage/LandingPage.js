import React from "react";
import TheNavBar from "../TheNavBar";
import Footer from "../Footer.js";
import MainSection from "../LandingPage/MainSection.js";
import { Fragment } from "react";
import "../../style/LandingPage/LandingPage.scss";
import "../../style/bodySection.scss";

const landingPage = () => {
  return (
    <Fragment>
      <TheNavBar />

      <MainSection />

      <Footer />
    </Fragment>
  );
};

export default landingPage;
