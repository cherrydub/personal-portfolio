import React from "react";
import CodeSnippet from "./CodeSnippet";

export default function Instructions() {
  return (
    <div className="instructions-outer flex justify-center">
      <div className="instructions-inner">
        <h2 className="link">Info:</h2>
        <CodeSnippet
          title="1"
          instructions="begin with cloning this repo onto your destination folder: begin with cloning this repo onto your destination folder:"
          code={["git clone ", "git not clone"]}
        />
        <CodeSnippet
          title="start here"
          instructions="npm install, this will install all the dependencies that have been added to package.json"
          code="npm i"
        />
        <CodeSnippet title="start here" instructions="part1b" code="part2b" />
      </div>
    </div>
  );
}
