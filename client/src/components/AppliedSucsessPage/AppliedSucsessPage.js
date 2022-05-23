import React from "react";
import TheNavBar from "../TheNavBar";
import MainSection from "./MainSection";
import { Fragment } from "react";
import "../../style/bodySection.scss";

const appliedSuscess = () => {
  return (
    <Fragment>
      <TheNavBar />

      <MainSection />
    </Fragment>
  );
};

export default appliedSuscess;
