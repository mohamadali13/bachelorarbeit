import React from "react";
import TheNavBar from "../TheNavBar.js";
import MainSection from "./MainSection";
import { Fragment } from "react";
import "../../style/bodySection.scss";

const JobStatusForStudent = () => {
  return (
    <Fragment>
      <body>
        <TheNavBar />

        <MainSection />
      </body>
    </Fragment>
  );
};

export default JobStatusForStudent;