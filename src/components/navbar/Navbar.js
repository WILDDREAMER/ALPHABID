import React from 'react'
import search_icon from "../../assets/Svg-Files/serach_icon.svg"
import backet_icon from "../../assets/Svg-Files/backet-icon.svg"
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll'
export default function Navbar() {
    return (
        <div className="nav-cont container">  
           <ul id="list" className="nav-list">
           <li className="list-item"><Link to="/" className="list-link navBar">HOME</Link></li>  
            <li className="list-item"><Link className="list-link navBar">ABOUT US</Link></li>       
            <li className="list-item"><AnchorLink href='#contact' className="list-link navBar">CONTACT</AnchorLink></li>  
            <li className="list-item"><a className="list-link navBar">PRODUCTS</a></li>  
            <li className="list-item"><a className="list-link navBar">CATEGORIES</a></li>  
            
        </ul> 
        <i onClick={()=>{
            var navlist = document.getElementById("list");
            navlist.classList.toggle("showlist")                    }} className="fal fa-bars burger"></i>
        <div className="buttons-ya">
            <button className="search-button ">
                <img className="search-icon" src={search_icon}/>
            </button>
            <button className="register-button">
            Register
            </button>
            <button className="login-button">
                LOGIN
            </button>
            <img className="backet-icon" src={backet_icon} />
        </div>
        </div>
    )
}
