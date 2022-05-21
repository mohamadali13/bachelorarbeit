import React from "react";
import "../../style/Navbar/NavLinks.scss";

const theNavLinks = () => {
  let auth = localStorage.getItem("auth");

  return (
    <ul id="linksNavigation">
      {/*auth& <li>
              <a href= '#'>Login</a>
      </li>*/}
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
  );
};

export default theNavLinks;
