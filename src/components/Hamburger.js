import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose
} from "./Animations";
/* Här */
/* Här */

/* import austin from "./images/austin.webp"; */
import newyork from "./images/newyork.webp";
/* import sanfrancisco from "./images/sanfrancisco.webp"; */
/* import beijing from "./images/dallas.webp"; */
import quicksolution from "./images/quick-solution-pic.png";
import underconstruction from "./images/under-construction.jpg";

const cities = [
  { name: "Quick Solution", image: quicksolution },
  { name: "Under Construction", image: underconstruction },
  { name: "New York", image: newyork },
  /* { name: "Austin", image: austin }, */
  /* här */
/*   { name: "Beijing", image: beijing } */
];

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);

/* Här */

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%"
      });
      staggerReveal(reveal1, reveal2);
      staggerText(line1, line2);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (cityBackground = el)}
          /* Här */
          /* Här */
          className='menu-city-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                {  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
                      to='/weather-app'>
                      Weather app
                    </Link>
                  </li>}
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line2 = el)}
                      to='/about-me'>
                      About me
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='projects'>
              Projects:
                {/* Returning the list of projects */}
              {cities.map(el => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleCity(el.image, cityBackground)}
                  onMouseOut={() => handleCityReturn(cityBackground)}>
                  {el.name}
                </span>
                /* Här */
                /* Här */
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;