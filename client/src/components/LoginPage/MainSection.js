import React, { useEffect } from "react";
import "../../style/LoginPage/LoginPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
const TheSection = () => {
  //const [forUserLink, setForUserLink] = useState("");

  //const param = useParams();

  let userId = "12345";
  let forUserLink = "";
  let userTpy = "firma";
  if (userTpy === "firma") forUserLink = "homePageFirma";
  else if (userTpy === "student") forUserLink = "homePageStudent";
  console.log(forUserLink);
  /* useEffect(()=>{if (userTpy === "student") {
    setForUserLink ('homePageStudent') ;
  } else if (userTpy === "firma") {
    setForUserLink ('homePageFirma') ;
  }})*/

  const initialValues = {
    email: "",
    password: "",
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

    if (!values.email || !values.password || !regex.test(values.email)) {
      errors = "Bitte richtige Infos eingeben!";
    }

    return errors;
  };
  useEffect(() => {
    console.log(formErrors);
    if (formErrors === "" && isSubmit) {
      console.log(formValues);
      window.location.href = `http://localhost:3000/${forUserLink}/${userId}`;
    }
  }, [formErrors]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  return (
    <section className="content">
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="loginLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="loginFormInnerWrap">
          <p
            className="errorText"
            style={{ margin: "1em", fontWeight: "bold", color: "red" }}
          >
            {formErrors}
          </p>
          <div className="loginRow">
            <div className="loginRowIn">
              <div className="loginRowInWrap">
                <label className="loginLebel">Email</label>
                <input
                  className="loginInput"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="loginRow">
            <div className="loginRowIn">
              <div className="loginRowInWrap">
                <label className="loginLebel">Passwort</label>
                <input
                  className="loginInput"
                  type="text"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="loginButtonDivANDTerms">
            <div className="loginbuttonDiv">
              <input type="submit" value="Login" className="loginButtonFirma" />
            </div>
            <div className="termsloginDiv">
              <input
                type="checkbox"
                id="scaleslogin"
                name="scaleslogin"
              ></input>
              <p className="acceptTermsTextlogin">
                &nbsp;I agree with the{" "}
                <a href="" className="TermsANDCondTextFirma">
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
