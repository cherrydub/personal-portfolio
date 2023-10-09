import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import tailwindcss from "/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import gremlinLogo from "/gremlin.svg";
import axiosLogo from "/Axios-logo.svg";
import cherrycherries from "/cherry-cherries.svg";

export default function TemplateLogos() {
  return (
    <div className="template-logos">
      <div className="flex flex-col">
        <div className="flex justify-center flex-wrap">
          <a href="https://cherrydub.com" target="_blank">
            <img src={cherrycherries} className="logo" alt="Cherrydub logo" />
          </a>
          <a href="https://gitgremlin.com" target="_blank">
            <img src={gremlinLogo} className="logo" alt="GitGremlin logo" />
          </a>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo spin" alt="React logo" />
          </a>

          <a href="https://tailwindcss.com/" target="_blank">
            <img src={tailwindcss} className="logo" alt="TailwindCSS logo" />
          </a>
          <a href="https://axios-http.com/" target="_blank">
            <img
              // style={{ width: "200px", marginTop: "-40px" }}
              src={axiosLogo}
              className="logo"
              alt="Axios logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
