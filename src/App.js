import React from "react";// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import Home from './pages/home';
import Production from "./pages/production";


const App = () => {

  return (
    <Router>
      <div className="page">
        <Header />

        <Switch>
          <Route exact path="/" > 
            <Home />
          </Route>
          
          <Route exact path="/production"/>
          <Route exact path="/heritage" /> 
          <Route exact path="/contacts" /> 
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
