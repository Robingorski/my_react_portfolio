import React from "react";
import "./App.scss";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
                <Route exact path='/opportunities' component={Opportunities} />
                <Route exact path='/about-me' component={about} />
                <Route exact path='/contact-me' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return (<p>Whats the weather like?</p>);
}

function about() {
  return (
    <div className="about-me">
      <div className="about-me-container">
        <h4>Robin Gorski</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos enim odio architecto distinctio cupiditate accusamus magnam quos voluptatem. Rem, mollitia.</p>
      </div>
    </div>);
}

function Contact() {
  return <p>Feel free to reach me.</p>;
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
