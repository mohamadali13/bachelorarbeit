import React from "react";
import "../style/header.scss";

const theHeader = () => {
  return (
    <header>
      <div className="logoDiv">BENCOM</div>
      <div className="rightList">
        <ul id="topRightList">
          <li>
            <a href="#">Login</a>
          </li>
          <li>
            <a href="#">Für Unternehmen</a>
          </li>
          <li>
            <a href="#">Für Studenten</a>
          </li>
          <li>
            <a href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default theHeader;
