import React from "react";
import "../../style/RegStudentPage/RegStudentPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";

const TheSection = () => {
  // const [studentChacked, setStudentChacked] = useState("");

  const initialValues = {
    firs_tname: "",
    last_name: "",
    birth_date: "",
    birth_place: "",
    nationality: "",
    sex: "",
    tel_nr: "",
    mobile_nr: "",
    email: "",
    re_email: "",
    living_place: "",
    street: "",
    password: "",
    re_password: "",
    haus_nr: "",
    post_code: "",
    co: "",
    add_to_adress: "",
    university: "",
    porsonal_id_nr: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const validate = (values) => {
    const erros = {};
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  return (
    <section className="content">
      <form className="regStudentForm" onSubmit={handleSubmit}>
        <div className="regSLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="regAsSDiv">
          <p id="regAsSText">Registrierung Als Student</p>
          <p
            className="errorText"
            style={{ margin: "1em", fontWeight: "bold", color: "red" }}
          >
            {" "}
            bitte richtige Infos eingeben!
          </p>
        </div>
        <div className="regASINForm">
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Vorname</label>
                <input
                  name="firstname"
                  className="RegASInput"
                  type="text"
                  value={formValues.firs_tname}
                  onChange={handleChange}
                />
              </div>

              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Name</label>
                <input
                  name="lastname"
                  className="RegASInput"
                  type="text"
                  value={formValues.last_name}
                  onChange={handleChange}
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
                  className="RegASInput"
                  type="text"
                  value={formValues.birth_date}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Geburtsort</label>
                <input
                  name="birth_place"
                  className="RegASInput"
                  type="text"
                  value={formValues.birth_place}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Nationalität</label>
                <input
                  name="nationality"
                  className="RegASInput"
                  type="text"
                  value={formValues.nationality}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Geschlicht</label>
                <input
                  name="sex"
                  className="RegASInput"
                  type="text"
                  value={formValues.sex}
                  onChange={handleChange}
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
                  className="RegASInput"
                  type="text"
                  value={formValues.tel_nr}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Handy.Nr</label>
                <input
                  name="mobile_nr"
                  className="RegASInput"
                  type="text"
                  value={formValues.mobile_nr}
                  onChange={handleChange}
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
                  className="RegASInput"
                  type="text"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Re-Email</label>
                <input
                  name="re_email"
                  className="RegASInput"
                  type="text"
                  value={formValues.re_email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>{" "}
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Wohnort</label>
                <input
                  name="living_place"
                  className="RegASInput"
                  type="text"
                  value={formValues.living_place}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Straße</label>
                <input
                  name="street"
                  className="RegASInput"
                  type="text"
                  value={formValues.street}
                  onChange={handleChange}
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
                  className="RegASInput"
                  type="text"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Re-Passwort</label>
                <input
                  name="re_password"
                  className="RegASInput"
                  type="text"
                  value={formValues.re_password}
                  onChange={handleChange}
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
                  className="RegASInput"
                  type="text"
                  value={formValues.haus_nr}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Postleitzahl</label>
                <input
                  name="post_code"
                  className="RegASInput"
                  type="text"
                  value={formValues.post_code}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">C/O</label>
                <input
                  name="co"
                  className="RegASInput"
                  type="text"
                  value={formValues.co}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Zusatz zur Adresse</label>
                <input
                  name="add_to_address"
                  className="RegASInput"
                  type="text"
                  value={formValues.add_to_adress}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Hochschule</label>
                <input
                  name="univrtsity"
                  className="RegASInput"
                  type="text"
                  value={formValues.university}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Ausweis.Nr</label>
                <input
                  name="personal_id_nr"
                  className="RegASInput"
                  type="text"
                  value={formValues.porsonal_id_nr}
                  onChange={handleChange}
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
              value="Sign Up"
              className="signUpSButton"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "http://localhost:3000/regSucsessPage";
              }}
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
      </form>
    </section>
  );
};

export default TheSection;
/* <div className="regASRow">
            <div className="regASRowIn" id="immaInputFileLabel">
              <label className="regASLebel">Immatr.Hochladen</label>
              <input
                name="" className="RegASInput" type="file" id="immaInputFile" />
            </div>
          </div>*/
