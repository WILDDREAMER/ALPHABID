import React from 'react'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from 'react-countdown';

import Home from './components/home/'
import Product from './components/product';

function App() {
  return (
    <div className="App">
      <Product></Product>
    </div>
  );
}

export default App;
