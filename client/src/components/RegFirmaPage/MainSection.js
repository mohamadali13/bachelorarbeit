import React from 'react';
import '../../style/RegFirmaPage/RegFirmaStyle.scss'
import LogoImage from '../../img/logoExample.jpg';
import { useState } from 'react';

const TheSection = () =>{

    const [firma, setFirma] = useState("");
    const [herkunft, setHerkunft] = useState("");
    const [grundsDatum, setGrundsDatum] = useState("");
    const [regNr,setRegNr] = useState("");
    const [frimaStrasse,setFirmaStrasse] = useState("");
    const [firmaStadt,setFirmaStadt] = useState("");
    const [firmaTelNr ,setFirmaTelNr ] = useState("");
    const [firmaEmail,setFirmaEmail] = useState("");
    const [firmaFaxNr,setFirmaFaxNr] = useState("");
    const [zusaetlichFirma,setZusaetlichFirma] = useState("");
    const [vertreterVorname,setVertreterVorname] = useState("");
    const [vertreterName,setVertreterName] = useState("");
    const [verterTelNr,setVertreterTelNr] = useState("");
    const [vertreterEmail,setVertreterEmail] = useState("");
    const [vertreterReEmail,setVertreterReEmail] = useState("");
    const [verterPasswort,setVertreterPasswort] = useState("");
    const [vertreterRePasswort,setVertreterRePasswort] = useState("");
    const [vertreterHandyNr,setVertreterHandyNr] = useState("");
    const [firmaChacked,setFirmaChacked] = useState("");
   


    return(
        <section className="content">
        <form className='regFirmaForm'>
            <div className='regFLogoImageDiv'><img src={LogoImage} style={{width:'25%', height:'100%'}}/></div>
            <div className='regAsFDiv'><p id='regAsFText'>Registrierung Als Unternehmen</p></div>
            <div className='regAFINForm'>
                <div className='regAFRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Firma
                            </label>
                            <input className='ResAFInput' type="text" value={firma} onChange={(e) => setFirma(e.target.value)} />
                        </div>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Herkunft    
                            </label>
                            <input className='ResAFInput' type="text" value={herkunft} onChange={(e) => setHerkunft(e.target.value)}  />
                        </div>
                    </div>
                </div>
                <div className='regASRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Grundsdatum
                            </label>
                            <input className='ResAFInput' type="text" value={grundsDatum} onChange={(e) => setGrundsDatum(e.target.value)} />
                        </div>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Reg.Nr   
                            </label>
                            <input className='ResAFInput' type="text" value={regNr} onChange={(e) => setRegNr(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='regAsFDiv'><p id='regAsFText'>Adresse</p></div>
            <div className='regAFINForm'>
                <div className='regAFRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Straße
                            </label>
                            <input className='ResAFInput' type="text" value={frimaStrasse} onChange={(e) => setFirmaStrasse(e.target.value)} />
                        </div>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Stadt    
                            </label>
                            <input className='ResAFInput' type="text" value={firma} onChange={(e) => setFirma(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='regASRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Tel.Nr
                            </label>
                            <input className='ResAFInput' type="text" value={firmaTelNr} onChange={(e) => setFirmaTelNr(e.target.value)} />
                        </div>  
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Fax.Nr   
                            </label>
                            <input className='ResAFInput' type="text" value={firmaFaxNr} onChange={(e) => setFirmaFaxNr(e.target.value)} /> 
                        </div>    
                    </div>
                </div>
                <div className='regASRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Email
                            </label>
                            <input className='ResAFInput' type="text" value={firmaEmail} onChange={(e) => setFirmaEmail(e.target.value)} />
                        </div>  
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Zusätlich   
                            </label>
                            <input className='ResAFInput' type="text" value={zusaetlichFirma} onChange={(e) => setZusaetlichFirma(e.target.value)} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='regAsFDiv'><p id='regAsFText'>Vertreten durch</p></div>
            <div className='regAFINForm'>
                <div className='regAFRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Vorname
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterVorname} onChange={(e) => setVertreterVorname(e.target.value)} />   
                        </div>  
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Name    
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterName} onChange={(e) => setVertreterName(e.target.value)} />
                        </div>     
                    </div>
                </div>
                
                <div className='regASRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Email
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterEmail} onChange={(e) => setVertreterEmail(e.target.value)} />
                        </div>     
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Re-Email
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterReEmail} onChange={(e) => setVertreterReEmail(e.target.value)} />     
                        </div>
                    </div>               
                </div>
            </div>   
            <div className='regAFINForm'>
                <div className='regAFRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Passwort
                            </label>
                            <input className='ResAFInput' type="text" value={verterPasswort} onChange={(e) => setVertreterPasswort(e.target.value)} />   
                        </div>  
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Re-Passwort   
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterRePasswort} onChange={(e) => setVertreterRePasswort(e.target.value)} />
                        </div>     
                    </div>
                </div>
                
                <div className='regASRow'>
                    <div className='regAFRowIn'>
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Tel.Nr
                            </label>
                            <input className='ResAFInput' type="text" value={verterTelNr} onChange={(e) => setVertreterTelNr(e.target.value)} />
                        </div>     
                        <div className='regAFRowInWrap'>
                            <label className='regAFLebel'>Handy.Nr 
                            </label>
                            <input className='ResAFInput' type="text" value={vertreterHandyNr} onChange={(e) => setVertreterHandyNr(e.target.value)} />     
                        </div>
                    </div>               
                </div>
            </div>   
            <div className='signUpFButtonDivANDTerms'>
                <div className='signUpFbuttonDiv'><input type="submit" value="Sign Up" className='signUpFButtonFirma'/></div>
                <div className='termsFDiv'><input type="checkbox" id="scalesF" name="scalesF" ></input><p className='acceptTermsTextFirma'>I agree with the <a href='' className='TermsANDCondText'>Terms & Conditions</a></p></div>
            </div>
        </form>
     </section>
    );

};

export default TheSection;
