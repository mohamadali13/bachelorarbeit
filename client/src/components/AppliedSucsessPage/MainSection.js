import React from "react";
import { useState } from "react";
import "../../style/AppliedSucsessPage/AppliedSucsessPage.scss";
const TheSection = () => {
  const [titleStelle, setTitleStelle] = useState("");

  return (
    <section className="content">
      <div className="aSWrapDiv">
        <div className="aSMessageWrap">
          <p className="apSucsessMessageText">
            Glückwunsch! Du Hast Dich erforgreich beworben!
          </p>
        </div>
        <div className="zumHomePageButtonASDiv">
          <button className="zumHomePageButtonAS" onChange={()=>{}}>zum Homepage</button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
