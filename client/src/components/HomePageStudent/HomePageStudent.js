import React from "react";
import TheNavBar from "../TheNavBar.js";
import Footer from "../Footer.js";
import MainSection from "./MainSection";
import { Fragment } from "react";
import "../../style/bodySection.scss";

const HomePageStudent = () => {
  return (
    <Fragment>
      <body>
        <TheNavBar />

        <MainSection />

        <Footer />
      </body>
    </Fragment>
  );
};

export default HomePageStudent;
