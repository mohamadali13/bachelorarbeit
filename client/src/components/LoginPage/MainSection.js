import React from 'react';
import '../../style/LoginPage/LoginPage.scss';
import LogoImage from '../../img/logoExample.jpg';
import { useState } from 'react';

const TheSection = () =>{

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPasswort, setLoginPasswort] = useState("");

    return(
         <section className="content">
            <form id='loginForm'>
                <div className='loginLogoImageDiv'><img src={LogoImage} style={{width:'25%', height:'100%'}}/></div>
                <div className='loginFormInnerWrap'>
                    <div className='LoginRow'>
                        <div className='LoginRowIn'>
                            <div className='loginRowInWrap'>
                                <label className='loginLebel'>Email
                                </label>
                                <input className='loginInput' type="text" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='LoginRow'>
                        <div className='LoginRowIn'>
                            <div className='loginRowInWrap'>
                                <label className='loginLebel'>Passwort
                                </label>
                                <input className='loginInput' type="text" value={loginPasswort} onChange={(e) => setLoginPasswort(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className='loginButtonDivANDTerms'>
                        <div className='loginbuttonDiv'><input type="submit" value="Login" className='loginButtonFirma'/></div>
                        <div className='termsloginDiv'><input type="checkbox" id="scaleslogin" name="scaleslogin" ></input><p className='acceptTermsTextlogin'>I agree with the <a href='' className='TermsANDCondTextFirma'>Terms & Conditions</a></p></div>
                    </div>
                </div>
            </form> 
         </section>
    );

};

export default TheSection;
/*<input type='submit'   />*/
/* <div id='loginLogoImageDiv'>      
                   <img src={LogoImage} id='logoImageLogin'/>
                </div>
                <div className= 'loginInputsSection'>
                    <div className='loginInputDiv'>
                        <input type="text" placeholder="Deine Email" className="inputField" name="email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}></input>
                        <input type="password" placeholder="Dein Passwort" className="inputField" name="password" value={loginPasswort} onChange={(e) => setLoginPasswort(e.target.value)}></input>
                        <input type ='submit'  value='Login' name="loginButton"   id='loginButton' />
                        <a href="#" id="forgotPasswordLink"> <p> Dein Passwort vergissen?</p></a>
                    </div> 
                </div>*/

                /*<div className='loginINForm'>
                    <div className='regASRow'>
                        <div className='regASRowIn'>
                            <div className='rowRegAsSInputInWrap'>
                                <label className='regASLebel'>Vorname 
                                </label>
                                <input className='RegASInput' type="text" value={vorname} onChange={(e) => setVorname(e.target.value)}/>
                            </div>
                            <div className='rowRegAsSInputInWrap'>
                                <label className='regASLebel'>Name    
                                </label>
                                <input className='RegASInput' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    </div>*/