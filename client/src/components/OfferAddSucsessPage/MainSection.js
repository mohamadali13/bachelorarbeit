import React from "react";
import { useState } from "react";
import "../../style/AddedSucsessPage/AddedSucsessPage.scss";
const TheSection = () => {
  const [titleStelle, setTitleStelle] = useState("");

  return (
    <section className="content">
      <div className="aSWrapDiv">
        <div className="aSMessageWrap">
          <p className="apSucsessMessageText">
            Glückwunsch! Du Hast deine Anzeige erforgreich hinzugefügt!
          </p>
        </div>
        <div className="zumHomePageButtonASDiv">
          <button className="zumHomePageButtonAS" onChange={() => {}}>
            zum Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
