import React from "react";
import { useState } from "react";
import "../../style/OfferDetails/OfferDetails.scss";
const TheSection = () => {
  const [titleStelle, setTitleStelle] = useState("");

  return (
    <section className="content">
      <div className="offerDetailsWrap">
        <div className="topDivOfferDetails">
          <div className="salaryAndTitleDetails">
            <div className="salaryOfferDetails">
              <p className="salaryOfferDetailsTop">250,47 $</p>
              <p className="salaryOfferDetailsBottom"> 12,59 $ pro Stunde</p>
            </div>
            <div className="titleOfferDetails">
              <p className="titleOfferDetailsText">Fruhstückservice Im Sheraton Hotel</p>
            </div>
          </div>
          <div className="describeOfferDetails">
            <p className=""></p>
            <div className="">
              <p className=""></p>
            </div>
          </div>
          <div className="notesOfferDetails"></div>
          <div className="adressOfferDetails"></div>
        </div>
        <div className="describeDetails"></div>
        <div className="requirementsAndNotesDetails"></div>
        <div className="adressOfferDetails"></div>
        <div className="shiftsOfferDetails"></div>
        <div className="applyOfferButton"></div>
      </div>
    </section>
  );
};

export default TheSection;
