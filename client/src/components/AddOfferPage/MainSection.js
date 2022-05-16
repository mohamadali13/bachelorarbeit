import React from "react";
import "../../style/AddOfferPage/AddOfferPage.scss";
import { useState } from "react";

const theSection = () => {
  return (
    <section className="content">
      <form className="AddOfferForm">
        <div className="dateDivAddOffer">
          <p className="dateAddOfferP">Donnerstag, 28 Dezember 2021 </p>
          <div className="underLineBetween"></div>
        </div>

        <div className="addOfferInputLongOutWrap">
          <div className="addOfferInputLongInWrap">
            <label className="addOfferLabel">Title der Stelle</label>
            <input className="addOfferLongInput"></input>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Wie viele Tage?</label>
              <input className="addOfferInputShort"></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">€ Pro Stunde</label>
              <input className="addOfferInputShort"></input>
            </div>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Stadt</label>
              <input className="addOfferInputShort"></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Stadtteil</label>
              <input className="addOfferInputShort"></input>
            </div>
          </div>
        </div>

        <div className="addOfferInputsOutWrap">
          <div className="addOfferInputsInWrap">
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Geschlecht</label>
              <input className="addOfferInputShort"></input>
            </div>
            <div className="addOfferInputsWrap">
              <label className="addOfferLabelInputs">Wie viele Personen?</label>
              <input className="addOfferInputShort"></input>
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
                <label className="addOfferLabelInputs">Tage</label>
                <input className="addOfferInputShort"></input>
              </div>
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">
                  Wie viele Stunden?
                </label>
                <input className="addOfferInputShort"></input>
              </div>
            </div>
            <div className="addOfferInputsInWrap">
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Zeit-von</label>
                <input className="addOfferInputShort"></input>
              </div>
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Zeit-zu</label>
                <input className="addOfferInputShort"></input>
              </div>
            </div>
            <div className="addOfferInputsInWrap" id="addOfferInputsInWrap">
              <div className="addOfferInputsWrap">
                <label className="addOfferLabelInputs">Datum</label>
                <input className="addOfferInputShort"></input>
              </div>
            </div>
            <div className="addOfferInputsInWrap" id="buttonAddSchicht">
              <div className="addOfferInputsWrap">
                <button className="buttonAddSchicht" onClick={() => {}}>
                  Hinzufügen
                </button>
              </div>
            </div>
            <div className="schichtenItems">
              <div className="buttonAddSchichtInnerWrap">
                <div className="schichtNr">Schicht 1</div>
                <div className="schichtInfosTable">
                  <div className="schichtInfoCol">re</div>
                  <div className="schichtInfoCol">r</div>
                  <div className="schichtInfoCol">ra</div>
                  <div className="schichtInfoCol">d</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="underLineBetween"></div>
        <div className="addOfferBottomSectionWrap">
          <div className="beschreibungAddOffer">
            <div className="">
              <p className="">Beschreibung</p>
            </div>
            <div className=""></div>
          </div>
          <div className="hinweiseAddOffer">
            <div className="">
              <p className="">Hinweise & Anforderungen</p>
            </div>
            <div className=""></div>
          </div>
          <div className="adresseAddOffer">
            <div className="">
              <p className="">Adresse</p>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div className="">
          <button className="" type="submit">
            Das Angebot Hinzufügen
          </button>
        </div>
      </form>
    </section>
  );
};

export default theSection;
/*<div className="">
                <div className="addOfferInputsOutWrap">
                    <div className="addOfferInputsInWrap">
                        <div className="addOfferInputsWrap">
                        <label className="addOfferLabelInputs">Wie viele Tage?</label>
                        <input className="addOfferInputShort"></input>
                        </div>
                        <div className="addOfferInputsWrap">
                        <label className="addOfferLabelInputs">€ Pro Stunde</label>
                        <input className="addOfferInputShort"></input>
                        </div>
                    </div>
                 </div>

            <div className="addOfferInputsOutWrap">
              <div className="addOfferInputsInWrap">
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Stadt</label>
                  <input className="addOfferInputShort"></input>
                </div>
                <div className="addOfferInputsWrap">
                  <label className="addOfferLabelInputs">Stadtteil</label>
                  <input className="addOfferInputShort"></input>
                </div>
              </div>
            </div></div>*/
