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
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      ) : (
        <div className="nav-button-container">
          <button className="nav-button" onClick={toggleMenu}>
            <i className="las la-bars"></i>
          </button>
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
