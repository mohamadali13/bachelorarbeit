import React from "react";
import "../../style/AddOfferPage/AddOfferPage.scss";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
const TheSection = () => {
  let companyId = localStorage.getItem("userId");
  console.log(companyId);
  const userName = localStorage.getItem("name");
  const tokenUser = localStorage.getItem("token");
  const navigate = useNavigate();

  const initialValues = {
    title_offer: "",
    days_nr: "",
    per_hour_money: "",
    city: "",
    neighbourhood: "",
    persons_nr: "",
    day_name: "",
    hours_nr: "",
    time_from: "",
    time_until: "",
    date: "",
    describtion: "",
    notes_and_requirements: "",
    street: "",
    haus_nr: "",
    post_code: "",
    add_to_address: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    let errors = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
    }

    return errors;
  };

  useEffect(() => {
    //  console.log(formErrors);
    if (formErrors === "" && isSubmit) {
      //  console.log(formValues);
      offerPostHandler();
    }
  }, [formErrors, formValues]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const offerPostHandler = () => {
    Axios.post("http://localhost:4000/api/v1/offer/add_offer", {
      title_offer: formValues.title_offer,
      days_nr: formValues.days_nr,
      per_hour_money: formValues.per_hour_money,
      city: formValues.city,
      neighbourhood: formValues.neighbourhood,
      persons_nr: formValues.persons_nr,
      day_name: formValues.day_name,
      hours_nr: formValues.hours_nr,
      time_from: formValues.time_from,
      time_until: formValues.time_until,
      date: formValues.date,
      describtion: formValues.describtion,
      notes_and_requirements: formValues.notes_and_requirements,
      street: formValues.street,
      haus_nr: formValues.haus_nr,
      post_code: formValues.post_code,
      add_to_address: formValues.add_to_address,
      companyId: companyId,
    },{ headers: { "x-auth-token": `${tokenUser}` } })
      .then((res) => {
        navigate("/regSucsessPage");
      })
      .catch((err) => {
        setFormErrors(err.response.data.message);
        console.log(err);
      },);
  };
  return (
    <section className="content">
      <div className="AddOfferForm">
        <div className="dateDivAddOffer">
          <p className="dateAddOfferP">Donnerstag, 28 Dezember 2021 </p>
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
              value={formValues.title_offer}
              onChange={handleChange}
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
                value={formValues.days_nr}
                onChange={handleChange}
              ></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">€ Pro Stunde</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="per_hour_money"
                value={formValues.per_hour_money}
                onChange={handleChange}
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
                value={formValues.city}
                onChange={handleChange}
              ></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Stadtteil</label>
              <input
                className="addOfferInputShort"
                type="text"
                name="neighbourhood"
                value={formValues.neighbourhood}
                onChange={handleChange}
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
                value={formValues.persons_nr}
                onChange={handleChange}
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
                  value={formValues.day_name}
                  onChange={handleChange}
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
                  value={formValues.hours_nr}
                  onChange={handleChange}
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
                  value={formValues.time_from}
                  onChange={handleChange}
                ></input>
              </div>
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Zeit-bis</label>
                <input
                  className="addOfferInputShort"
                  type="text"
                  name="time_until"
                  value={formValues.time_until}
                  onChange={handleChange}
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
                  value={formValues.date}
                  onChange={handleChange}
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
                value={formValues.describtion}
                onChange={handleChange}
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
                value={formValues.notes_and_requirements}
                onChange={handleChange}
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
                    value={formValues.street}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Haus.Nr</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="haus_nr"
                    value={formValues.haus_nr}
                    onChange={handleChange}
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
                    value={formValues.post_code}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Zusätlich</label>
                  <input
                    className="addOfferInputShort"
                    type="text"
                    name="add_to_address"
                    value={formValues.add_to_address}
                    onChange={handleChange}
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
            onClick={handleSubmit}
          >
            Das Angebot Hinzufügen
          </button>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
/*<div className="addOfferInputsInWrap" id="buttonAddSchicht">
              <div className="addOfferInputsWrap">
                <button className="buttonAddSchicht" onClick={() => {}}>
                  Hinzufügen
                </button>
              </div>
            </div>
            <div className="schichtenItems">
              <div className="buttonAddSchichtInnerWrap">
                <div className="schichtNr">Schicht 1 &nbsp;</div>
                <div className="schichtInfosTable">
                  <div className="schichtInfoCol">re</div>
                  <div className="schichtInfoCol">r</div>
                  <div className="schichtInfoCol">ra</div>
                  <div className="schichtInfoCol">d</div>
                </div>
              </div>
            </div>*/
/*const postOfferHandler = () => {
    Axios.post(
      "http://localhost:4000/api/v1/offer/add_offer",
      {
        title_offer: formValues.title_offer,
        days_nr: formValues.days_nr,
        per_hour_money: formValues.per_hour_money,
        city: formValues.city,
        neighbourhood: formValues.neighbourhood,
        persons_nr: formValues.persons_nr,
        day_name: formValues.day_name,
        hours_nr: formValues.hours_nr,
        time_from: formValues.time_from,
        time_until: formValues.time_until,
        date: formValues.date,
        describtion: formValues.describtion,
        notes_and_requirements: formValues.notes_and_requirements,
        street: formValues.street,
        post_code: formValues.post_code,
        add_to_address: formValues.add_to_address,
        companyId: companyId,
      },
      { headers: { "x-auth-token": `${tokenUser}` } }
    )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        setFormErrors(err.response.data.message);
        console.log(err);
      });
  };*/
