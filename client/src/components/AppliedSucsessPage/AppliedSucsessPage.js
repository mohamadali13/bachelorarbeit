import React from "react";
import TheNavBar from "../TheNavBar";
import MainSection from "./MainSection";
import { Fragment } from "react";
import "../../style/bodySection.scss";

const appliedSuscess = () => {
  return (
    <Fragment>
      <body>
        <TheNavBar />

        <MainSection />
      </body>
    </Fragment>
  );
};

export default appliedSuscess;
