import React from "react";
import { useState } from "react";
import "../../style/HomPageStudent/HomePageStudent.scss";
import Select from "react-select";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const listOfCitesHomePageStudent = [
    { label: "Berlin", value: "Berlin" },
    { label: "Frankfurt", value: "Frankfurt" },
    { label: "Münich", value: "Münich" },
    { label: "Hamburg", value: "Hamburg" },
    { label: "Darmstadt", value: "Darmstadt" },
    { label: "Düsseldorf", value: "Düsseldord" },
  ];
  let data = [
    { name: "ahmed", price: 123 },
    { name: "mohamad", price: 1553 },
  ];
  let offers = data.map((offer) => {
    return <TheOffer offerInfo={offer} />;
  });

  return (
    <section className="content">
      <div className="homePageStudentWrap">
        <div className="selectCityHomePageStadtStudent">
          <Select
            options={listOfCitesHomePageStudent}
            onChange={(opt) => {
              console.log(opt.value);
            }}
          />
        </div>
        <div className="offersHomePageStudent">{offers}</div>
      </div>
    </section>
  );
};

export default TheSection;
