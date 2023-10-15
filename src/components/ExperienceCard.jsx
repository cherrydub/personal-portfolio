import React from "react";

export default function ExperienceCard({ jobShield, timeShield, description }) {
  return (
    <div className="project-card flex flex-col self-stretch relative">
      <div className="flex absolute top-0 left-0">
        <img src={jobShield} alt="" />
        <img src={timeShield} alt="" />
      </div>
      <br />
      <div>{description}</div>
      {/* <div className="absolute top-0 right-0">
        <img src={timeShield} alt="" />
      </div> */}
      <div className="absolute bottom-0 right-0">
        <img
          src="https://img.shields.io/badge/London,%20UK-white?style=for-the-badge"
          alt=""
        />
      </div>
      <br />
      {/* <div className="flex justify-between">
        <img src={timeShield} alt="" />
        <img
          src="https://img.shields.io/badge/London,%20UK-white?style=for-the-badge"
          alt=""
        />
      </div> */}
    </div>
  );
}

// import React from "react";

// export default function ExperienceCard({ jobShield, timeShield, description }) {
//   return (
//     <div className="project-card flex flex-col self-stretch">
//       <div className="flex">
//         <img src={jobShield} alt="" />
//       </div>
//       <div>{description}</div>
//       {/* <img src={imgSrc} alt={title} width={"50px"} /> */}
//       <div className="">xxx</div>
//       <div className="flex justify-between">
//         <img src={timeShield} alt="" />
//         <img
//           src="https://img.shields.io/badge/London,%20UK-white?style=for-the-badge"
//           alt=""
//         />
//       </div>
//     </div>
//   );
// }
