import React from "react";
import "../../style/RegStudentPage/RegStudentPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const TheSection = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values) => {
    let errors = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    let errorsState = false;
    if (
      values.first_name.length == 0 ||
      values.last_name.length == 0 ||
      values.birth_date.length == 0 ||
      values.birth_place.length == 0 ||
      values.nationality.length == 0 ||
      values.sex.length == 0 ||
      values.tel_nr.length == 0 ||
      values.mobile_nr.length == 0 ||
      values.email.length == 0 ||
      values.re_email.length == 0 ||
      values.living_place.length == 0 ||
      values.street.length == 0 ||
      values.password.length == 0 ||
      values.re_password.length == 0 ||
      values.haus_nr.length == 0 ||
      values.post_code.length == 0 ||
      values.university.length == 0 ||
      values.personal_id_nr.length == 0 ||
      !regex.test(values.email) ||
      !regex.test(values.re_email)
    ) {
      errors = "Bitte richtige Infos eingeben!";
      errorsState = true;
    }

    return { errors, errorsState };
  };

  function regsHandle() {
    let first_name = document.getElementById("first_name").value;
    let last_name = document.getElementById("last_name").value;
    let birth_date = document.getElementById("birth_date").value;
    let birth_place = document.getElementById("birth_place").value;
    let nationality = document.getElementById("nationality").value;
    let sex = document.getElementById("sex").value;
    let tel_nr = document.getElementById("tel_nr").value;
    let mobile_nr = document.getElementById("mobile_nr").value;
    let email = document.getElementById("email").value;
    let living_place = document.getElementById("living_place").value;
    let street = document.getElementById("street").value;
    let password = document.getElementById("password").value;
    let haus_nr = document.getElementById("haus_nr").value;
    let post_code = document.getElementById("post_code").value;
    let co = document.getElementById("co").value;
    let add_to_address = document.getElementById("add_to_address").value;
    let university = document.getElementById("university").value;
    let personal_id_nr = document.getElementById("personal_id_nr").value;
    let re_email = document.getElementById("re_email").value;
    let re_password = document.getElementById("re_password").value;

    let result = validate({
      first_name,
      last_name,
      birth_date,
      birth_place,
      nationality,
      sex,
      tel_nr,
      mobile_nr,
      email,
      living_place,
      street,
      password,
      haus_nr,
      post_code,
      re_email,
      re_password,
      university,
      personal_id_nr,
    });
    if (result.errorsState) setFormErrors(result.errors);
    else {
      Axios.post("http://localhost:4000/api/v1/auth/signup/st", {
        first_name,
        last_name,
        birth_date,
        birth_place,
        nationality,
        sex,
        tel_nr,
        mobile_nr,
        email,
        living_place,
        street,
        password,
        haus_nr,
        post_code,
        co,
        add_to_address,
        university,
        personal_id_nr,
      })
        .then((res) => {
          navigate("/regSucsessPage");
        })
        .catch((err) => {
          setFormErrors(err.response.data.message);
        });
    }
  }

  return (
    <body>
      <section className="content">
        <div className="regStudentForm">
          <div className="regSLogoImageDiv">
            <img
              src={LogoImage}
              style={{ width: "25%", height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="regAsSDiv">
            <p id="regAsSText">Registrierung Als Student</p>
            <p
              className="errorText"
              style={{ margin: "1em", fontWeight: "bold", color: "red" }}
            >
              {formErrors}
            </p>
          </div>
          <div className="regASINForm">
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Vorname</label>
                  <input
                    name="first_name"
                    id="first_name"
                    className="RegASInput"
                    type="text"
                  />
                </div>

                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Name</label>
                  <input
                    name="last_name"
                    id="last_name"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Geb.datum</label>
                  <input
                    name="birth_date"
                    id="birth_date"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Geburtsort</label>
                  <input
                    id="birth_place"
                    name="birth_place"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Nationalität</label>
                  <input
                    id="nationality"
                    name="nationality"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Geschlicht</label>
                  <input
                    name="sex"
                    id="sex"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Tel.Nr</label>
                  <input
                    name="tel_nr"
                    id="tel_nr"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Handy.Nr</label>
                  <input
                    name="mobile_nr"
                    id="mobile_nr"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Email</label>
                  <input
                    name="email"
                    id="email"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Re-Email</label>
                  <input
                    name="re_email"
                    id="re_email"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Wohnort</label>
                  <input
                    name="living_place"
                    id="living_place"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Straße</label>
                  <input
                    name="street"
                    id="street"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Passwort</label>
                  <input
                    name="password"
                    id="password"
                    className="RegASInput"
                    type="password"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Re-Passwort</label>
                  <input
                    name="re_password"
                    id="re_password"
                    className="RegASInput"
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Haus.Nr</label>
                  <input
                    name="haus_nr"
                    id="haus_nr"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Postleitzahl</label>
                  <input
                    name="post_code"
                    id="post_code"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">C/O</label>
                  <input name="co" id="co" className="RegASInput" type="text" />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Zusatz zur Adresse</label>
                  <input
                    name="add_to_address"
                    id="add_to_address"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="regASRow">
              <div className="regASRowIn">
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Hochschule</label>
                  <input
                    name="university"
                    id="university"
                    className="RegASInput"
                    type="text"
                  />
                </div>
                <div className="rowRegAsSInputInWrap">
                  <label className="regASLebel">Ausweis.Nr</label>
                  <input
                    name="personal_id_nr"
                    id="personal_id_nr"
                    className="RegASInput"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="signUpSButtonDivANDTerms">
            <div className="signUpSbuttonDiv">
              <input
                name="submit"
                type="submit"
                value="Registrieren"
                className="signUpSButton"
                onClick={regsHandle}
              />
            </div>
            <div className="termsSDiv">
              <div className="checkboxWrap">
                <input type="checkbox" id="scales" name="scales"></input>
              </div>
              <div className="acceptTermsText">
                <p className="acceptTermsText">
                  I agree with the{" "}
                  <a href="" className="TermsANDCondText">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
};

export default TheSection;

