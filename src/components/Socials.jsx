import React from "react";
import { motion } from "framer-motion";

export default function Socials() {
  const socialVariants = {
    hover: {
      scale: 1.2, // Scale up the image on hover
      rotate: 360, // Rotate the image 360 degrees on hover
      borderRadius: 0.5,
    },
    initial: {
      scale: 1, // Initial scale
      rotate: 0, // Initial rotation
      borderRadius: 0.5,
    },
  };

  return (
    <div className="socials">
      <div className="flex flex-col">
        <a href="#contact">
          <motion.svg
            whileHover="hover" // Use the hover variant for CSS3
            whileTap="active"
            initial="initial"
            variants={socialVariants}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Let's connect!</title>
            <path d="M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12" />
          </motion.svg>
        </a>

        <a href="https://github.com/cherrydub" target="_blank">
          <motion.svg
            whileHover="hover" // Use the hover variant for CSS3
            whileTap="active"
            initial="initial"
            variants={socialVariants}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </motion.svg>
        </a>

        <a href="https://www.linkedin.com/in/wisniewskichris/" target="_blank">
          <motion.svg
            whileHover="hover" // Use the hover variant for CSS3
            whileTap="active"
            initial="initial"
            variants={socialVariants}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>LinkedIn</title>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </motion.svg>
        </a>

        <a href="https://raw.githubusercontent.com/cherrydub/cherrydub/main/Chris_Wisniewski_CV.pdf">
          <motion.svg
            whileHover="hover" // Use the hover variant for CSS3
            whileTap="active"
            initial="initial"
            variants={socialVariants}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>download CV</title>
            <path d="M8.95722 5.07654c-.42115-.1125-.85403.13665-.96688.55648-.11283.41983.13708.85138.55824.96387l9.15052 2.44427c.4212.1125.8541-.13666.9669-.55649.1129-.41984-.1371-.85138-.5582-.96386L8.95722 5.07654ZM6.96873 9.43392c.11284-.41983.54572-.66899.96686-.55649l9.15061 2.44427c.4211.1125.6709.544.5582.9639-.1128.4198-.5457.669-.9669.5565l-9.15056-2.4443c-.42113-.1125-.67107-.54405-.55821-.96388ZM6.91397 12.6783c-.42114-.1125-.85403.1367-.96686.5565-.11285.4198.13708.8513.55822.9639l5.33777 1.4259c.4212.1124.8541-.1367.9669-.5567.1129-.4198-.1371-.8512-.5582-.9638l-5.33783-1.4258Z M20.8587 3.36707 8.65799.10804C6.97343-.34192 5.2419.65467 4.7905 2.334L.90837 16.777c-.45138 1.679.54831 3.405 2.23287 3.855L15.342 23.892c1.6846.4499 3.416-.5467 3.8675-2.226l3.8821-14.44346c.4513-1.67933-.5483-3.40549-2.2329-3.85547ZM6.3156 2.74138c.2257-.83967 1.09146-1.33797 1.93375-1.11297L20.4501 4.88744c.8422.22498 1.3421 1.08806 1.1163 1.92772L17.6843 21.2586c-.2255.8397-1.0914 1.338-1.9336 1.1129l-12.20079-3.259c-.84229-.225-1.34214-1.088-1.11645-1.9276L6.3156 2.74138Z" />
          </motion.svg>
        </a>

        <a href="#top">
          <motion.svg
            whileHover="hover" // Use the hover variant for CSS3
            whileTap="active"
            initial="initial"
            variants={socialVariants}
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Scroll Up</title>
            <path d="M2 18.439l3.69-2.828c1.961 2.56 4.044 3.739 6.363 3.739 2.307 0 4.33-1.166 6.203-3.704L22 18.405C19.298 22.065 15.941 24 12.053 24 8.178 24 4.788 22.078 2 18.439zM12.04 6.15l-6.568 5.66-3.036-3.52L12.055 0l9.543 8.296-3.05 3.509z" />
          </motion.svg>
        </a>
      </div>
    </div>
  );
}

{
  /* <a href="https://raw.githubusercontent.com/cherrydub/cherrydub/main/Chris_Wisniewski_CV.pdf">
  <i title="download CV" class="las la-file"></i>
</a>; */
}
