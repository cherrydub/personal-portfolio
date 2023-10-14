import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

export default function TopLeft() {
  useEffect(() => {
    const typewriter = new Typewriter("#topleft", {
      strings: ["Hello", "World"],
      autoStart: true,
      looop: true,
    });

    return () => {
      typewriter.stop(); // Cleanup when the component unmounts
    };
  }, []);

  return <div id="topleft"></div>;
}
