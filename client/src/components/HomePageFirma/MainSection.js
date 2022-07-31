import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../style/HomePageFirma/HomePageFirma.scss";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const [offerCompanyData, setOfferCompanyData] = useState([]);
  const [offersUpcommingData, setOffersUpcommingData] = useState([]);
  const [offersFinishedData, setOffersFinishedData] = useState([]);
  const [offersAppliedsData, setOffersAppliedsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  useEffect(() => {
    const reqOne = Axios.get(
      "http://localhost:4000/api/v1/offer/get_offer_company",
      { params: { userId: userId } }
    );
    const reqTwo = Axios.get(
      "http://localhost:4000/api/v1/offer/get_applied_company",
      { params: { userId: userId } }
    );
    const reqThree = Axios.get(
      "http://localhost:4000/api/v1/offer/get_upcomming_company",
      { params: { userId: userId } }
    );
    const reqFour = Axios.get(
      "http://localhost:4000/api/v1/offer/get_finished_company",
      { params: { userId: userId } }
    );
    console.log(localStorage.getItem("userId"));
    setLoading(true);
    Axios.all([reqOne, reqTwo, reqThree, reqFour])
      .then(
        Axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const responseThree = responses[2].data;
          const responseFour = responses[3].data;
          console.log("re1", responseOne);
          console.log("re2", responseTwo);
          console.log("re3", responseThree);
          console.log("re4", responseFour);

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
        return <TheOffer offerInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );
  let offersApplied =
    !loading && offersAppliedsData.length > 0 ? (
      offersAppliedsData.map((offer) => {
        return (
          <div className="innerInfoWrap">
            <div className="infoBeworbenFirma">
              <p className="infoBeworbenFirmaText">
                <p>
                  {offer["first_name"]} hat sich für Stelle Nr 78878 beworben
                </p>
              </p>
            </div>
          </div>
        );
      })
    ) : (
      <p>There is no data</p>
    );
  let offersUpcomming =
    !loading && offerCompanyData.length > 0 ? (
      offerCompanyData.map((offer) => {
        return (
          <div className="innerInfoWrap">
            <div className="infoBeworbenFirma">
              <p className="infoBeworbenFirmaText">
                Mohamad hat sich für Stelle Nr 78878 beendet
              </p>
              <button className="finishButton" onClick={() => {}}>
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
                Mohamad hat sich für Stelle Nr 78878 beendet
              </p>
              <button className="finishButton" onClick={() => {}}>
                Finished
              </button>
            </div>
          </div>
        );
      })
    ) : (
      <p>There is no data</p>
    );
  console.log(offerCompany, "hhhhhhhhh");
  const toggleTab = (index) => {
    setToggleState(index);
  };
  console.log(toggleState);
  return (
    <section className="content">
      <div className="tabWrap">
        <div className="tabsDiv">
          <div
            className={toggleState === 1 ? "tab1 tab active" : "tab"}
            onClick={() => toggleTab(1)}
          >
            Meine Anzeigen
          </div>
          <div
            className={toggleState === 2 ? "tab2 tab active" : "tab"}
            onClick={() => toggleTab(2)}
          >
            Beworben
          </div>
          <div
            className={toggleState === 3 ? "tab3 tab active" : "tab"}
            onClick={() => toggleTab(3)}
          >
            upComming
          </div>
          <div
            className={toggleState === 4 ? "tab3 tab active" : "tab"}
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
