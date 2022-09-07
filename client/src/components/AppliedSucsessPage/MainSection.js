import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/AppliedSucsessPage/AppliedSucsessPage.scss";
const TheSection = () => {
  const navigate = useNavigate();
  return (
    <body>
      <section className="content">
        <div className="aSWrapDiv">
          <div className="aSMessageWrap">
            <p className="apSucsessMessageText">
              Glückwunsch! Du Hast Dich erforgreich beworben!
            </p>
          </div>
          <div className="zumHomePageButtonASDiv">
            <button
              className="zumHomePageButtonAS"
              onClick={() => navigate("/jobStatusForStudent")}
            >
              zum Homepage
            </button>
          </div>
        </div>
      </section>
    </body>
  );
};

export default TheSection;
