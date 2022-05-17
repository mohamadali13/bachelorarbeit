import React from "react";
import { useState } from "react";
import "../../style/HomPageStudent/HomePageStudent.scss";
import Select from "react-select";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";

const TheSection = () => {
  const listOfCitesHomePageStudent = [
    { label: "Berlin", value: "Berlin" },
    { label: "Frankfurt", value: "Frankfurt" },
    { label: "Münich", value: "Münich" },
    { label: "Hamburg", value: "Hamburg" },
    { label: "Darmstadt", value: "Darmstadt" },
    { label: "Düsseldorf", value: "Düsseldord" },
  ];

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
        <div className="offersHomePageStudent">
          <div className="OfferWrap">
            <div className="titelGeldDiv">
              <div className="GeldOfferDiv">
                <p className="GeldOfferText">250,59 €</p>
                <div className="geldProStundeDiv">
                  <p className="geldProStundeText">12,59€ pro Stunde</p>
                </div>
                <div></div>
              </div>
              <div className="titelOfferDiv">
                <p className="titelOfferText">LagerHilfe Im Lidl</p>
              </div>
            </div>
            <div className="locationOfferDiv">
              <div>
                <div className="locationIconOfferDiv">
                  <MdLocationOn style={{ backgroundColor: "red" }} />
                </div>
                <p className="cityOfferText">Berlin</p>
              </div>
              <div className="stadtteilOfferDiv">
                <p className="stadtteilOfferText">Wedding</p>
              </div>
            </div>
            <div className="underLineOffer"></div>
            <div className="timeDetalisOfferDiv">
              <div className="dateOfferDIv">
                <div className="timeIconOfferDiv">
                  <IoIosTime />
                </div>
                <div className="dayNameOfferDiv">
                  <p>Fr,</p>
                </div>
                <div className="dateOfferDiv">
                  <p>01.01.2020</p>
                </div>
              </div>
              <div className="timeOfferDiv">
                <p className="timeOfferText">14:50 - 20:00</p>
              </div>
              <div className="setailsOfferLinkDiv">
                <a className="detailsOfferLink" href="#">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
