import React, { useEffect } from "react";

export default function Navigation({ device }) {
  useEffect(() => {
    // Update the currentDevice state when the device prop changes
  }, [device]);

  return (
    <div>
      {device === "comp" ? (
        <>
          <ul className="flex flex-row flex-wrap">
            <li>
              <button>
                <a href="#about">About</a>
              </button>
            </li>
            <li>
              <button>
                <a href="#projects">Projects</a>
              </button>
            </li>
            <li>
              <button>
                <a href="#experience">Experience</a>
              </button>
            </li>
            <li>
              <button>
                <a href="#contact">Contact</a>
              </button>
            </li>
          </ul>
        </>
      ) : (
        <button>X</button>
      )}
    </div>
  );
}
