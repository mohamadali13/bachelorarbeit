import React from 'react';
import '../../style/LoginPage/LoginPage.scss';



const theSection = () =>{
    return(
         <section className="content">
               <div id="loginBox">
                   <div>
                       Image Logo
                   </div>
                   <div id= "inputBox">
                       <div className = "inputDivs">
                           <label htmlFor="email" className= "label"> Email: </label>
                           <input type="text" placeholder="z.B user@user.com" className="inputField" name="email"/>
                       </div>
                       <div className = "inputDivs">
                               <label htmlFor="password" className= "label"> Password:</label>
                               <input type="password" placeholder="Dein Passwort Bitte" className="inputField" name="password"/>
                       </div>
                   </div>
                   <div>
                        <button className="logInButtom"> Login</button>
                        <a href="#" id="forgotPasswordLink"> <p> Dein Passwort vergissen?</p></a>
                   </div>
               </div>
         </section>
    );

};

export default theSection;
