import React from "react";
import "../../style/RegStudentPage/RegStudentPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const TheSection = () => {
  // const [studentChacked, setStudentChacked] = useState("");
  const navigate = useNavigate();
  const initialValues = {
    first_name: "",
    last_name: "",
    birth_date: "",
    birth_place: "",
    nationality: "",
    sex: "",
    tel_nr: "",
    mobile_nr: "",
    email: "",
    living_place: "",
    street: "",
    password: "",
    haus_nr: "",
    post_code: "",
    co: "",
    add_to_address: "",
    university: "",
    personal_id_nr: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const validate = (values) => {
    let errors = "";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

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
      !regex.test(values.email)
    ) {
      errors = "Bitte richtige Infos eingeben!";
    }

    return errors;
  };
  const handleChange = (e) => {
    //  console.log("pla", e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  useEffect(() => {
    if (formErrors === "" && isSubmit) {
      console.log("sucess");
      regsHandle();
    }
  }, [formErrors, formValues]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  function regsHandle() {
    //  const email = formValues.email;
    //  const password = formValues.password;
    const first_name = formValues.first_name;
    const last_name = formValues.last_name;
    const birth_date = formValues.birth_date;
    const birth_place = formValues.birth_place;
    const nationality = formValues.nationality;
    const sex = formValues.sex;
    const tel_nr = formValues.tel_nr;
    const mobile_nr = formValues.mobile_nr;
    const email = formValues.email;
    const living_place = formValues.living_place;
    const street = formValues.street;
    const password = formValues.password;
    const haus_nr = formValues.haus_nr;
    const post_code = formValues.post_code;
    const co = formValues.co;
    const add_to_address = formValues.add_to_address;
    const university = formValues.university;
    const personal_id_nr = formValues.personal_id_nr;

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
        console.log(err);
      });
  }

  return (
    <section className="content">
      <div className="regStudentForm">
        <div className="regSLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
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
                  className="RegASInput"
                  type="text"
                  value={formValues.first_name}
                  onChange={handleChange}
                />
              </div>

              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Name</label>
                <input
                  name="last_name"
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
          </div>
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
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Re-Passwort</label>
                <input
                  name="re_password"
                  className="RegASInput"
                  type="password"
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
                  value={formValues.add_to_address}
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
                  name="university"
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
                  value={formValues.personal_id_nr}
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
              onClick={handleSubmit}
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
