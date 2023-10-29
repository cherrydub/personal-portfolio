import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; // Import motion and useAnimation
import NavigationMenu from "./NavigationMenu";

export default function Navigation({ device }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation(); // Create animation controls

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (device === "comp") {
      setMenuOpen(false);
    }
  }, [device]);

  // Define the animation variants
  const itemVariants = {
    hidden: { y: -100, opacity: 1 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="navigation text-right">
      {device === "comp" ? (
        <ul className="flex flex-row flex-wrap ul-li">
          {/* Use Framer Motion to animate list items */}
          <motion.li
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a className="li-link" href="#about">
              About
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a className="li-link" href="#projects">
              Projects
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a className="li-link" href="#experience">
              Experience
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a className="li-link" href="#contact">
              Contact
            </a>
          </motion.li>
        </ul>
      ) : (
        <div className="nav-button-container" onClick={toggleMenu}>
          {menuOpen ? (
            <i className="las la-caret-square-down pr-2 pl-2 pt-1 hover:cursor-pointer"></i>
          ) : (
            <motion.i
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.75, delay: 0 }}
              className="las la-caret-square-left pr-2 pl-2 pt-1 hover:cursor-pointer"
            ></motion.i>
          )}

          {menuOpen && <NavigationMenu toggleMenu={toggleMenu} />}
        </div>
      )}
    </div>
  );
}
