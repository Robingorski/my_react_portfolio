import React, { useState } from "react";
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
          <div className='home'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about-me' component={about} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

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
            I am currently studying Front End Development in Stockholm, Sweden.
            </p>
          <p>Where i enjoy develop clean designs and smart solutions for the web. </p>
        </div>
        <div className="about-me-text_skills">
          <p>Soft skills - Team Work, Communication, Leadership.</p>
          <p>Tools - Github, Figma, Visual Studio Code Etc.</p>
          <p>Hard skills - HTML, CSS, ES6.</p>
        </div>
        <div className="about-me-text_contact">
          <p>Check out my Github:</p>
          <a href="https://github.com/Robingorski">www.Github.com/RobinGorski</a>
          <p>Or if you are intressed about what i've done erlier in my career, check my LinkedIn:</p>
          <a href="https://www.linkedin.com/in/robin-gorski/">www.linkedin.com/in/Robin-Gorski</a>
          <p>Wanna collaborate with me?</p>
          <p>Send me a E-mail:</p>
          <a href="mailto:Contact@robingorski.com">Contact@robingorski.com</a>
        </div>
      </div>
    </div >);
}

function Home() {
  return (
    <div className='container'>
      <h5>
        "Portfolio"
        </h5>
    </div>
  );
}
export default App;
