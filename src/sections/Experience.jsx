import React from "react";
import ExperienceCard from "../components/ExperienceCard";

export default function Experience() {
  return (
    <div className="experience section" id="experience">
      <h1 className="titles">Experience</h1>
      <div>
        <section></section>
        <div className="projects-container flex items-start flex-wrap">
          {/* <div>
            {Object.entries(badgeObj).map(([tech, badgeUrl]) => (
              <div key={tech}>
                <img src={badgeUrl} alt={tech} />
              </div>
            ))}
            <br />
          </div> */}
          <ExperienceCard
            jobURL={"https://northcoders.com/"}
            description={
              "Immersive 13-week bootcamp designed to equip aspiring tech professionals with the skills and knowledge they need to succeed in web development. With a focus on progressive learning, the program is packed with daily tasks, mini-projects, and portfolio-worthy material that challenges and inspires students every step of the way. Intense and rewarding, with a comprehensive curriculum and a hands-on learning approach that provided practical experience in web development. The knowledgeable teachers and tutors were always available to offer guidance and support, helping me to build a strong portfolio and gain valuable insights on how to learn more efficiently. Thanks to Northcoders, I now feel fully job-ready and confident in my ability to tackle complex web development challenges. The experience has been transformative, not just in terms of my technical skills, but also in terms of my mindset and approach to learning. I would highly recommend this bootcamp to anyone looking to break into the tech industry"
            }
            timeShield={
              "https://img.shields.io/badge/February%202023%20-%20May%202022-white?style=for-the-badge"
            }
            jobShield={
              "https://img.shields.io/badge/NorthCoders-white?style=for-the-badge&color=red"
            }
          />

          <ExperienceCard
            jobURL={"https://www.mac-seven.com/"}
            description={
              "Worked as an IT consultant with a range of clients across various industries. Gained valuable experience with Mac- Seven, a leading managed service provider serving diverse clients including schools and businesses. Provided remote IT support and managed a wide range of systems, including Windows and Mac machines, and oversaw server, firewall, hardware, and software maintenance. Developed an extensive knowledge of various company setups and acquired a comprehensive understanding of the intricacies of IT management Honed skills in managing and troubleshooting IT issues Confident in leveraging expertise to make valuable contributions to any tech role"
            }
            timeShield={
              "https://img.shields.io/badge/July%202018%20-%20October%202022-white?style=for-the-badge"
            }
            jobShield={
              "https://img.shields.io/badge/MacSeven-blue?style=for-the-badge"
            }
          />
        </div>
      </div>
    </div>
  );
}
