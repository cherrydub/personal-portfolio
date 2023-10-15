import React, { useState } from "react";

export default function Navigation({ device }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navigation text-right">
      {device === "comp" ? (
        <ul className="flex flex-row flex-wrap">
          <a className="li-link" href="#about">
            <li>About</li>
          </a>
          <a className="li-link" href="#projects">
            <li>Projects</li>
          </a>

          <a className="li-link" href="#experience">
            <li>Experience</li>
          </a>
          <a className="li-link" href="#contact">
            <li>Contact</li>
          </a>
        </ul>
      ) : (
        <div className="nav-button-container" onClick={toggleMenu}>
          {/* <button className="nav-button"> */}
          <i className="las la-bars pr-2 pl-2"></i>
          {/* </button> */}
          {menuOpen && (
            // <div className="">
            <ul className="flex flex-col nav-menu">
              <li>
                <a href="#about" onClick={toggleMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contact
                </a>
              </li>
            </ul>
            // </div>
          )}
        </div>
      )}
    </div>
  );
}
