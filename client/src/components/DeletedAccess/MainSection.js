import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/AppliedSucsessPage/AppliedSucsessPage.scss";
const TheSection = () => {
  const user_role = localStorage.getItem("role");
  const navigate = useNavigate();
  return (
    <section className="content">
      <div className="aSWrapDiv">
        <div className="aSMessageWrap">
          <p className="apSucsessMessageText">
            Du Hast die Anzeige erforgreich gelöscht!
          </p>
        </div>
        <div className="zumHomePageButtonASDiv">
          <button
            className="zumHomePageButtonAS"
            onClick={() => {
              if (user_role == "student") {
                navigate("/jobStatusForStudent");
              } else if (user_role == "company") {
                navigate("/homePageFirma");
              }
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
