import React from "react";
import "../../style/LandingPage/LandingPage.scss";
import "../../style/bodySection.scss";

const theSection = () => {
  return (
    <section className="content">
      <div className="signUpBox">
        <div>
          <p className="titleSignBox">
            {" "}
            Sie suchen vorqualifiziertes studentisches Personal in Zeitarbeit{" "}
          </p>
        </div>
        <div className="vorteileSignBox">
          <ul className="vorteileList">
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Unsere automatischen Prozesse machen eine überdurchschnittlich
                schnelle Personalfindung und -buchung möglich, wenn nötig
                innerhalb von 24 Stunden{" "}
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Unsere Technologien gewähren eine unkomplizierte
                Auftragsabwicklung und dank klarer digitaler Buchungsprozesse
                einen geringen Verwaltungsaufwand für Sie
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Wir sind jeden Tag persönlich für Sie erreichbar und
                unterstützen Sie und Ihre Kollegen gerne bei der Nutzung unserer
                Buchungsplattform
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Wir lernen unsere Studenten persönlich kennen, bieten ihnen auf
                Wunsch Schulungen an und führen ein transparentes
                Leistungs-Bewertungssystem
              </p>
            </li>
          </ul>
        </div>
        <button className="sigUpButtom">Sign Up</button>
      </div>
      <div className="signUpBox">
        <div>
          <p className="titleSignBox">
            {" "}
            Du bist Student und suchst flexible Jobs auf Stundenbasis?{" "}
          </p>
        </div>
        <div className="vorteileSignBox">
          <ul className="vorteileList">
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                {" "}
                Keine Vorerfahrung? Kein Problem! Arbeite im Einzelhandel,
                Event- oder Logistikbereich
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                {" "}
                Such Dir einen Job für morgen oder für nächste Woche
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                11,00€/h Mindestlohn und 50% Gehalt gibt es wenige Tage nach
                Feierabend, den Rest im Folgemonat{" "}
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Erweitere Deine Skills für mehr Jobangebote und nimm an einer
                unserer Schulungen teil
              </p>
            </li>
          </ul>
        </div>
        <button className="sigUpButtom">Sign Up</button>
      </div>
    </section>
  );
};

export default theSection;
