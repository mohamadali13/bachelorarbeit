import React from "react";
import { useState } from "react";
import "../../style/AddedSucsessPage/AddedSucsessPage.scss";
const TheSection = () => {
  const [titleStelle, setTitleStelle] = useState("");
  let userId = "12345";
  let forUserLink = "";
  let userTpy = "firma";
  if (userTpy === "firma") forUserLink = "homePageFirma";
  else if (userTpy === "student") forUserLink = "homePageStudent";
  return (
    <section className="content">
      <div className="aSWrapDiv">
        <div className="aSMessageWrap">
          <p className="apSucsessMessageText">
            Glückwunsch! Du Hast deine Anzeige erforgreich hinzugefügt!
          </p>
        </div>
        <div className="zumHomePageButtonASDiv">
          <button
            className="zumHomePageButtonAS"
            onClick={() =>
              (window.location.href = `http://localhost:3000/${forUserLink}/${userId}`)
            }
          >
            zum Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
