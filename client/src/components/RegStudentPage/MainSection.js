import React from "react";
import "../../style/RegStudentPage/RegStudentPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";

const TheSection = () => {
  const [vorname, setVorname] = useState("");
  const [name, setName] = useState("");
  const [gebDatum, setGebDatum] = useState("");
  const [gebsOrt, setGebsOrt] = useState("");
  const [nationalitaet, setNationalitaet] = useState("");
  const [geschlicht, setGeschlicht] = useState("");
  const [telNr, setTelNr] = useState("");
  const [handyNr, setHandyNr] = useState("");
  const [wohnort, setWohnort] = useState("");
  const [email, setEmail] = useState("");
  const [reEmail, setReEmail] = useState("");
  const [passwort, setPasswort] = useState("");
  const [rePasswort, setRePwasswort] = useState("");
  const [hausNr, setHausNr] = useState("");
  const [strasse, setStrasse] = useState("");
  const [postleitzahl, setPostleitzahl] = useState("");
  const [co, setCo] = useState("");
  const [hochschule, setHochschule] = useState("");
  const [ausweisNr, setAusweisNr] = useState("");
  const [zuSatz, setZusatz] = useState("");
  const [studentChacked, setStudentChacked] = useState("");

  return (
    <section className="content">
      <form className="regStudentForm">
        <div className="regSLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="regAsSDiv">
          <p id="regAsSText">Registrierung Als Student</p>
        </div>
        <div className="regASINForm">
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Vorname</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={vorname}
                  onChange={(e) => setVorname(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Name</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Geb.datum</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={gebDatum}
                  onChange={(e) => setGebDatum(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Geburtsort</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={gebsOrt}
                  onChange={(e) => setGebsOrt(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Nationalität</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={nationalitaet}
                  onChange={(e) => setNationalitaet(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Geschlicht</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={geschlicht}
                  onChange={(e) => setGeschlicht(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Tel.Nr</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={telNr}
                  onChange={(e) => setTelNr(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Handy.Nr</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={handyNr}
                  onChange={(e) => setHandyNr(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Email</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Re-Email</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={reEmail}
                  onChange={(e) => setReEmail(e.target.value)}
                />
              </div>
            </div>
          </div>{" "}
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Wohnort</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={wohnort}
                  onChange={(e) => setWohnort(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Straße</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={strasse}
                  onChange={(e) => setStrasse(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Passwort</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={passwort}
                  onChange={(e) => setPasswort(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Re-Passwort</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={rePasswort}
                  onChange={(e) => setRePwasswort(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Haus.Nr</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={hausNr}
                  onChange={(e) => setHausNr(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Postleitzahl</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={postleitzahl}
                  onChange={(e) => setPostleitzahl(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">C/O</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={co}
                  onChange={(e) => setCo(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Zusatz zur Adresse</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={zuSatz}
                  onChange={(e) => setZusatz(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn">
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Hochschule</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={hochschule}
                  onChange={(e) => setHochschule(e.target.value)}
                />
              </div>
              <div className="rowRegAsSInputInWrap">
                <label className="regASLebel">Ausweis.Nr</label>
                <input
                  className="RegASInput"
                  type="text"
                  value={ausweisNr}
                  onChange={(e) => setAusweisNr(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="regASRow">
            <div className="regASRowIn" id="immaInputFileLabel">
              <label className="regASLebel">Immatr.Hochladen</label>
              <input className="RegASInput" type="file" id="immaInputFile" />
            </div>
          </div>
        </div>
        <div className="signUpSButtonDivANDTerms">
          <div className="signUpSbuttonDiv">
            <input
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
