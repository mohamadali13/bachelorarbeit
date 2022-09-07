import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../style/Navbar/NavLinks.scss";
/*var current_time = new Date().getTime() / 1000;
	if (current_time > jwt.exp) { /* expired  }*/
const TheNavLinks = () => {
  const navigate = useNavigate();
  let auth = localStorage.getItem("token");
  let role = localStorage.getItem("role");
  let userName = localStorage.getItem("name");
  var url = window.location.pathname;
  return (
    <ul id="linksNavigation">
      {auth ? (
        <li
          onClick={(auth) => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("userId");
            localStorage.removeItem("name");
            navigate("/loginPage");
          }}
        >
          <a href="#">Ausloggen</a>
        </li>
      ) : (
        <li>
          {url == "/loginPage" ? (
            <a onClick={() => navigate("/")}>Registrieren</a>
          ) : (
            <a onClick={() => navigate("/loginPage")}>Anmelden</a>
          )}
        </li>
      )}
      {role === "student" && (
        <li onClick={() => {}}>
          <a href="#">{`${userName}`}</a>
        </li>
      )}
      {role === "student" && (
        <li
          onClick={() => {
            navigate("/jobStatusForStudent");
          }}
        >
          <a href="#">Meine Jobs</a>
        </li>
      )}
      {role === "student" && (
        <li
          onClick={() => {
            navigate("/homePageStudent");
          }}
        >
          <a href="#">Jobs</a>
        </li>
      )}
      {role === "company" && (
        <li onClick={() => {}}>
          <a href="#">{`${userName}`}</a>
        </li>
      )}
      {role === "company" && (
        <li onClick={() => navigate("/addOfferPage")}>
          <a href="#">Angebot Hinzufügen</a>
        </li>
      )}
      {role === "company" && (
        <li onClick={() => navigate("/homePageFirma")}>
          <a href="#">Home</a>
        </li>
      )}
      {role === "admin" && (
        <li onClick={() => {}}>
          <a href="#">{`${userName}`}</a>
        </li>
      )}
      {role === "admin" && (
        <li onClick={() => navigate("/jobStatusForAdmin")}>
          <a href="#">Jobs</a>
        </li>
      )}
      {role === "admin" && (
        <li onClick={() => navigate("/homePageAdmin")}>
          <a href="#">Anfragen</a>
        </li>
      )}
      {role === "admin" && (
        <li
          onClick={() => {
            navigate("/allOffersAdmin");
          }}
        >
          <a href="#">Alle Angebote</a>
        </li>
      )}
      <li onClick={() => {}}>
        <a href="#">Kontakt</a>
      </li>
    </ul>
  );
};

export default TheNavLinks;
