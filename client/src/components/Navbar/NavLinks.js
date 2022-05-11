import React from 'react';
import '../../style/Navbar/NavLinks.scss';


const theNavLinks = () =>{

      return (
        <ul id="linksNavigation">
            <li>
              <a href= '#'>Login</a>
            </li>
            <li>
                <a href= '#'>Für Unternehmen</a>
            </li>
            <li>
              <a href= '#'>Für Studenten</a>
            </li>
            <li>
              <a href= '#'>Kontakt</a>
            </li>
        </ul>
      ); 
};

export default theNavLinks;