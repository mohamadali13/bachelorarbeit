import React from "react";
import "../../style/LoginPage/LoginPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";

const TheSection = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPasswort, setLoginPasswort] = useState("");

  return (
    <section className="content">
      <form id="loginForm">
        <div className="loginLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="loginFormInnerWrap">
          <div className="LoginRow">
            <div className="LoginRowIn">
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
          <div className="LoginRow">
            <div className="LoginRowIn">
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
              <input type="submit" value="Login" className="loginButtonFirma" />
            </div>
            <div className="termsloginDiv">
              <input
                type="checkbox"
                id="scaleslogin"
                name="scaleslogin"
              ></input>
              <p className="acceptTermsTextlogin">
                I agree with the{" "}
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
