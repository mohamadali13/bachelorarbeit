import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../style/HomePageFirma/HomePageFirma.scss";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const [offersData, setOffersData] = useState([]);
  useEffect(() => {
    console.log(localStorage.getItem("userId"));
    
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("name");
    Axios.get(
      `http://localhost:4000/api/v1/offer/get_all_offers`
    )
      .then((res) => {
        console.log(res.data);
        setOffersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);
  // const [loginEmail, setLoginEmail] = useState("");
  // let data = [
  //   { name: "ahmed", price: 123 },
  //   { name: "mohamad", price: 1553 },
  // ];
  // api/v1/company

  /**
   * useeffect -> axios ->post
   * offer /:id
   *
   */
  let offers = offersData.map((offer) => {
    return <TheOffer offerInfo={offer} />;
  });
  const [toggleState, setToggleState] = useState(1);
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
            All Offers
          </div>

        </div>
        <div className="tabsContentDiv">
          {(() => {
            if (toggleState === 1) {
              return <div className="contentTab1">{offers}</div>;
            } 
          })()}
        </div>
      </div>
    </section>
  );
};

export default TheSection;
