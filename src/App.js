import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import selfie from "./components/images/selfie.jpg";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/weather-app' component={Weather} />
                <Route exact path='/about-me' component={about} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Weather() {
  return (<p>Whats the weather like?</p>);
}

/* const selfie = require('./components/images/selfie.jpg'); */


function about() {
  return (
    <div className="about-me">
      <img className="selfie-img" src={selfie} alt="selfie" />
      <h4>Robin Gorski</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>);
}

function Home() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h5>
          "Portfolio"
        </h5>
      </div>
    </div>
  );
}
export default App;
