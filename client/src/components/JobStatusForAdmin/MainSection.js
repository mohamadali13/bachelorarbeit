import Axios from "axios";
import React, { useEffect, useState } from "react";

import "../../style/JobStatusForStudent/JobStatusForStudent.scss";

const TheSection = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const [offersAppliedsData, setOffersAppliedsData] = useState([]);
  const [offersUpcommingData, setOffersUpcommingData] = useState([]);
  const [offersFinishedData, setOffersFinishedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  useEffect(() => {
    const reqOne = Axios.get(
      "http://localhost:4000/api/v1/offer/get_applied_admin"
    );
    const reqTwo = Axios.get(
      "http://localhost:4000/api/v1/offer/get_upcomming_admin"
    );
    const reqThree = Axios.get(
      "http://localhost:4000/api/v1/offer/get_finished_admin"
    );
    // console.log(localStorage.getItem("userId"));
    setLoading(true);
    Axios.all([reqOne, reqTwo, reqThree])
      .then(
        Axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const responseThree = responses[2].data;

          setOffersAppliedsData(responseOne);
          setOffersUpcommingData(responseTwo);
          setOffersFinishedData(responseThree);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [toggleState]);
  let offersApplied =
    !loading && offersAppliedsData.length > 0 ? (
      offersAppliedsData.map((offer) => {
        return (
          <div className="innerInfoWrap" key={offer["id"]}>
            <div className="infoBeworbenFirma">
              <p className="infoBeworbenFirmaText">
                <span key={offer["id"]}>
                  {offer["first_name"]} {offer["last_name"]} hat sich für Stelle{" "}
                  {offer["title_job"]} Nr {offer["id"]} bei der Firme:{" "}
                  {offer["company_name"]} beworben
                </span>
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p>There is no data</p>
    );
  let offersUpcomming =
    !loading && offersUpcommingData.length > 0 ? (
      offersUpcommingData.map((offer) => {
        return (
          <div className="innerInfoWrap" key={offer["id"]}>
            <div className="infoBeworbenFirma">
              <span className="infoBeworbenFirmaText" key={offer["id"]}>
                {offer["first_name"]} {offer["last_name"]} wurde für Stelle{" "}
                {offer["title_job"]} Nr {offer["id"]} bei der Firme:{" "}
                {offer["company_name"]} ausgewählt
              </span>
              <button
                style={{ backgroundColor: "red" }}
                className="finishButton"
                onClick={() => {
                  Axios.put(
                    `http://localhost:4000/api/v1/offer/reject_req_applay`,
                    null,
                    { params: { id_application: offer["id_application"] } }
                  )
                    .then((res) => {
                      console.log(res.data);
                      window.location.reload();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Absagen
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>There is no data</p>
    );
  let offersFinished =
    !loading && offersFinishedData.length > 0 ? (
      offersFinishedData.map((offer) => {
        return (
          <div className="innerInfoWrap" key={offer["id"]}>
            <div className="infoBeworbenFirma">
              <span className="infoBeworbenFirmaText">
                {offer["first_name"]} {offer["last_name"]} hat die Stelle{" "}
                {offer["title_job"]} Nr {offer["id"]} bei der Firme:{" "}
                {offer["company_name"]} erfolgreich beendet.
              </span>
            </div>
          </div>
        );
      })
    ) : (
      <p>There is no data</p>
    );
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="content">
      <div className="tabWrap">
        <div className="tabsDiv">
          <div
            className={toggleState === 1 ? "tab1 tab active" : "tab"}
            onClick={() => toggleTab(1)}
          >
            Beworben
          </div>
          <div
            className={toggleState === 2 ? "tab2 tab active" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Anstehend
          </div>
          <div
            className={toggleState === 3 ? "tab3 tab active" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Beendet
          </div>
        </div>
        <div className="tabsContentDiv">
          {(() => {
            if (toggleState === 1) {
              return <div className="contentTab1">{offersApplied}</div>;
            } else if (toggleState === 2) {
              return <div className="contentTab2">{offersUpcomming}</div>;
            } else return <div className="contentTab3">{offersFinished}</div>;
          })()}
        </div>
      </div>
    </section>
  );
};

export default TheSection;
