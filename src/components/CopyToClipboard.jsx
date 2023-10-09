import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { toast } from "sonner";
import copy from "/copy.svg";
import checkBadge from "/checkBadge.svg";

export default function CopyToClipboard({ text }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText); // Declare and set hasCopiedText

  const handleCopyClick = () => {
    copyToClipboard(text);
    toast("Copied to clipboard");
  };

  return (
    <>
      <pre style={{ fontSize: "0.6rem" }}>
        <code
          title="copy code"
          className="bg-gray-100 break-words p-2 rounded-lg text-purple-500 font hover:cursor-pointer"
        >
          <span onClick={handleCopyClick}>{text}</span>
          <button
            disabled={hasCopiedText}
            className=" underline ml-2 copy-button"
            onClick={handleCopyClick}
          >
            {hasCopiedText ? (
              <img width={"15px"} src={checkBadge} alt="" />
            ) : (
              <img width={"15px"} src={copy} alt="" />
            )}
          </button>
        </code>
      </pre>
    </>
  );
}
