import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from 'gsap';

const Hamburger = ({ state }) => {
  //vars for our animated dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let revealMenuBackground = useRef(null);
  let cityBakcground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);


  useEffect(() => {
    if (state.clicked === false) {
      // close our menu

    } else if (state.clicked === true || (state.clicked === true && state.initial === null)
    ) {
      // open our menu

    }
  });




  return (
    <div ref={el => (menu = el)} className='hamburger-menu'>
      <div ref={el => (revealMenuBackground = el)} className="menu-secondary-backround-color"></div>
      <div ref={el => (revealMenu = el)} className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={el => (line1 = el)} to='/opportunities'>Opportunities</Link>
                  </li>
                  <li>
                    <Link ref={el => (line2 = el)} to='/solutions'>Solutions</Link>
                  </li>
                  <li>
                    <Link ref={el => (line3 = el)} to='/contact-us'>Opportunities</Link>
                  </li>
                </ul>
              </nav>
              <div ref={el => (info = el)} className="info">
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
    </div>
  );
};

export default Hamburger;