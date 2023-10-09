import React from "react";
// import CopyToClipboardButton from "./CopyToClipboardButton";
import CopyToClipboard from "./CopyToClipboard";

export default function CodeSnippet({ title, instructions, code }) {
  return (
    <div className="bg-opacity-10 bg-white max-w-full mt-5 mb-5 p-5  rounded-lg text-sm">
      <div>
        <label className="break-words" style={{ fontSize: "0.8rem" }}>
          {instructions}
        </label>
      </div>
      <div className="flex flex-col justify-center items-center">
        <br />
        {Array.isArray(code) ? (
          code.map((codeSnippet, index) => (
            <div key={index} className="flex m-2">
              <CopyToClipboard text={codeSnippet} />

              {/* <CopyToClipboardButton code={codeSnippet} /> */}
            </div>
          ))
        ) : (
          <div className="flex">
            <CopyToClipboard text={code} />

            {/* <CopyToClipboardButton code={code} /> */}
          </div>
        )}
      </div>
    </div>
  );
}
