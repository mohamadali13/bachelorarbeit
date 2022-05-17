import React from "react";
import { useState } from "react";
import "../../style/HomePageAdmin/HomePageAdmin.scss";
const TheSection = () => {
  return (
    <section className="content">
      <div className="homePageAmdinWrap">
        <div className="anfragenTextDiv">
          <p className="anfragenText">Anfragen</p>
        </div>
        <div className="anfrageHomePageAmdin">
          <div className="anfrageInfoHomePageAdmin">
            <p className="anfrageInfoHomePageAdminText">
              Mohamad hat sich um die Stelle beworben
            </p>
          </div>
          <div className="anfrageResHomePageAdmin">
            <button className="approveButtonHomePageAdmin" onClick={() => {}}>
              Bestätigen
            </button>
            <button className="rejectButtonHompageAdmin" onClick={() => {}}>
              Ablehnen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
