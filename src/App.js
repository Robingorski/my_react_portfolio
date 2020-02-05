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
              <Route exact path='/weather-app' component={Weather} />
              <Route exact path='/about-me' component={about} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}


/* Weather starts here */

const api = {
  key: "6377af824ce25854da8afda8c22e8100",
  base: "https://api.openweathermap.org/data/2.5/"
}

function Weather() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setQuery('');
          setWeather(result);
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="Search..." onChange={e => setQuery(e.target.value)} value={query} onKeyPress={search} />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name}, {weather.sys.country}</div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°c
            </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>

  );
}

/* Weather ends here */


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
      <h5>
        "Portfolio"
        </h5>
    </div>
  );
}
export default App;
