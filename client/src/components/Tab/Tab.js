import React from "react";
import "../../style/Offer/Offer.scss";

const TabCompenent = (props) => {
  let data = [
    { name: "ahmed", price: 123 },
    { name: "mohamad", price: 1553 },
  ];
  let offers = data.map((offer) => {
    return <TheOffer offerInfo={offer} />;
  });
  const [toggleState, setToggleState] = useState(1);
  return (
    <div className="tabWrap">
      <div className="tabsDiv">
        <div
          className={toggleState === 1 ? "tab1 tab active" : "tab"}
          onClick={() => toggleTab(1)}
        >
          {props.tab1title.title}
        </div>
        <div
          className={toggleState === 2 ? "tab2 tab active" : "tab"}
          onClick={() => toggleTab(2)}
        >
          {props.tab2title.title}
        </div>
        <div
          className={toggleState === 3 ? "tab3 tab active" : "tab"}
          onClick={() => toggleTab(3)}
        >
          {props.tab3title.title}
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
  );
};

export default TabCompenent;
