import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

export default function Header({ device }) {
  return (
    <div className="header flex justify-between">
      <div className="header-left">logo</div>
      <div className="header-middle">
        Simple template made by <code className="terminal">GitGremlin</code>+
        <code className="terminal">CherryDub</code>
      </div>
      <div className="header-right">
        <Navigation device={device} />
      </div>
    </div>
  );
}
