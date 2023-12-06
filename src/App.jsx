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
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [theme, setTheme] = useState("light"); // Default to light theme
  const [device, setDevice] = useState("mobile");
  const windoSize = useWindowSize();
  const [componentsActive, setComponentsActive] = useState(false);

  useEffect(() => {
    // Trigger the activation after some delay
    setTimeout(() => setComponentsActive(true), 1000);
  }, []);

  const slideInVariants = {
    // hidden: { x: -100, opacity: 0 },
    // visible: { x: 0, opacity: 1 },
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // const transition = { duration: 1, delay: 0.5 }; // 1-second delay between components

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    toast("Hello everyone 😎");

    // document.documentElement.setAttribute("data-theme", theme);

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
    console.log(windoSize);
  }, [windoSize]);

  return (
    <div
      //  id={theme}
      className="App"
    >
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
        <AnimatePresence>
          {componentsActive && (
            <motion.div
              key="starter"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.2 }}
            >
              <Starter />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {componentsActive && (
            <motion.div
              key="about"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.4 }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {componentsActive && (
            <motion.div
              key="projects"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.6 }}
            >
              <Projects />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {componentsActive && (
            <motion.div
              key="experience"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 1.8 }}
            >
              <Experience />
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {componentsActive && (
            <motion.div
              key="contact"
              variants={slideInVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: 2 }}
            >
              <Contact />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
