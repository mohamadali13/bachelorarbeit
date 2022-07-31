import React from "react";
import { useState, useEffect } from "react";
import MainSection from "./MainSection";
import { Fragment } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import "../../style/ApplayOffer/ApplayOffer.scss";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const TheSection = (props) => {
  const { offer_id } = useParams();
  const navigate = useNavigate();
  let userRole = localStorage.getItem("role");
  let [offersData, setOffersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  //console.log(offer_id, 'offerid');
  useEffect(() => {
    setLoading(true);

    Axios.get(`http://localhost:4000/api/v1/offer/getDetails/${offer_id}`)
      .then((res) => {
        console.log(res.data);
        setOffersData(res.data);
        setLoading(false);
        console.log(offersData);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const [offer] = offersData.filter((offer) => offer.id == offer_id);

  // let summe = parseFloat(offer['hours_nr']) *  parseFloat(offer['per_hour_money']);

  return (
    <section className="content">
      <div className="jobDetailsWrap">
        <div className="jobDetailsInfo">
          <div className="jobWrap">
            <div className="titelGeldDiv">
              <div className="jobTitleGeldInnerWrap">
                <div className="GeldjobDiv">
                  <p className="GeldjobText">
                    {!offer
                      ? null
                      : parseFloat(
                          parseFloat(offer["per_hour_money"]) *
                            parseFloat(offer["hours_nr"])
                        ).toFixed(2)}{" "}
                    €
                  </p>
                  <div className="geldProStundeDiv">
                    <p className="geldProStundeText">
                      {!offer ? null : offer["per_hour_money"]} € pro Stunde
                    </p>
                  </div>
                </div>
                <div className="titeljobDiv">
                  <p className="titeljobText">
                    {!offer ? null : offer["title_job"]}
                  </p>
                </div>
              </div>
            </div>
            <div className="locationjobDiv">
              <div className="locationIconAddjobInnerWrap">
                <div className="locationIconjobDiv">
                  <MdLocationOn
                    style={{
                      backgroundColor: "none",
                      marginRight: "0.2em",
                      fontSize: "14px",
                    }}
                  />
                </div>
                <p className="cityjobText">{!offer ? null : offer["city"]}</p>
              </div>
              <div className="stadtteiljobDiv">
                <p className="stadtteiljobText">
                  {!offer ? null : offer["neighborhood"]}
                </p>
              </div>
            </div>
            <div className="underLinejob"></div>
            <div className="timeDetalisjobDiv">
              <div className="datejobDIv">
                <div className="timeIconjobDiv">
                  <IoIosTime style={{ fontSize: "14px" }} />
                </div>
                <div className="dayNamejobDiv">
                  <p className="datejobText">
                    {!offer ? null : offer["day_name"]},{" "}
                    {!offer ? null : offer["date"]}
                  </p>
                </div>
              </div>
              <div className="timejobDiv">
                <p className="timejobText">
                  {!offer ? null : offer["time_from"]} -{" "}
                  {!offer ? null : offer["time_until"]}
                </p>
              </div>
              <div className="jobNrDiv">
                <p className="jobNrText">{!offer ? null : offer["id"]}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="jobDetailsDescribe">
          <div className="jobDetailsDescribeTextDiv">
            <p className="jobDetailsDescribeText">Beschreiben</p>
          </div>
          <div className="jobDetailsDescribeContent">
            <p className="jobDetailsDescribeTextContent">
              {!offer ? null : offer["describtion"]}.
            </p>
          </div>
        </div>
        <div className="jobDetailsAnforderung">
          <div className="jobDetailsAnforderungTextDiv">
            <p className="jobDetailsAnforderungText">
              Anforderung Und Hinweise
            </p>
          </div>
          <div className="jobDetailsAnforderungContent">
            <p className="jobDetailsAnforderungContentText">
              {!offer ? null : offer["note_and_requirements"]}.
            </p>
          </div>
        </div>
        <div className="jobDetailsAdresse">
          <div className="jobDetailsAdresseTextDiv">
            <p className="jobDetailsAdresseText">Adresse</p>
          </div>
          <div className="jobDetailsAdresseInfosWrap">
            <p className="jobDetailsAdresseInfo">
              {!offer ? null : offer["street"]},
            </p>
            <p className="jobDetailsAdresseInfo">
              {" "}
              {!offer ? null : offer["post_code"]}{" "}
              {!offer ? null : offer["city"]}
            </p>
            <p className="jobDetailsAdresseInfo">
              {!offer ? null : offer["add_to_address"]}
            </p>
          </div>
        </div>
        <div className="jobDetailsSchicht">
          <div className="jobDetailsSchichtTextDiv">
            <p className="jobDetailsSchichtText">Schichte</p>
          </div>
          <div className="schichtKarteWrap">
            <div className="schichtKarte">
              <p className="schichtKarteDay">
                {!offer ? null : offer["day_name"]}
              </p>
              <p className="schichtKarteDate">
                {!offer ? null : offer["date"]}
              </p>
              <p className="schichtKarteTime">
                {!offer ? null : offer["time_from"]} -{" "}
                {!offer ? null : offer["time_until"]}
              </p>
            </div>
          </div>
        </div>
        {userRole == "student" && (
          <button
            className="applayButton"
            onClick={() => {
              if (offer) {
                const id_job = offer["id"];
                const id_student = userId;
                const id_company = offer["id_company"];
                const status = 'applied';
                Axios.post(`http://localhost:4000/api/v1/offer/applay_offer/`, {
                  id_job,
                  id_student,
                  id_company,
                  status
                })
                  .then((res) => {
                    console.log(res.data);
                    navigate('/appliedSuscess');
                  })
                  .catch((err) => {
                    console.log(err);
                    setLoading(false);
                  });
              }
            }}
          >
            Bewerben
          </button>
        )}
      </div>
    </section>
  );
};

export default TheSection;
