import React, { useState, useEffect } from "react";
import NavigationMenu from "./NavigationMenu";

export default function Navigation({ device }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (device === "comp") {
      setMenuOpen(false);
    }
  }, [device]);

  return (
    <div className="navigation text-right">
      {device === "comp" ? (
        <ul
          className="flex flex-row flex-wrap"
          style={{ backgroundColor: "var(--secondary-color)" }}
        >
          <a className="li-link" href="#about">
            <li>
              About<i class="las la-id-card"></i>
            </li>
          </a>
          <a className="li-link" href="#projects">
            <li>
              Projects<i class="las la-terminal"></i>
            </li>
          </a>

          <a className="li-link" href="#experience">
            <li>
              Experience<i class="las la-briefcase"></i>
            </li>
          </a>
          <a className="li-link" href="#contact">
            <li>
              Contact <i class="las la-envelope"></i>
            </li>
          </a>
        </ul>
      ) : (
        <div className="nav-button-container" onClick={toggleMenu}>
          {/* <button className="nav-button"> */}
          {menuOpen ? (
            <i
              class="las la-caret-square-down pr-4 pl-2 pt-1 hover:cursor-pointer"
              style={{
                backgroundColor: "var(--secondary-color)",
                width: "50px",
              }}
            ></i>
          ) : (
            <i
              className="las la-caret-square-left pr-4 pl-2 pt-1 hover:cursor-pointer"
              style={{
                backgroundColor: "var(--secondary-color)",
                width: "50px",
              }}
            ></i>
          )}
          {/* <i
            className="las la-bars pr-2 pl-2 hover:cursor-pointer"
            style={{ backgroundColor: "var(--secondary-color)" }}
          ></i>
          <i
            class="las la-caret-square-left"
            style={{ backgroundColor: "var(--secondary-color)" }}
          ></i> */}
          {/* </button> */}
          {menuOpen && (
            // <div className="">
            <>
              {/* <ul className="flex flex-col nav-menu">
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
              </ul> */}
              <NavigationMenu toggleMenu={toggleMenu} />
            </>
          )}
        </div>
      )}
    </div>
  );
}
