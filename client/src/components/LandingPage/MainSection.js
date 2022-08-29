import React from "react";
import "../../style/LandingPage/LandingPage.scss";
import "../../style/bodySection.scss";
import { useNavigate } from "react-router-dom";
const theSection = () => {
  const navigate = useNavigate();
  return (
    <section className="content">
      <div className="signUpBox">
        <div>
          <p className="titleSignBox">
            {" "}
            Sind Sie auf der Such für Zeitarbeit nach Studenten, die
            vorqualifiziert?{" "}
          </p>
        </div>
        <div className="vorteileSignBox">
          <ul className="vorteileList">
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Bencom bietet eine schnelle Personalfindung und -buchung, bei
                Notwendigkeit innerhalb von 24 Stunden{" "}
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Bencom gewährt eine unkomplizierte Auftragsabwicklung und einen
                geringen Verwaltungsaufwand für Sie .
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Wir sind jeden Tag persönlich für Sie erreichbar und
                unterstützen Sie gerne bei der Nutzung unserer Buchungsplattform
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Es werden unserer Studenten Schulungen angeboten
              </p>
            </li>
          </ul>
        </div>
        <button
          className="sigUpButtom"
          type="button"
          onClick={() => {
            navigate("/regFirmaPage");
          }}
        >
          Registrieren
        </button>
      </div>
      <div className="signUpBox">
        <div>
          <p className="titleSignBox">
            {" "}
            Du bist ein Student, der nach flexibler Jobs mit getem Gehalt sucht?{" "}
          </p>
        </div>
        <div className="vorteileSignBox">
          <ul className="vorteileList">
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                {""}
                Du hast noch keine Erfahrung? es ist kein Problem , du kannst
                Jobs, die keine unbedingt Vorerfahrung brauchen,finden
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                {" "}
                Finde Dir einen Job für morgen oder für nächste Woche
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                12,50 €/Stunde Mindestlohn{" "}
              </p>
            </li>
            <li>
              <div className="greenMark">✔</div>
              <p className="vorteileBeschreibung">
                Du kannst deine Skills für mehr und mehr Jobanbote erweitern,
                indem du unsere Schulung für Kasse und Logistik besuchst
              </p>
            </li>
          </ul>
        </div>
        <button
          className="sigUpButtom"
          type="button"
          onClick={() => {
            navigate("/regStudentPage");
          }}
        >
          Registrieren
        </button>
      </div>
    </section>
  );
};

export default theSection;
