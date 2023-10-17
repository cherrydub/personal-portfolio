import React from "react";

export default function NavigationMenu({ toggleMenu }) {
  return (
    <div className="nav-menu flex">
      <div className="blur-div" style={{ width: "50%" }}></div>
      <div
        className=""
        style={{
          width: "50%",
          height: "100vh",
          borderLeft: "1px solid var(--secondary-color)",
          //   borderBottom: "1px solid var(--secondary-color)",
          backgroundColor: "var(--background-color)",
          //   height: "50vh",
          //   borderLeft: "1px solid #ffffff50",
        }}
      >
        <ul className="">
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
        {/* <div
          style={{
            backgroundColor: "orange",
            position: "fixed",
            bottom: "0",
            right: "0",
            fontSize: "1rem",
            width: "50vw",
          }}
        >
          chriscoding@icloud.com
        </div> */}
        <div
          className="fixed bottom-0 git-history flex items-end text-right"
          style={{ height: "150px", width: "50%" }}
        >
          .git
          {/* <img src="cherrydub.svg" alt="" width={"auto"} /> */}
        </div>
      </div>
    </div>
  );
}
