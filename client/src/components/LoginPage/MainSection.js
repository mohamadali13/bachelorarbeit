import React, { useEffect } from "react";
import "../../style/LoginPage/LoginPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";
import { useParams } from "react-router-dom";
const TheSection = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswort, setLoginPasswort] = useState("");
  //const [forUserLink, setForUserLink] = useState("");

  const param = useParams();
  
  let userId = "12345";
  let forUserLink =""
  let userTpy = "student";
  if (userTpy ==='firma') forUserLink ='homePageFirma'; else if (userTpy ==='student') forUserLink ='homePageStudent'
 /* useEffect(()=>{if (userTpy === "student") {
    setForUserLink ('homePageStudent') ;
  } else if (userTpy === "firma") {
    setForUserLink ('homePageFirma') ;
  }})*/
  
  return (
    <section className="content">
      <form id="loginForm">
        <div className="loginLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="loginFormInnerWrap">
          <div className="loginRow">
            <div className="loginRowIn">
              <div className="loginRowInWrap">
                <label className="loginLebel">Email</label>
                <input
                  className="loginInput"
                  type="text"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
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
                  value={loginPasswort}
                  onChange={(e) => setLoginPasswort(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="loginButtonDivANDTerms">
            <div className="loginbuttonDiv">
              <input
                type="submit"
                value="Login"
                className="loginButtonFirma"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = `http://localhost:3000/${forUserLink}/${userId}`;
                }}
              />
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
