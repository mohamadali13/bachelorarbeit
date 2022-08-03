import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../style/HomePageFirma/HomePageFirma.scss";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const tokenUser = localStorage.getItem("token");
  const user_role = localStorage.getItem("role");
  const [offerCompanyData, setOfferCompanyData] = useState([]);
  const [offersUpcommingData, setOffersUpcommingData] = useState([]);
  const [offersFinishedData, setOffersFinishedData] = useState([]);
  const [offersAppliedsData, setOffersAppliedsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  useEffect(() => {
    const reqOne = Axios.get(
      "http://localhost:4000/api/v1/offer/get_offer_company",
      {
        params: { userId: userId },
        headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
      }
    );
    const reqTwo = Axios.get(
      "http://localhost:4000/api/v1/offer/get_applied_company",
      {
        params: { userId: userId },
        headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
      }
    );
    const reqThree = Axios.get(
      "http://localhost:4000/api/v1/offer/get_upcomming_company",
      {
        params: { userId: userId },
        headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
      }
    );
    const reqFour = Axios.get(
      "http://localhost:4000/api/v1/offer/get_finished_company",
      {
        params: { userId: userId },
        headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
      }
    );
    setLoading(true);
    Axios.all([reqOne, reqTwo, reqThree, reqFour])
      .then(
        Axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const responseThree = responses[2].data;
          const responseFour = responses[3].data;

          setOfferCompanyData(responseOne);
          setOffersAppliedsData(responseTwo);
          setOffersUpcommingData(responseThree);
          setOffersFinishedData(responseFour);
          setLoading(false);
        })
      )
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [toggleState]);
  let offerCompany =
    !loading && offerCompanyData.length > 0 ? (
      offerCompanyData.map((offer) => {
        return <TheOffer key={offer.id} offerInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );
  let offersApplied =
    !loading && offersAppliedsData.length > 0 ? (
      offersAppliedsData.map((offer) => {
        return (
          <div className="innerInfoWrap" key={offer.id}>
            <div className="infoBeworbenFirma">
              <p className="infoBeworbenFirmaText">
                <span>
                  {offer["first_name"]} {offer["last_name"]} hat sich für Stelle{" "}
                  {offer["title_job"]} Nr {offer["id"]} beworben
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
          <div className="innerInfoWrap" key={offer.id}>
            <div className="infoBeworbenFirma">
              <span className="infoBeworbenFirmaText">
                {offer["first_name"]} {offer["last_name"]} wurde für Stelle{" "}
                {offer["title_job"]} Nr {offer["id"]} ausgewählt
              </span>
              <button
                className="finishButton"
                onClick={() => {
                  Axios.put(
                    `http://localhost:4000/api/v1/offer/finish_offer_applay`,
                    null,
                    {
                      params: { userId: userId },
                      headers: {
                        "x-auth-token": `${tokenUser}`,
                        role: `${user_role}`,
                      },
                    }
                  )
                    .then((res) => {
                      //console.log(res.data);
                      //navigate('/appliedSuscess');
                      window.location.reload();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                Finished
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
          <div className="innerInfoWrap">
            <div className="infoBeworbenFirma">
              <p className="infoBeworbenFirmaText">
                {offer["first_name"]} {offer["last_name"]} hat die Stelle{" "}
                {offer["title_job"]} Nr {offer["id"]} erfolgreich beendet.
              </p>
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
            className={toggleState === 1 ? "tab1Company tab active" : "tab"}
            onClick={() => toggleTab(1)}
          >
            Meine Anzeigen
          </div>
          <div
            className={toggleState === 2 ? "tab2Company tab active" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Beworben
          </div>
          <div
            className={toggleState === 3 ? "tab3Company tab active" : "tab"}
            onClick={() => toggleTab(3)}
          >
            Up Comming
          </div>
          <div
            className={toggleState === 4 ? "tab4Company tab active" : "tab"}
            onClick={() => toggleTab(4)}
          >
            Beendet
          </div>
        </div>
        <div className="tabsContentDiv">
          {(() => {
            if (toggleState === 1) {
              return <div className="contentTab1">{offerCompany}</div>;
            } else if (toggleState === 2) {
              return <div className="contentTab2">{offersApplied}</div>;
            } else if (toggleState === 3) {
              return <div className="contentTab3">{offersUpcomming}</div>;
            } else return <div className="contentTab4">{offersFinished}</div>;
          })()}
        </div>
      </div>
    </section>
  );
};

export default TheSection;
/*useEffect(() => {
    console.log(localStorage.getItem("userId"));

    Axios.get(`http://localhost:4000/api/v1/offer/get_offer_company`, {params:{userId:userId}})
      .then((res) => {
        console.log(res.data);
        setOffersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
*/
