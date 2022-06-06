import React, { useEffect } from "react";
import "../../style/LoginPage/LoginPage.scss";
import LogoImage from "../../img/logoExample.jpg";
import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import Axios from "axios";
import jwt_decode from "jwt-decode";
 


const TheSection = () => {
  
  const navigate = useNavigate();
  //const [forUserLink, setForUserLink] = useState("");

  //const param = useParams();


 


  const initialValues = {
    email: "",
    password: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);


  const validate = (values) => {
    console.log(values);
    let errors = "";
     let errorsState =false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (
      values.email.length == 0 ||
      values.password.length == 0 ||
      !regex.test(values.email)
    ) {
      errors = "Bitte richtige Infos eingeben!";
      errorsState = true;
    }

    return {errorsState, errors }
  };



  function handleLogin(){
    let email = document.getElementById("email").value;
    let password =document.getElementById("password").value;
    console.log(email, " ", password)
    let result= validate({email, password});
    if(result.errorsState)
    alert(result.errors);
    Axios.post("http://localhost:4000/api/v1/auth/login", {
    email,
    password,
    })
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token);
   
        var decoded = jwt_decode(res.data.token);
      
        localStorage.setItem('name', decoded.name);
        localStorage.setItem('role', decoded.role);

        if(decoded.role =="student")
          navigate('/homePageStudent')
         else if(decoded.role =="company")
             navigate('/homePageFirma')
      })
      .catch((err) => {
      alert(err.response.data.message)
        console.log(err);
      });



  }


  const handleChange = (e) => {
    console.log("pla", e.target)
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
 
  useEffect(() => {
    console.log("out")

    // console.log(formErrors);
    if (formErrors === "" && isSubmit) {
      console.log("in")
      // console.log(formValues);
      loginHandler();
      // window.location.href = `http://localhost:3000/${forUserLink}/${userId}`;
    }
  }, [formErrors] );
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const loginHandler = () => {
  
  };
  return (
    <section className="content">
      <div>



        <input id="email" />
        <input id="password" />
        <button onClick={handleLogin}>login</button>
      </div>
      {/* <form id="loginForm" onSubmit={handleSubmit}>
        <div className="loginLogoImageDiv">
          <img src={LogoImage} style={{ width: "25%", height: "100%" }} />
        </div>
        <div className="loginFormInnerWrap">
          <p
            className="errorText"
            style={{ margin: "1em", fontWeight: "bold", color: "red" }}
          >
            {formErrors}
          </p>
          <div className="loginRow">
            <div className="loginRowIn">
              <div className="loginRowInWrap">
                <label className="loginLebel">Email</label>
                <input
                  className="loginInput"
                  type="text"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="loginRow">
            <div className="loginRowIn">
              <div className="loginRowInWrap">
                <label className="loginLebel">Passwort</label>
                <input
                  className="loginInput"
                  type="text"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="loginButtonDivANDTerms">
            <div className="loginbuttonDiv">
              <input type="submit" value="Login" className="loginButtonFirma" />
            </div>
            <div className="termsloginDiv">
              <input
                type="checkbox"
                id="scaleslogin"
                name="scaleslogin"
              ></input>
              <p className="acceptTermsTextlogin">
                &nbsp;I agree with the{" "}
                <a href="" className="TermsANDCondTextFirma">
                  Terms & Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </form> */}
    </section>
  );
};

export default TheSection;
