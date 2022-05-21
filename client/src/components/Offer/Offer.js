import React from "react";
import "../../style/Offer/Offer.scss";
import { MdLocationOn } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
const OfferComponent = (props) => {
  let name = 10;

  return (
    <div className="OfferWrap">
      <div className="titelGeldDiv">
        <div className="GeldOfferDiv">
          <p className="GeldOfferText">{props.offerInfo.name}</p>
          <div className="geldProStundeDiv">
            <p className="geldProStundeText">{props.offerInfo.price}</p>
          </div>
        </div>
        <div className="titelOfferDiv">
          <p className="titelOfferText">LagerHilfe Im Lidl</p>
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
          <p className="cityOfferText">Berlin</p>
        </div>
        <div className="stadtteilOfferDiv">
          <p className="stadtteilOfferText">Wedding</p>
        </div>
      </div>
      <div className="underLineOffer"></div>
      <div className="timeDetalisOfferDiv">
        <div className="dateOfferDIv">
          <div className="timeIconOfferDiv">
            <IoIosTime style={{ fontSize: "14px" }} />
          </div>
          <div className="dayNameOfferDiv">
            <p className="dateOfferText">Fr, 01.01.2020</p>
          </div>
        </div>
        <div className="timeOfferDiv">
          <p className="timeOfferText">14:50 - 20:00</p>
        </div>
        <div className="setailsOfferLinkDiv">
          <a className="detailsOfferLink" href="#">
            Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default OfferComponent;
