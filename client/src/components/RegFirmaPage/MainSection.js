import React from "react";
import "../../style/RegFirmaPage/RegFirmaStyle.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState, useEffect } from "react";
import Axios from "axios";
const TheSection = () => {
  const initialValues = {
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
      !values.company_name ||
      !values.origin ||
      !values.found_date ||
      !values.reg_nr ||
      !values.street ||
      !values.city ||
      !values.tel_nr ||
      !values.fax_nr ||
      !values.email_company ||
      !values.add_to_address ||
      !values.first_name_rep ||
      !values.last_name_rep ||
      !values.password ||
      !values.re_password ||
      !values.email_rep ||
      !values.re_email_rep ||
      !values.tel_nr_rep ||
      !values.post_code ||
      !values.haus_nr ||
      !values.mobile_nr_rep ||
      !regex.test(values.email_company) ||
      !regex.test(values.email_rep) ||
      !regex.test(values.re_email_rep)
    ) {
      errors = "Bitte richtige Infos eingeben!";
    }

    return errors;
  };
  useEffect(() => {
  //  console.log(formErrors);
    if (formErrors === "" && isSubmit) {
    //  console.log(formValues);
      regsHandler();
    }
  }, [formErrors]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const regsHandler = () => {
    Axios.post("http://localhost:8080/createCoAccount", {
      company_name: formValues.company_name,
      origin: formValues.origin,
      found_date: formValues.found_date,
      reg_nr: formValues.reg_nr,
      street: formValues.street,
      city: formValues.city,
      tel_nr: formValues.tel_nr,
      fax_nr: formValues.fax_nr,
      add_to_address: formValues.add_to_address,
      first_name_rep: formValues.first_name_rep,
      last_name_rep: formValues.last_name_rep,
      email_company: formValues.email_company,
      email_rep: formValues.email_rep,
      password: formValues.password,
      tel_nr_rep: formValues.tel_nr_rep,
      mobile_nr_rep: formValues.mobile_nr_rep,
      haus_nr: formValues.haus_nr,
      post_code: formValues.post_code,
    })
      .then((res) => {
        if (
          Object.values(res.data).indexOf("Email ist bereits existiert") > -1
        ) {
          return setFormErrors(res.data.message);
        } else window.location.href = "http://localhost:3000/regSucsessPage";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="content">
      <form className="regFirmaForm" onSubmit={handleSubmit}>
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
                  value={formValues.company_name}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Herkunft</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="origin"
                  value={formValues.origin}
                  onChange={handleChange}
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
                  value={formValues.found_date}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Reg.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="reg_nr"
                  value={formValues.reg_nr}
                  onChange={handleChange}
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
                  value={formValues.street}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Stadt</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="city"
                  value={formValues.city}
                  onChange={handleChange}
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
                  value={formValues.tel_nr}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Fax.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="fax_nr"
                  value={formValues.fax_nr}
                  onChange={handleChange}
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
                  value={formValues.haus_nr}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Postleitzahl</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="post_code"
                  value={formValues.post_code}
                  onChange={handleChange}
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
                  value={formValues.email_company}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Zusätlich</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="add_to_address"
                  value={formValues.add_to_address}
                  onChange={handleChange}
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
                  value={formValues.first_name_rep}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Name</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="last_name_rep"
                  value={formValues.last_name_rep}
                  onChange={handleChange}
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
                  value={formValues.email_rep}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Re-Email</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="re_email_rep"
                  value={formValues.re_email_rep}
                  onChange={handleChange}
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
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Re-Passwort</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="re_password"
                  value={formValues.re_password}
                  onChange={handleChange}
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
                  value={formValues.tel_nr_rep}
                  onChange={handleChange}
                />
              </div>
              <div className="regAFRowInWrap">
                <label className="regAFLebel">Handy.Nr</label>
                <input
                  className="ResAFInput"
                  type="text"
                  name="mobile_nr_rep"
                  value={formValues.mobile_nr_rep}
                  onChange={handleChange}
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
      </form>
    </section>
  );
};

export default TheSection;
