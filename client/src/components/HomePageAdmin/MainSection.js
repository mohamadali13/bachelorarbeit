import React, { useEffect, useState } from "react";
import ReqAdmin from "../ReqAdmin/ReqAdmin";
import "../../style/HomePageAdmin/HomePageAdmin.scss";
import Axios from "axios";
const TheSection = () => {
  let [offersData, setOffersData] = useState([]);
  const [loading, setLoading] = useState(false);
  const tokenUser = localStorage.getItem("token");
  const user_role = localStorage.getItem("role");
  useEffect(() => {
    console.log(localStorage.getItem("userId"));
    setLoading(true);
    const userId = localStorage.getItem("userId");
    const userName = localStorage.getItem("name");
    Axios.get(`http://localhost:4000/api/v1/offer/get_reqs`, {
      headers: { "x-auth-token": `${tokenUser}`, role: `${user_role}` },
    })
      .then((res) => {
        console.log(res.data);
        setOffersData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  let reqs =
    !loading && offersData.length > 0 ? (
      offersData.map((offer) => {
        return <ReqAdmin key={offer.id} reqInfo={offer} />;
      })
    ) : (
      <p>There is no data</p>
    );

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
