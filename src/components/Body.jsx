import React, { useState } from "react";
import { Toaster, toast } from "sonner";
import tailwindcss from "/tailwindcss.svg";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import gremlinLogo from "/gremlin.svg";

import axiosLogo from "/Axios-logo.svg";
import cherrycherries from "/cherry-cherries.svg";
import TemplateLogos from "./TemplateLogos";

export default function Body() {
  return (
    <div className="body">
      <TemplateLogos />

      <h3>
        +
        <span
          onClick={() => {
            toast("sonner/toastify notifications", {
              action: {
                label: "info",
                onClick: () =>
                  window.open("https://sonner.emilkowal.ski/", "_blank"),
              },
            });
          }}
          className="hover:cursor-pointer link"
        >
          sonner
        </span>{" "}
        +
        <a href="https://reactrouter.com/en/main" target="_blank">
          react-router-dom
        </a>{" "}
        +
        <a title="custon hooks" href="https://usehooks.com/" target="_blank">
          useHooks
        </a>{" "}
      </h3>
    </div>
  );
}
