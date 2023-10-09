import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Toaster, toast } from "sonner";
import {
  useCopyToClipboard,
  useLocalStorage,
  useWindowSize,
} from "@uidotdev/usehooks";

import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import CopyToClipboard from "./components/CopyToClipboard";

function App() {
  const [count, setCount] = useState(0);
  const [device, setDevice] = useState("mobile");
  const windoSize = useWindowSize();

  useEffect(() => {
    toast.success("Congrats on finding this!");
  }, []);

  useEffect(() => {
    if (windoSize.width > 600) {
      setDevice("desktop");
    } else {
      setDevice("mobile");
    }
  }, [windoSize]); // Update device state when windoSize changes

  useEffect(() => {
    if (count > 10) {
      toast("Someone sure likes clicking");
    }
  }, [count]); // Update toast when count changes

  return (
    <BrowserRouter>
      <Toaster richColors />
      <Header device={device} />
      <CopyToClipboard text="http://template.cherrydub.com" />
      <br />
      <Body />

      <br />
      <div className="flex justify-center">
        <div className="scrollable-container ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Instructions />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
      <br />
      <div className="card">
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is {count}
        </button>
      </div>
    </BrowserRouter>
  );
}

export default App;
