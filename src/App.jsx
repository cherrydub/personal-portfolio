import React, { useEffect, useState } from "react";
import "./App.css";
import { Toaster, toast } from "sonner";
import { useWindowSize } from "@uidotdev/usehooks";
import Header from "./components/Header";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Socials from "./components/Socials";
import Starter from "./sections/Starter";
import LeftBar from "./components/LeftBar";
import TopLeft from "./components/TopLeft";

function App() {
  const [theme, setTheme] = useState("light"); // Default to dark theme
  const [device, setDevice] = useState("mobile");
  const windoSize = useWindowSize();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    toast("Congrats on finding your new developer😎");

    // Set the initial theme based on system preference
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const setSystemTheme = (event) => {
      const newTheme = event.matches ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      setTheme(newTheme);
    };

    setSystemTheme(systemPrefersDark); // Set initial theme

    // Listen for changes in system preference and update the theme
    systemPrefersDark.addEventListener("change", setSystemTheme);

    // Clean up event listener when the component unmounts
    return () => {
      systemPrefersDark.removeEventListener("change", setSystemTheme);
    };
  }, []);

  useEffect(() => {
    setDevice(windoSize.width > 600 ? "comp" : "mobile");
  }, [windoSize]);

  return (
    <div id={theme} className="App">
      <Toaster richColors />
      <Header id="top" device={device}>
        <div className="flex pt-2 pl-3">
          <span className="device pr-2">
            {device === "comp" ? (
              <i className="las la-laptop-code"></i>
            ) : (
              <i className="las la-mobile"></i>
            )}
          </span>
          <TopLeft />
        </div>
      </Header>
      <LeftBar>
        <Socials />
        <button onClick={toggleTheme} className="toggle-button flex flex-col">
          {theme === "dark" ? (
            <i className="las la-adjust"></i>
          ) : (
            <i className="lar la-sun"></i>
          )}
          {/* {theme} */}
        </button>
      </LeftBar>
      <div className="main-sections">
        <Starter />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
