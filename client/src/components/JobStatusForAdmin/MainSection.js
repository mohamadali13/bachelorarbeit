import React from "react";
import { useState } from "react";
import "../../style/JobStatusForStudent/JobStatusForStudent.scss";

const TheSection = () => {
  const [loginEmail, setLoginEmail] = useState("");
  /* let data = [
    { name: "ahmed", price: 123 },
    { name: "mohamad", price: 1553 },
  ];
  let offers = data.map((offer) => {
    return <TheOffer offerInfo={offer} />;
  });*/
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
              return (
                <div className="contentTab1">
                  <div className="contentTab2">
                    <div className="innerInfoWrap">
                      <div className="infoBeworbenFirma">
                        <p className="infoBeworbenFirmaText">
                          Mohamad hat sich für Stelle Nr 78878 beworben.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (toggleState === 2) {
              return (
                <div className="contentTab2">
                  <div className="innerInfoWrap">
                    <div className="infoBeworbenFirma">
                      <p className="infoBeworbenFirmaText">
                        Mohamad hat wurde für Stelle Nr 54438 ausgewählt.
                      </p>
                    </div>
                  </div>
                </div>
              );
            } else
              return (
                <div className="contentTab3">
                  <div className="innerInfoWrap">
                    <div className="infoBeworbenFirma">
                      <p className="infoBeworbenFirmaText">
                        Mohamad hat die Tätigkeit für die Stelle Nr 78878
                        beendet.
                      </p>
                    </div>
                  </div>
                </div>
              );
          })()}
        </div>
      </div>
    </section>
  );
};

export default TheSection;
