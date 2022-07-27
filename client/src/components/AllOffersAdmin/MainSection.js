import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../style/HomePageFirma/HomePageFirma.scss";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const [offersData, setOffersData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
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
  
  let offers =!loading && offersData.length > 0 ? offersData.map((offer) => {
    return <TheOffer offerInfo={offer} />;
  }): <p>There is no data</p>;
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


/*SELECT Orders.OrderID, Customers.CustomerName, Shippers.ShipperName
FROM ((Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID)
INNER JOIN Shippers ON Orders.ShipperID = Shippers.ShipperID);*/
