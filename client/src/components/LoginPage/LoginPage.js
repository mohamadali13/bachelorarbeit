import React from 'react';
import TheHeader from '../TheHeader.js';
import Footer from '../Footer.js';
import MainSection from './MainSection';
import { Fragment } from 'react';
import  '../../style/bodySection.scss';



const loginPage = () =>{
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

export default loginPage;
