import React from 'react';
import '../../style/AddOfferPage/AddOfferPage.scss';



const theSection = () =>{
    return(
        <section className="content">
           <form  className='AddOfferForm'> 
                <div className='dateDivAddOffer'>
                    <p className='dateAddOfferP'>Donnerstag, 28 Dezember 2021 </p>
                    <div className='underLineBetween'></div>
                </div>

                <div className='addOfferInputLongOutWrap'>
                    <div className='addOfferInputLongInWrap'>
                        <label className='addOfferLabel'>
                             Title der Stelle
                        </label>
                        <input className='addOfferLongInput'></input>
                    </div>
                </div>
                
                <div className='addOfferInputsOutWrap'>
                    <div className='addOfferInputsInWrap'>
                        <div className='addOfferInputsWrap'>
                            <label className='addOfferLabelInputs'>
                                  Wie viele Tage?
                            </label>
                            <input className='addOfferInputShort'>

                            </input>
                        </div>
                        <div className='addOfferInputsWrap'>
                            <label className='addOfferLabelInputs'>
                               € Pro Stunde
                            </label>
                            <input className='addOfferInputShort'>
                            
                            </input>
                        </div>
                    </div>
                </div> 

                   
            </form> 
        </section>
    );

};

export default theSection;
/* <div className='addOfferDiv2'>
                    <div className='addOfferRowsOut'>
                        <div className='addOfferRowsIn'>
                            <p>Title der Stelle</p>
                            <input type="text" className="addOfferInput" id='titleDerStelleInput' name=""></input>
                        </div>    
                    </div>
                    <div className='addOfferRowsOut'>
                        <div className='addOfferRowsIn2'>
                            <div className='addOfferRowsIn2Wrap'>
                                    <label className='labelAddOffer2'>Wie viele Tage</label>
                                    <input type="text" className="addOfferInput2"  name=""></input>

                                    <label className='labelAddOffer2'>€ Pro Stunde</label>
                                    <input type="text" className="addOfferInput2"  name=""></input>
                            </div>
                        </div>
                    </div>
                    <div className='addOfferRowsOut'>
                        <div className='addOfferRowsIn2'>
                            <div className='addOfferRowsIn2Wrap'>
                                    <label className='labelAddOffer2'>Stadt</label>
                                    <input type="text" className="addOfferInput2"  name=""></input>

                                    <label className='labelAddOffer2'>Stadteil</label>
                                    <input type="text" className="addOfferInput2"  name=""></input>
                            </div>
                        </div>
                    </div>
                </div>*/

                /*
                
               
                */ 