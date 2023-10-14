import React, { useEffect } from "react";

export default function Navigation({ device }) {
  useEffect(() => {
    // Update the currentDevice state when the device prop changes
  }, [device]);

  return (
    <div className="navigation">
      {/* {device === "comp" ? ( */}
      <>
        <ul className="flex flex-row flex-wrap">
          <li>
            <a href="#about">
              <button>About</button>
            </a>
          </li>
          <li>
            <a href="#projects">
              <button>Projects</button>
            </a>
          </li>
          <li>
            <a href="#experience">
              <button>Experience</button>
            </a>
          </li>
          <li>
            <a href="#contact">
              <button>Contact</button>
            </a>
          </li>
        </ul>
      </>
      {/* ) : (
        <button>X</button>
      )} */}
    </div>
  );
}
