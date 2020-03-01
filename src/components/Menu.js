import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import {
  staggerText,
  staggerReveal,
  handleHover,
  handleHoverExit,
  handleProjectReturn,
  handleProject,
  staggerRevealClose
} from "./Animations";

/* import newyork from "./images/newyork.webp"; */
import quicksolution from "./images/quick-solution-pic.png";
import underconstruction from "./images/under-construction.jpg";
import quirepic from "./images/quire-pic.png";

const projects = [
  { name: "Quick Solution", image: quicksolution },
  { name: "Qurie", image: quirepic },
  { name: "Under Construction", image: underconstruction },
];

const Menu = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let projectBackground = useRef(null);
  let line1 = useRef(null);

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
      staggerText(line1);
    }
  }, [state]);

  return (
    <div ref={el => (menuLayer = el)} className='hamburger-menu'>
      <div
        ref={el => (reveal1 = el)}
        className='menu-secondary-background-color'></div>
      <div ref={el => (reveal2 = el)} className='menu-layer'>
        <div
          ref={el => (projectBackground = el)}
          className='menu-project-background'></div>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li>
                    <Link
                      onMouseEnter={e => handleHover(e)}
                      onMouseOut={e => handleHoverExit(e)}
                      ref={el => (line1 = el)}
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
              {projects.map(el => (
                <span
                  key={el.name}
                  onMouseEnter={() => handleProject(el.image, projectBackground)}
                  onMouseOut={() => handleProjectReturn(projectBackground)}>
                  {el.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;