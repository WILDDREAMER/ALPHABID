import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home/'
import Counter from './components/counter';
import Selected from './components/ProductDetail/selected';

function App() {
  return (
    <Router>
    <Switch>
      <div className="big-cont">
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product'>
          <></>
        </Route>
        <Route exact path='/countdown'>
          <Counter></Counter>
        </Route>
        <Route exact path='/selected'>
          <Selected price="1224.03" condition="New" category="Electronics" tags="Gaming sale"></Selected>
        </Route>
      </div>
    </Switch>
  </Router>
  );
}

export default App;
