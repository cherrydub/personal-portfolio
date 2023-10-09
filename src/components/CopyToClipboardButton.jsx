import React from "react";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import copy from "/copy.svg";
import checkBadge from "/checkBadge.svg";
import { toast } from "sonner";

export default function CopyToClipboardButton({ text }) {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  const handleCopyClick = () => {
    copyToClipboard(text);
    toast.success("Copied to clipboard");
  };

  return (
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
  );
}
