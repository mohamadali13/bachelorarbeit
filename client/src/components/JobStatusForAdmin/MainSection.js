import React from "react";
import { useState } from "react";
import "../../style/JobStatusForStudent/JobStatusForStudent.scss";
import TheOffer from "../Offer/Offer";

const TheSection = () => {
  const [loginEmail, setLoginEmail] = useState("");
  let data = [
    { name: "ahmed", price: 123 },
    { name: "mohamad", price: 1553 },
  ];
  let offers = data.map((offer) => {
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
              return <div className="contentTab1">{offers}</div>;
            } else if (toggleState === 2) {
              return <div className="contentTab2">{offers}</div>;
            } else return <div className="contentTab3">{offers}</div>;
          })()}
        </div>
      </div>
    </section>
  );
};

export default TheSection;
