import React from "react";
import ReqAdmin from "../ReqAdmin/ReqAdmin";
import "../../style/HomePageAdmin/HomePageAdmin.scss";
const TheSection = () => {
  return (
    <section className="content">
      <div className="homePageAmdinWrap">
        <div className="anfragenTextDiv">
          <p className="anfragenText">Anfragen</p>
        </div>
        <ReqAdmin />
      </div>
    </section>
  );
};

export default TheSection;
