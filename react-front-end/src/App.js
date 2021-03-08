import React from 'react'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './components/home/'
import Product from './components/product';
import Counter from './components/counter';

function App() {
  return (
    <Router>
    <Switch>
      <div className="big-cont">
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route exact path='/product'>
          <Product title='SONOS' price='102.56'></Product>
        </Route>
        <Route exact path='/countdown'>
          <Counter></Counter>
        </Route>
      </div>
    </Switch>
  </Router>
  );
}

export default App;
