import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Navigation({ device }) {
  useEffect(() => {
    // Update the currentDevice state when the device prop changes
  }, [device]);

  return (
    <div>
      {device === "desktop" ? (
        <>
          <ul className="flex flex-row flex-wrap">
            <li>
              <button>
                <Link to="/">Home</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/info">Info</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/about">About</Link>
              </button>
            </li>
            <li>
              <button>
                <Link to="/contact">Contact</Link>
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
