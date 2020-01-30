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
      <div className="about-me-text_container">
        <div>
          <h4>Robin Gorski</h4>
          <p> - Hello stranger!</p>
        </div>
        <div>
          <p>
            I am currently studying Front End Development at KYH in Stockholm, Sweden.
            </p>
          <p>Where i enjoy develop clean and smart solutions for the web. </p>
        </div>
        <div className="about-me-text_skills">
          <p>Soft skills - Team Work, Communication, Leadership.</p>
          <p>Tools - Github, Figma, Visual Studio Code Etc.</p>
          <p>Hard skills - HTML, CSS, ES6.</p>
        </div>
        <div className="about-me-text_contact">
          <p>Check out my Github:</p>
          <a href="https://github.com/Robingorski">www.Github.com/RobinGorski</a>
          <p>Or if you are intressed about what i've done erlier in my career, check my Linked in:</p>
          <a href="https://www.linkedin.com/in/robin-gorski/">www.linkedin.com/in/Robin-Gorski</a>
          <p>Wanna collaborate with me? Send me a Email</p>
          <a href="mailto:RobinGorski@hotmail.com">RobinGorski@hotmail.com</a>
        </div>
      </div>
    </div >);
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
