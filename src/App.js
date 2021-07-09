import React from "react";
import './App.css';
import Home from './Home';
import MovieDescription from './Component/Description'
import Footer from './Component/Footer';
import Navbar from './Component/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

const App = ({match}) => {

  return (
    <div className="App">
       <Navbar/>
      <header className="App-header">
    
      
      </header>
      <div className='container'>
      <Router>
      <Switch>
      
      <Route path="/" exact component={Home}/>
      
      <Route path={`/:id`} component={MovieDescription}/>
      
      </Switch>
      </Router>  
      </div>
   
    <Footer />
    </div>
  );
}

export default App;
