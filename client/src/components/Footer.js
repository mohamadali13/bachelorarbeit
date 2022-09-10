import React from "react";
import "../style/footer.scss";
import twitterIcon from "../img/social-Media-Icons/twitter/icons8-twitter-144.png";
import facebookIcon from "../img/social-Media-Icons/Facebook/icons8-facebook-480.png";
import instaIcon from "../img/social-Media-Icons/Instagram/icons8-instagram-480.png";
import youtubeIcon from "../img/social-Media-Icons/YouTube/icons8-youtube-play-button-480.png";
import linkedInIcon from "../img/social-Media-Icons/LinkedIn/icons8-linkedin-480.png";

const theFooter = () => {
  return (
    <footer>
      <div className="upperSectionFooter">
        <div className="footerUpperInfos">
          <p className="titleOfList">Rund um Bencom</p>
          <ul className="listfooterUpperInfos">
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">AGB</a>
            </li>
            <li>
              <a href="">Impressum</a>
            </li>
            <li>
              <a href="">Datenschutzung</a>
            </li>
          </ul>
        </div>

        <div className="footerUpperInfos">
          <p className="titleOfList"></p>
          <ul className="listfooterUpperInfos">
            <li>
              <a href="">Datenschutzinformation für Talents</a>
            </li>
            <li>
              <a href="">Presse</a>
            </li>
            <li>
              <a href="">Kontakt</a>
            </li>
          </ul>
        </div>

        <div className="footerUpperInfos">
          <p className="titleOfList">Für Studenten</p>
          <ul className="listfooterUpperInfos">
            <li>
              <a href="">Jobs in Berlin</a>
            </li>
            <li>
              <a href="">Jobs in München</a>
            </li>
            <li>
              <a href="">Jobs in Bonn</a>
            </li>
            <li>
              <a href="">Jobs in Darmstadt </a>
            </li>
          </ul>
        </div>
        <div className="footerUpperInfos">
          <p className="titleOfList">Für Unternehemen</p>
          <ul className="listfooterUpperInfos">
            <li>
              <a href="">Personal in Berlin</a>
            </li>
            <li>
              <a href="">Personal in München</a>
            </li>
            <li>
              <a href="">Personal in Bonn</a>
            </li>
            <li>
              <a href="">Personal in Darmstadt </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="bottomSection">
        <div id="socialMediaIcons">
          <a href="#">
            {" "}
            <img
              className="socialMediaIcons"
              id="twitterIcon"
              src={twitterIcon}
              title="twitterIcon"
              alt="twitterIcon"
            />
          </a>
          <a href="#">
            {" "}
            <img
              className="socialMediaIcons"
              id="facebookIcon"
              src={facebookIcon}
              title="facebookIcon"
              alt="facebookIcon"
            />
          </a>
          <a href="#">
            {" "}
            <img
              className="socialMediaIcons"
              id="youtubeIcon"
              src={youtubeIcon}
              title="youtubeIcon"
              alt="youtubeIcon"
            />
          </a>
          <a href="#">
            {" "}
            <img
              className="socialMediaIcons"
              id="twitterIcon"
              src={instaIcon}
              title="instaIcon"
              alt="instaIcon"
            />
          </a>
          <a href="#">
            {" "}
            <img
              className="socialMediaIcons"
              id="linkedInIcon"
              src={linkedInIcon}
              title="linkedInIcon"
              alt="linkedInIcon"
            />
          </a>
        </div>
        <p id="copyRight">&copy; CoyRight Bencom GmbH</p>
      </div>
    </footer>
  );
};

export default theFooter;
