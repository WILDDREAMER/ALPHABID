import React from 'react'
import Logo from "../../assets/Svg-Files/Logo.svg"
import whitesearchIcon from "../../assets/Svg-Files/whitesearchIcon.svg"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer-cont">
            <div className="footer container">
                <img className="footerLogo" src={Logo}/>
                <div className="clm">
                    <div className="head title">Useful Links</div>
                    <div className="links lks">Mobile phone</div>
                    <div className="links lks">Laptop</div>
                    <div className="links lks">Headphones</div>
                </div>
                <div className="clm">
                    <div className="head title">Our Policy</div>
                    <div className="links lks">Home page</div>
                    <div className="links lks">Product</div>
                    <div className="links lks">Services</div>
                </div>
                <div className="searchCont">
                <input className="search-input" type="text" placeholder="Find more"/>
                <button className="search-button">
                    <img src={whitesearchIcon}/>
                </button>
                </div>
            </div>
        </div>
    )
}
