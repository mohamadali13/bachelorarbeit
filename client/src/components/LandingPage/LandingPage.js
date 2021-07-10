import React from 'react';
import TheHeader from '../TheHeader.js';
import Footer from '../Footer.js';
import MainSection from '../LandingPage/MainSection.js';
import { Fragment } from 'react';
import '../../style/LandingPage/LandingPage.scss';
import  '../../style/bodySection.scss';



const landingPage = () =>{
    return(
        <Fragment>
            <body>
              <TheHeader /> 
               
               <MainSection />
                    
               <Footer />
            </body>

        </Fragment>
    );

};

export default landingPage;
