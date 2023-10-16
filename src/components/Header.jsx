import React from "react";
import Navigation from "./Navigation";

export default function Header({ device, children }) {
  return (
    <div className="header flex justify-between">
      {children}

      <div className="header-middle"></div>
      <div className="header-right">
        <Navigation device={device} />
      </div>
    </div>
  );
}
