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

function App() {
  const [theme, setTheme] = useState("dark"); // Default to dark theme
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
    setDevice(windoSize.width > 600 ? "desktop" : "mobile");
  }, [windoSize]);

  return (
    <div id={theme} className="App">
      <Toaster richColors />
      <Header id="top" device={device} />
      <div className="main-sections">
        <div>current theme: {theme}</div>
        <div>device: {device}</div>

        <button onClick={toggleTheme}>Toggle Theme</button>
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Socials />
      </div>
    </div>
  );
}

export default App;
