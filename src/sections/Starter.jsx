import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function Starter() {
  useEffect(() => {
    const typewriter = new Typewriter("#starter", {
      strings: ["Hello", "World"],
      autoStart: true,
    });

    return () => {
      typewriter.stop(); // Cleanup when the component unmounts
    };
  }, []);

  return <div id="starter"></div>;
}
