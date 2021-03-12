import React from 'react'
import Navbar from '../navbar/Navbar'
import Header_Simple from '../headers/Header_Simple'
import facebookIcon from "../../assets/Svg-Files/facebook-icon.svg"
import gmailIcon from "../../assets/Svg-Files/gmailIcon.svg"

import mail from "../../assets/Svg-Files/mail.svg"
import lock from "../../assets/Svg-Files/lock.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
export default function Login() {
    return (
        <div className="login">
           
            <Header_Simple/>
            <div className="input-cont">
                <h3 className="title_ya">WELCOME BACK</h3>
                <p className="miniP large">To keep connected with us please
                login with your personal info</p>
                <form className="form">
               <div className="input-field">
                    <img className="input-icon" src={mail}/>
                <input placeholder="Email:" className="input label" type="text" name="email" />
               </div>
               <div className="input-field">
                    <img className="input-icon" src={lock}/>
                    <input placeholder="Password:" className="input label" type="password" name="password" />
              
               </div>
                <button className="sub-button">SIGN IN</button>
                <a className="pass-link large">Forgot Password?</a>
            </form>
            <p className="miniP large">or sign in with</p>
            <div className="ya">
            <img className="link" src={facebookIcon}/>
            <img className="link" src={gmailIcon}/>
            </div>
            <div className="row">
                <div className="text large2">Don't have an account?</div>
               <Link  to="/signUp" className="Signlink large2">SIGN UP</Link>

            </div>
            </div>
           
        </div>
    )
}
