import React from "react";
import "../../style/RegSucsessPage/RegSucsessPage.scss";
const TheSection = () => {
  return (
    <body>
      <section className="content">
        <div className="rSWrapDiv">
          <div className="rSMessageWrap">
            <p className="rSSucsessMessageText">
              Glückwunsch! Du Hast Dich erforgreich registriert!
            </p>
          </div>
          <div className="anmedlenRegAcsessButtonDiv">
            <button
              className="anmedlenRegAcsessButton"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://localhost:3000/loginPage";
              }}
            >
              Anmelden
            </button>
          </div>
        </div>
      </section>
    </body>
  );
};

export default TheSection;
