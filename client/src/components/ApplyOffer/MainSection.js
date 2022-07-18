import React from "react";
import { useState } from "react";
import MainSection from "./MainSection";
import { Fragment } from "react";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import "../../style/ApplayOffer/ApplayOffer.scss";
const TheSection = (props) => {
  const [titleStelle, setTitleStelle] = useState("");

  let userRole = localStorage.getItem("role");

  return (
    <section className="content">
      <div className="jobDetailsWrap">
        <div className="jobDetailsInfo">
          <div className="jobWrap">
            <div className="titelGeldDiv">
              <div className="jobTitleGeldInnerWrap">
                <div className="GeldjobDiv">
                  <p className="GeldjobText">123</p>
                  <div className="geldProStundeDiv">
                    <p className="geldProStundeText">14</p>
                  </div>
                </div>
                <div className="titeljobDiv">
                  <p className="titeljobText">LagerHilfe Im Lidl</p>
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
                <p className="cityjobText">Berlin</p>
              </div>
              <div className="stadtteiljobDiv">
                <p className="stadtteiljobText">Wedding</p>
              </div>
            </div>
            <div className="underLinejob"></div>
            <div className="timeDetalisjobDiv">
              <div className="datejobDIv">
                <div className="timeIconjobDiv">
                  <IoIosTime style={{ fontSize: "14px" }} />
                </div>
                <div className="dayNamejobDiv">
                  <p className="datejobText">Fr, 01.01.2020</p>
                </div>
              </div>
              <div className="timejobDiv">
                <p className="timejobText">14:50 - 20:00</p>
              </div>
              <div className="jobNrDiv">
                <p className="jobNrText">JobNr: 78787</p>
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
        <div className="jobDetailsAdresse">
          <div className="jobDetailsAdresseTextDiv">
            <p className="jobDetailsAdresseText">Adresse</p>
          </div>
          <div className="jobDetailsAdresseInfosWrap">
            <p className="jobDetailsAdresseInfo">Luxemburger 45,</p>
            <p className="jobDetailsAdresseInfo"> 12207 Berlin</p>
            <p className="jobDetailsAdresseInfo">Aldi gegenüber, HinterHaus</p>
          </div>
        </div>
        <div className="jobDetailsSchicht">
          <div className="jobDetailsSchichtTextDiv">
            <p className="jobDetailsSchichtText">Schichte</p>
          </div>
          <div className="schichtKarteWrap">
            <div className="schichtKarte">
              <p className="schichtKarteDay">Fri</p>
              <p className="schichtKarteDate">01.01</p>
              <p className="schichtKarteTime">15:00 bis 21:00</p>
            </div>
          </div>
        </div>
        {userRole == "student" && (
          <button className="applayButton" onClick={() => {}}>
            Bewerben
          </button>
        )}
      </div>
    </section>
  );
};

export default TheSection;
