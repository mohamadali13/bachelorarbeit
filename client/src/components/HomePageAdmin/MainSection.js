import React, { useEffect, useState } from "react";
import ReqAdmin from "../ReqAdmin/ReqAdmin";
import "../../style/HomePageAdmin/HomePageAdmin.scss";
import Axios from "axios";
const TheSection = () => {
  
  let [offersData, setOffersData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log(localStorage.getItem("userId")); 
    setLoading(true)
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("name");
    Axios.get(
      `http://localhost:4000/api/v1/offer/get_reqs`
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
  let reqs = offersData.map((offer) => {
    return <ReqAdmin reqInfo={offer} /> ;
  });

  return (
    <section className="content">
      <div className="homePageAmdinWrap">
        <div className="anfragenTextDiv">
          <p className="anfragenText">Anfragen</p>
        </div>
         {reqs}
        
      </div>
    </section>
  );
};

export default TheSection;
