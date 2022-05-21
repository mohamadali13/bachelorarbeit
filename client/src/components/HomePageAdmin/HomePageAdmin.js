import React from "react";
import TheNavBar from "../TheNavBar.js";
import Footer from "../Footer.js";
import MainSection from "./MainSection";
import { Fragment } from "react";
import "../../style/bodySection.scss";

const HomePageAdmin = () => {
  return (
    <Fragment>
      <body>
        <TheNavBar />

        <MainSection />
      </body>
    </Fragment>
  );
};

export default HomePageAdmin;
