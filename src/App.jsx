import React, { useEffect, useState } from "react";
import "./App.css";
import { Toaster, toast } from "sonner";
import { useLocalStorage, useWindowSize } from "@uidotdev/usehooks";

import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Socials from "./components/Socials";

function App() {
  const [theme, setTheme] = useState("dark");
  const [device, setDevice] = useState("mobile");
  const windoSize = useWindowSize();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    toast("Congrats on finding your new developer😎");
  }, []);

  useEffect(() => {
    if (windoSize.width > 600) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  }, [windoSize]); // Update device state when windoSize changes

  return (
    <div id={theme} className="App">
      <Toaster richColors />
      <Header id="top" device={device} />
      <button id="theme-button" onClick={toggleTheme}>
        {theme}
      </button>
      {/* <Body /> */}
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Socials />
    </div>
  );
}

export default App;
