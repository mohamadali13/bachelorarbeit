import React, { useEffect } from "react";
import Axios from "axios";
import { useState } from "react";
import "../../style/HomPageStudent/HomePageStudent.scss";
import Select from "react-select";
import TheOffer from "../Offer/Offer";
const TheSection = () => {
  const userId = localStorage.getItem("userId");
  const userName = localStorage.getItem("name");
  const tokenUser = localStorage.getItem('token');
  const user_role = localStorage.getItem('role');
  const listOfCitesHomePageStudent = [
    { label: "Berlin", value: "Berlin" },
    { label: "Frankfurt", value: "Frankfurt" },
    { label: "Münich", value: "Münich" },
    { label: "Hamburg", value: "Hamburg" },
    { label: "Darmstadt", value: "Darmstadt" },
    { label: "Düsseldorf", value: "Düsseldord" },
  ];

  const [offersData, setOffersData] = useState([]);
  useEffect(() => {
    Axios.get(`http://localhost:4000/api/v1/offer/get_all_offers`, 
      {
        params: { userId: userId },
        headers: { "x-auth-token": `${tokenUser}`, 'role': `${user_role}` },
      },
    )
      .then((res) => {
        setOffersData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let offers = offersData.map((offer) => {
    return <TheOffer key={offer.id} offerInfo={offer} />;
  });
  return (
    <section className="content">
      <div className="homePageStudentWrap">
        <div className="selectCityHomePageStadtStudent">
          <Select
            options={listOfCitesHomePageStudent}
            onChange={(opt) => {
              console.log(opt.value);
            }}
          />
        </div>
        <div className="offersHomePageStudent">{offers}</div>
      </div>
    </section>
  );
};

export default TheSection;
