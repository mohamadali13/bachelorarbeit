import React from "react";
import "../../style/Offer/Offer.scss";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { useParams, useNavigate } from "react-router-dom";
const OfferComponent = (props) => {
  const navigate = useNavigate();

  let statusOffer = props.offerInfo.status;
  let backgroundColorStatus = () => {
    if (statusOffer == "applied") {
      return { backgroundColor: "green" };
    } else if (statusOffer == "upComming") {
      return { backgroundColor: "yellow" };
    } else if (statusOffer == "finished") {
      return { backgroundColor: "red" };
    }
  };
  return (
    <div className="OfferWrap">
      <div className="titelGeldDiv" style={backgroundColorStatus()}>
        <div className="GeldOfferDiv">
          <p className="GeldOfferText">
            {parseFloat(
              parseFloat(props.offerInfo.per_hour_money) *
                parseFloat(props.offerInfo.hours_nr)
            ).toFixed(2)}{" "}
            €
          </p>
          <div className="geldProStundeDiv">
            <p className="geldProStundeText">
              {props.offerInfo.per_hour_money} € Pro Stunde
            </p>
          </div>
        </div>
        <div className="titelOfferDiv">
          <p className="titelOfferText">{props.offerInfo.title_job}</p>
        </div>
        <div className="offerNrTextWrap">
          {" "}
          <p className="offerNrText">Nr: {props.offerInfo.id}</p>
        </div>
      </div>
      <div className="locationOfferDiv">
        <div className="locationIconAddOfferInnerWrap">
          <div className="locationIconOfferDiv">
            <MdLocationOn
              style={{
                backgroundColor: "none",
                marginRight: "0.2em",
                fontSize: "14px",
              }}
            />
          </div>
          <p className="cityOfferText">{props.offerInfo.city}</p>
        </div>
        <div className="stadtteilOfferDiv">
          <p className="stadtteilOfferText">{props.offerInfo.neighborhood}</p>
        </div>
      </div>
      <div className="underLineOffer"></div>
      <div className="timeDetalisOfferDiv">
        <div className="dateOfferDIv">
          <div className="timeIconOfferDiv">
            <IoIosTime style={{ fontSize: "14px" }} />
          </div>
          <div className="dayNameOfferDiv">
            <p className="dateOfferText">
              {props.offerInfo.day_name}, {props.offerInfo.date}
            </p>
          </div>
        </div>
        <div className="timeOfferDiv">
          <p className="timeOfferText">
            {props.offerInfo.time_from} - {props.offerInfo.time_until}
          </p>
        </div>
        <div className="setailsOfferLinkDiv">
          <button
            className="detailsOfferLink"
            onClick={() => navigate(`/detailsOffer/${props.offerInfo.id}`)}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferComponent;
