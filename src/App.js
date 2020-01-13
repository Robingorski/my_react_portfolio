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
  return <p>Discover our numerous opportunities</p>;
}

function about() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach me.</p>;
}

function Home() {
  return (
    <div className='container'>
      <div className='wrapper'>
        <h5>
        "Welcome to my portfolio"
        </h5>
      </div>
    </div>
  );
}
export default App;
