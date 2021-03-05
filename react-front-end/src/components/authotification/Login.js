import React from 'react'
import Navbar from '../navbar/Navbar'
import Header_Simple from '../headers/Header_Simple'

export default function Login() {
    return (
        <div className="login">
            <Navbar/>
            <Header_Simple/>
            <div className="input-cont">
                <h3 className="title_ya">WELCOME BACK</h3>
                <p className="miniP large">To keep connected with us please
                login with your personal info</p>
                <form className="form">
          
                <input placeholder="Email:" className="input label" type="text" name="name" />
                <input placeholder="Password:" className="input" type="text" name="name" />
                <button className="sub-button">SIGN IN</button>
                <a className="pass-link large">Forgot Password?</a>
            </form>
            <p className="miniP large">or sign in with</p>
            </div>
           
        </div>
    )
}
