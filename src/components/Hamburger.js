import React from "react";
import { Link } from "react-router-dom";

const Hamburger = () => {
  return <div className='hamburger-menu'>
    <div className="menu-secondary-backround-color"></div>
    <div className="menu-layer">
      <div className="menu-city-background"></div>
      <div className="container">
        <div className="wrapper">
          <div className="menu-links">
            <nav>
              <ul>
                <li>
                  <Link to='/opportunities'>Opportunities</Link>
                </li>
                <li>
                  <Link to='/solutions'>Solutions</Link>
                </li>
                <li>
                  <Link to='/contact-us'>Opportunities</Link>
                </li>
              </ul>
            </nav>
            <div className="info">
              <h3>Our Promise</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div className="locations">
              Locations:
              <span>Projekt 1</span>
              <span>Projekt 2</span>
              <span>Projekt 3</span>
              <span>Projekt 4</span>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Hamburger;