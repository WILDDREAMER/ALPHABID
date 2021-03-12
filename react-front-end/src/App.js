import logo from './logo.svg';
import './App.css';
import Login from './components/authotification/Login';
import Navbar from './components/navbar/Navbar';
import "../src/assets/css/style.css"
import Footer from './components/footer/Footer';
import Header_Simple from './components/headers/Header_Simple';
import Register from './components/authotification/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar/>
    
  
     <Switch>
     <Route exact path='/signIn'>
            <Login/>
          </Route>
      <Route exact path='/signUp'>
       <Register/>
      </Route>
       </Switch>
    
     <Footer/>
    </Router>
  );
}

export default App;
