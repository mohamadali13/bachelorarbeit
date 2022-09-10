import React from "react";
import "../../style/AddOfferPage/AddOfferPage.scss";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
const TheSection = () => {
  let companyId = localStorage.getItem("userId");
  let user_role = localStorage.getItem("role");
  const userName = localStorage.getItem("name");
  const tokenUser = localStorage.getItem("token");
  const navigate = useNavigate();
  const decoded = jwt_decode(tokenUser);
  console.log(companyId);

  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const validate = (values) => {
    let errors = "";
    let errorsState = false;
    if (
      values.title_offer.length == 0 ||
      values.days_nr.length == 0 ||
      values.per_hour_money.length == 0 ||
      values.city.length == 0 ||
      values.neighbourhood.length == 0 ||
      values.persons_nr.length == 0 ||
      values.day_name.length == 0 ||
      values.hours_nr.length == 0 ||
      values.time_from.length == 0 ||
      values.time_until.length == 0 ||
      values.date.length == 0 ||
      values.describtion.length == 0 ||
      values.notes_and_requirements.length == 0 ||
      values.street.length == 0 ||
      values.haus_nr.length == 0 ||
      values.post_code.length == 0 ||
      values.add_to_address.length == 0
    ) {
      errors = "Bitte richtige Infos eingeben!";
      errorsState = true;
    }

    return { errors, errorsState };
  };

  const offerPostHandler = () => {
    let title_offer = document.getElementById("title_offer").value;
    let days_nr = document.getElementById("days_nr").value;
    let per_hour_money = document.getElementById("per_hour_money").value;
    let city = document.getElementById("city").value;
    let neighbourhood = document.getElementById("neighbourhood").value;
    let persons_nr = document.getElementById("persons_nr").value;
    let day_name = document.getElementById("day_name").value;
    let hours_nr = document.getElementById("hours_nr").value;
    let time_from = document.getElementById("time_from").value;
    let time_until = document.getElementById("time_until").value;
    let date = document.getElementById("date").value;
    let describtion = document.getElementById("describtion").value;
    let notes_and_requirements = document.getElementById(
      "notes_and_requirements"
    ).value;
    let street = document.getElementById("street").value;
    let haus_nr = document.getElementById("haus_nr").value;
    let post_code = document.getElementById("post_code").value;
    let add_to_address = document.getElementById("add_to_address").value;

    let result = validate({
      title_offer,
      days_nr,
      per_hour_money,
      city,
      neighbourhood,
      persons_nr,
      day_name,
      hours_nr,
      time_from,
      time_until,
      date,
      describtion,
      notes_and_requirements,
      street,
      haus_nr,
      post_code,
      add_to_address,
    });
    if (result.errorsState) setFormErrors(result.errors);
    else {
      Axios.post(
        "http://localhost:4000/api/v1/offer/add_offer",
        {
          title_offer,
          days_nr,
          per_hour_money,
          city,
          neighbourhood,
          persons_nr,
          day_name,
          hours_nr,
          time_from,
          time_until,
          date,
          describtion,
          notes_and_requirements,
          street,
          haus_nr,
          post_code,
          add_to_address,
          companyId: companyId,
        },
        {
          params: { userId: companyId },
          headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
        }
      )
        .then((res) => {
          navigate("/addedSucsessPage");
        })
        .catch((err) => {
          setFormErrors(err.response.data.message);
          console.log(err);
        });
    }
  };
  return (
    <section className="content">
      <div className="AddOfferForm">
        <div className="dateDivAddOffer">
          <p
            className="errorText"
            style={{ margin: "1em", fontWeight: "bold", color: "red" }}
          >
            {formErrors}
          </p>
          <div className="underLineBetween"></div>
        </div>

        <div className="addOfferInputLongOutWrap">
          <div className="addOfferInputLongInWrap">
            <label className="addOfferLabel">Title der Stelle</label>
            <input
              className="addOfferLongInput"
              type="text"
              name="title_offer"
              id="title_offer"
            ></input>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Wie viele Tage?</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="days_nr"
                id="days_nr"
              ></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">€ Pro Stunde</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="per_hour_money"
                id="per_hour_money"
              ></input>
            </div>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Stadt</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="city"
                id="city"
              ></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Stadtteil</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="neighbourhood"
                id="neighbourhood"
              ></input>
            </div>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Wie viele Personen?</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="persons_nr"
                id="persons_nr"
              ></input>
            </div>
          </div>
          <div className="underLineBetween"></div>
        </div>
        <div className="schichteHinzu">
          <div className="titleAddOfferSection">
            <p className="titleAddOfferText">Schichte Hinzufügen</p>
          </div>
          <div className="addOfferInputsOutWrap">
            <div className="addOfferInputsInWrap">
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Tag</label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="day_name"
                  id="day_name"
                ></input>
              </div>
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">
                  Wie viele Stunden?
                </label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="hours_nr"
                  id="hours_nr"
                ></input>
              </div>
            </div>
            <div className="addOfferInputsInWrap">
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Zeit-von</label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="time_from"
                  id="time_from"
                ></input>
              </div>
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Zeit-bis</label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="time_until"
                  id="time_until"
                ></input>
              </div>
            </div>
            <div className="addOfferInputsInWrap" id="addOfferInputsInWrap">
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Datum</label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="date"
                  id="date"
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="underLineBetween"></div>
        <div className="addOfferBottomSectionWrap">
          <div className="beschreibungAddOffer">
            <div className="titeBottomDivAddOffer">
              <p className="titeBottomAddOfferText">Beschreibung</p>
            </div>
            <div className="textareaWrapAddOffer">
              <textarea
                maxLength="200"
                className="textAreaAddOffer"
                type="text"
                name="describtion"
                id="describtion"
              ></textarea>
            </div>
          </div>
          <div className="hinweiseAddOffer">
            <div className="titeBottomDivAddOffer">
              <p className="titeBottomAddOfferText">Hinweise & Anforderungen</p>
            </div>
            <div className="textareaWrapAddOffer">
              <textarea
                maxLength="200"
                className="textAreaAddOffer"
                type="text"
                name="notes_and_requirements"
                id="notes_and_requirements"
              ></textarea>
            </div>
          </div>
          <div className="adresseAddOffer">
            <div className="titeBottomDivAddOffer">
              <p className="titeBottomAddOfferText">Adresse</p>
            </div>
            <div className="addOfferInputsOutWrap">
              <div className="addOfferInputsInWrap">
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Straße</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="street"
                    id="street"
                  ></input>
                </div>
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Haus.Nr</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="haus_nr"
                    id="haus_nr"
                  ></input>
                </div>
              </div>
            </div>
            <div className="addOfferInputsOutWrap">
              <div className="addOfferInputsInWrap">
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Postleitzahl</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="post_code"
                    id="post_code"
                  ></input>
                </div>
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Zusätlich</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="add_to_address"
                    id="add_to_address"
                  ></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="addOfferWrapButton">
          <button
            className="AddOfferButton"
            type="submit"
            onClick={offerPostHandler}
          >
            Das Angebot Hinzufügen
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
