import React from "react";
import "../../style/RegFirmaPage/RegFirmaStyle.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const TheSection = () => {
  const navigate = useNavigate();
  /* const initialValues = {
    company_name: "",
    origin: "",
    found_date: "",
    reg_nr: "",
    street: "",
    city: "",
    tel_nr: "",
    fax_nr: "",
    add_to_address: "",
    first_name_rep: "",
    last_name_rep: "",
    email_company: "",
    email_rep: "",
    re_email_rep: "",
    password: "",
    re_password: "",
    tel_nr_rep: "",
    mobile_nr_rep: "",
    haus_nr: "",
    post_code: "",
  };*/
  // const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };
  const validate = (values) => {
    let errors = "";
    let errorsState = false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (
      values.company_name.length == 0 ||
      values.origin.length == 0 ||
      values.found_date.length == 0 ||
      values.reg_nr.length == 0 ||
      values.street.length == 0 ||
      values.city.length == 0 ||
      values.tel_nr.length == 0 ||
      values.fax_nr.length == 0 ||
      values.email_company.length == 0 ||
      values.add_to_address.length == 0 ||
      values.first_name_rep.length == 0 ||
      values.last_name_rep.length == 0 ||
      values.password.length == 0 ||
      values.re_password.length == 0 ||
      values.email_rep.length == 0 ||
      values.re_email_rep.length == 0 ||
      values.tel_nr_rep.length == 0 ||
      values.post_code.length == 0 ||
      values.haus_nr.length == 0 ||
      values.mobile_nr_rep.length == 0 ||
      !regex.test(values.email_company) ||
      !regex.test(values.email_rep) ||
      !regex.test(values.re_email_rep)
    ) {
      errors = "Bitte richtige Infos eingeben!";
      errorsState = true;
    }

    return { errorsState, errors };
  };
  // useEffect(() => {
  //   //  console.log(formErrors);
  //   if (formErrors === "" && isSubmit) {
  //     //  console.log(formValues);
  //     regsHandler();
  //   }
  // }, [formErrors, formValues]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };
  const regsHandler = () => {
    let company_name = document.getElementById("company_name").value;
    let origin = document.getElementById("origin").value;
    let found_date = document.getElementById("found_date").value;
    let reg_nr = document.getElementById("reg_nr").value;
    let street = document.getElementById("street").value;
    let city = document.getElementById("city").value;
    let tel_nr = document.getElementById("tel_nr").value;
    let fax_nr = document.getElementById("fax_nr").value;
    let add_to_address = document.getElementById("add_to_address").value;
    let first_name_rep = document.getElementById("first_name_rep").value;
    let last_name_rep = document.getElementById("last_name_rep").value;
    let email_company = document.getElementById("email_company").value;
    let email_rep = document.getElementById("email_rep").value;
    let password = document.getElementById("password").value;
    let tel_nr_rep = document.getElementById("tel_nr_rep").value;
    let mobile_nr_rep = document.getElementById("mobile_nr_rep").value;
    let haus_nr = document.getElementById("haus_nr").value;
    let post_code = document.getElementById("post_code").value;
    let re_password = document.getElementById("re_password").value;
    let re_email_rep = document.getElementById("re_email_rep").value;
    let result = validate({
      company_name,
      origin,
      found_date,
      reg_nr,
      street,
      city,
      tel_nr,
      fax_nr,
      add_to_address,
      first_name_rep,
      last_name_rep,
      email_company,
      email_rep,
      password,
      tel_nr_rep,
      mobile_nr_rep,
      haus_nr,
      post_code,
      re_email_rep,
      re_password,
    });
    if (result.errorsState) setFormErrors(result.errors);
    else {
      Axios.post("http://localhost:4000/api/v1/auth/signup/co", {
        company_name: company_name,
        origin: origin,
        found_date: found_date,
        reg_nr: reg_nr,
        street: street,
        city: city,
        tel_nr: tel_nr,
        fax_nr: fax_nr,
        add_to_address: add_to_address,
        first_name_rep: first_name_rep,
        last_name_rep: last_name_rep,
        email_company: email_company,
        email_rep: email_rep,
        password: password,
        tel_nr_rep: tel_nr_rep,
        mobile_nr_rep: mobile_nr_rep,
        haus_nr: haus_nr,
        post_code: post_code,
      })
        .then((res) => {
          navigate("/regSucsessPage");
        })
        .catch((err) => {
          setFormErrors(err.response.data.message);
          console.log(err);
        });
    }
  };
  return (
    <section className="content">
      <div className="regFirmaForm">
        <div className="regFLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="regAsFDiv">
          <p id="regAsFText">Registrierung Als Unternehmen</p>
          <p
            className="errorText"
            style={{ margin: "1em", fontWeight: "bold", color: "red" }}
          >
            {formErrors}
          </p>
        </div>
        <div className="regAFINForm">
          <div className="regAFRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Firma</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="company_name"
                  id="company_name"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Herkunft</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="origin"
                  id="origin"
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Grundsdatum</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="found_date"
                  id="found_date"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Reg.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="reg_nr"
                  id="reg_nr"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="regAsFDiv">
          <p id="regAsFText">Adresse</p>
        </div>
        <div className="regAFINForm">
          <div className="regAFRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Straße</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="street"
                  id="street"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Stadt</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="city"
                  id="city"
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Tel.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="tel_nr"
                  id="tel_nr"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Fax.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="fax_nr"
                  id="fax_nr"
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Haus.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="haus_nr"
                  id="haus_nr"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Postleitzahl</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="post_code"
                  id="post_code"
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Email</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="email_company"
                  id="email_company"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Zusätlich</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="add_to_address"
                  id="add_to_address"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="regAsFDiv">
          <p id="regAsFText">Vertreten durch</p>
        </div>
        <div className="regAFINForm">
          <div className="regAFRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Vorname</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="first_name_rep"
                  id="first_name_rep"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Name</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="last_name_rep"
                  id="last_name_rep"
                />
              </div>
            </div>
          </div>

          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Email</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="email_rep"
                  id="email_rep"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Re-Email</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="re_email_rep"
                  id="re_email_rep"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="regAFINForm">
          <div className="regAFRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Passwort</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="password"
                  id="password"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Re-Passwort</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="re_password"
                  id="re_password"
                />
              </div>
            </div>
          </div>

          <div className="regASRow">
            <div className="regAFRowIn">
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Tel.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="tel_nr_rep"
                  id="tel_nr_rep"
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Handy.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="mobile_nr_rep"
                  id="mobile_nr_rep"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="signUpFButtonDivANDTerms">
          <div className="signUpFbuttonDiv">
            <input
              type="submit"
              value="Sign Up"
              className="signUpFButtonFirma"
              onClick={regsHandler}
            />
          </div>
          <div className="termsFDiv">
            <input type="checkbox" id="scalesF" name="scalesF"></input>
            <p className="acceptTermsTextFirma">
              I agree with the{" "}
              <a href="" className="TermsANDCondText">
                Terms & Conditions
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheSection;
