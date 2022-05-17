import React from "react";
import "../../style/ReqAdmin/ReqAdmin.scss";

const ReqAdmin = (props) => {
  return (
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
  );
};

export default ReqAdmin;
