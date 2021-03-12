import React from 'react'
import Header_Simple from '../headers/Header_Simple'
import mail from "../../assets/Svg-Files/mail.svg"
import lock from "../../assets/Svg-Files/lock.svg"
import userIcon from "../../assets/Svg-Files/userIcon.svg";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
export default function Register() {
    return (
        <div className="login">
           <Header_Simple/>
            <div className="input-cont">
                <h3 className="title_ya">WELCOME TO ALPHABID</h3>
               
                <form className="form">
                      
               <div className="input-field">
                    <img className="input-icon" src={userIcon}/>
                <input placeholder="Name:" className="input label" type="text" name="name" />
               </div>      
               <div className="input-field">
                    <img className="input-icon" src={mail}/>
                <input placeholder="Email:" className="input label" type="text" name="email" />
               </div>
               <div className="input-field">
                    <img className="input-icon" src={lock}/>
                <input placeholder="Password:" className="input label" type="password" name="password" />
               </div>
               <div className="input-field">
                    <img className="input-icon" src={lock}/>
                    <input placeholder="Re-type Password:" className="input label" type="password" name="retype" />
              
               </div>
                <button className="sub-button">SIGN UP</button>
                
            </form>

           
            <div className="row">
                <div className="text large2">Already have an account?</div>
                <Link  to="/signIn" className="Signlink large2">SIGN IN</Link>
            </div>
            </div>
             
        </div>
    )
}
