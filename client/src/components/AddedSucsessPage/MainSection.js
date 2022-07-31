import React from "react";
import "../../style/AddedSucsessPage/AddedSucsessPage.scss";
import { useNavigate } from "react-router-dom";

const TheSection = () => {
  const navigate = useNavigate();

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
            onClick={() => {
              navigate("/homePageFirma");
            }}
          >
            zum Homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
