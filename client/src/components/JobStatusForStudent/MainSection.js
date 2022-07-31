import Axios from "axios";
import React, { useEffect, useState } from "react";

import "../../style/JobStatusForStudent/JobStatusForStudent.scss";
import TheOffer from "../Offer/Offer";
/*useEffect(() => {
    console.log(localStorage.getItem("userId"));
    setLoading(true)
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("name");
    Axios.get(
      `http://localhost:4000/api/v1/offer/get_all_offers`
    )
      .then((res) => {
        console.log(res.data);
        setOffersData(res.data);
         setLoading(false)
      })
      .catch((err) => {
        console.log(err);
         setLoading(false)
      });
  },[]);*/
const TheSection = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const [offersAppliedData, setOffersAppliedData] = useState([]);
  const [offersUpcommingData, setOffersUpcommingData] = useState([]);
  const [offersFinishedData, setOffersFinishedData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toggleState, setToggleState] = useState(1);
  useEffect(() => {
    const reqOne = Axios.get(
      "http://localhost:4000/api/v1/offer/get_applied_student",
      { params: { userId: userId } }
    );
    const reqTwo = Axios.get(
      "http://localhost:4000/api/v1/offer/get_upComming_student",
      { params: { userId: userId } }
    );
    const reqThree = Axios.get(
      "http://localhost:4000/api/v1/offer/get_finished_student",
      { params: { userId: userId } }
    );

    setLoading(true);
    Axios.all([reqOne, reqTwo, reqThree])
      .then(
        Axios.spread((...responses) => {
          const responseOne = responses[0].data;
          const responseTwo = responses[1].data;
          const responseThree = responses[2].data;

          setOffersAppliedData(responseOne);
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
    !loading && offersAppliedData.length > 0 ? (
      offersAppliedData.map((offer) => {
        return <TheOffer key={offer.id} offerInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );
  let offersUpcomming =
    !loading && offersUpcommingData.length > 0 ? (
      offersUpcommingData.map((offer) => {
        return <TheOffer key={offer.id} offerInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );
  let offersFinished =
    !loading && offersFinishedData.length > 0 ? (
      offersFinishedData.map((offer) => {
        return <TheOffer key={offer.id} offerInfo={offer} />;
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
