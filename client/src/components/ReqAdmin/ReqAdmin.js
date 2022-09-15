import Axios from "axios";

import { useNavigate } from "react-router-dom";
import "../../style/ReqAdmin/ReqAdmin.scss";

const ReqAdmin = (props) => {
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem("token");
  const user_role = localStorage.getItem("role");
  return (
    <div className="anfrageHomePageAmdin">
      <div className="anfrageInfoHomePageAdmin">
        <p className="anfrageInfoHomePageAdminText">
          {props.reqInfo.first_name} {props.reqInfo.last_name} hat sich um die
          Stelle Nr {props.reqInfo.id} bei {props.reqInfo.company_name} "
          {props.reqInfo.title_job}" beworben
        </p>
      </div>
      <div className="anfrageResHomePageAdmin">
        <button
          className="approveButtonHomePageAdmin"
          onClick={() => {
            Axios.put(
              `http://localhost:4000/api/v1/offer/approve_req_applay`,
              null,

              {
                params: { id_application: props.reqInfo.id_application },
                headers: {
                  "x-auth-token": `${tokenUser}`,
                  role: `${user_role}`,
                },
              }
            )
              .then((res) => {
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Bestätigen
        </button>
        <button
          className="rejectButtonHompageAdmin"
          onClick={() => {
            Axios.put(
              `http://localhost:4000/api/v1/offer/reject_req_applay`,
              null,
              {
                params: { id_application: props.reqInfo.id_application },
                headers: {
                  "x-auth-token": `${tokenUser}`,
                  role: `${user_role}`,
                },
              }
            )
              .then((res) => {
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
};

export default ReqAdmin;
