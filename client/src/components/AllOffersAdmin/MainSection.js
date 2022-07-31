import Axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import "../../style/HomePageFirma/HomePageFirma.scss";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const [offersData, setOffersData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    Axios.get(`http://localhost:4000/api/v1/offer/get_all_offers`)
      .then((res) => {
        setOffersData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let offers =
    !loading && offersData.length > 0 ? (
      offersData.map((offer) => {
        return <TheOffer key={offer.id} offerInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );

  return (
    <section className="content">
      <div className="tabWrap">
        <div className="tabsDiv">
          <div className={"tab1 tab active"}>All Offers</div>
        </div>
        <div className="tabsContentDiv">
          <div className="contentTab1">{offers}</div>;
        </div>
      </div>
    </section>
  );
};

export default TheSection;
