import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home/'

import Selected from './components/ProductDetail/selected';
import Detail from './components/ProductDetail/';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Login from './components/authotification/Login';
import Register from './components/authotification/Register';

function App() {
  return (
    <Router>
       <Navbar/>
       
    <Switch>
      <div className="big-cont">
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product'>
          <></>
        </Route>
        <Route exact path='/selected'>
          <Selected price="1224.03" condition="New" category="Electronics" tags="Gaming sale"></Selected>
        </Route>
        <Route exact path='/detail'>
          <Detail></Detail>
        </Route>
        <Route exact path='/signIn'>
          <Login/>
        </Route>
        <Route exact path='/signUp'>
          <Register/>
        </Route>
      </div>
    </Switch>
   <Footer/>
  </Router>
  );
}

export default App;
