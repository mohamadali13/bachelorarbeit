import axios from "axios";
import  Axios  from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../style/ReqAdmin/ReqAdmin.scss";

const ReqAdmin = (props) => {
  
  const [approvClicked, setApprovedClicked] = useState(false);
  const [rejectedClicked, setRejectedClicked] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="anfrageHomePageAmdin">
      <div className="anfrageInfoHomePageAdmin">
        <p className="anfrageInfoHomePageAdminText">
          {props.reqInfo.first_name} {props.reqInfo.last_name} hat sich um die Stelle Nr {props.reqInfo.id} bei {props.reqInfo.company_name} "{props.reqInfo.title_job}" beworben
        </p>
      </div>
      <div className="anfrageResHomePageAdmin">
        <button className="approveButtonHomePageAdmin" onClick={() => {
            Axios.put(
              `http://localhost:4000/api/v1/offer/approve_req_applay`,null,{ params: { id_application: props.reqInfo.id_application} }
            )
              .then((res) => {
                console.log(res.data);
                //navigate('/appliedSuscess');
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
                
              });
         }}>
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
