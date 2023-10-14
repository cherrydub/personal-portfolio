import React from "react";
import ProjectCard from "../components/ProjectCard";

const badgeObj = {
  javascript:
    "https://img.shields.io/badge/-JavaScript-6F9C35?style=flat-square&logo=javascript&logoColor=white",
  css: "https://img.shields.io/badge/-CSS3-2B74B8?style=flat-square&logo=css3&logoColor=white",
  html: "https://img.shields.io/badge/-HTML5-E34F26?style=flat-square&logo=html5&logoColor=white",
  react:
    "https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=white",
  express:
    "https://img.shields.io/badge/-Express-000000?style=flat-square&logo=Express&logoColor=white",
  nodejs:
    "https://img.shields.io/badge/-Node-339933?style=flat-square&logo=node.js&logoColor=white",
  bootstrap:
    "https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white",
  mysql:
    "https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white",
  psql: "https://img.shields.io/badge/-PSQL-336791?style=flat-square&logo=postgresql&logoColor=white",
  mongodb:
    "https://img.shields.io/badge/-MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white",
  firebase:
    "https://img.shields.io/badge/-Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=white",
  aws: "https://img.shields.io/badge/-AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white",

  github:
    "https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white",
  git: "https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white",
  jest: "https://img.shields.io/badge/-Jest-C21325?style=flat-square&logo=jest&logoColor=white",
  axios:
    "https://img.shields.io/badge/-Axios-007396?style=flat-square&logo=axios&logoColor=white",
  tailwind:
    "https://img.shields.io/badge/-Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white",
  framerMotion:
    "https://img.shields.io/badge/-Framer%20Motion-0055FF?style=flat-square&logo=framer-motion&logoColor=white",
  render:
    "https://img.shields.io/badge/-Render-75AADB?style=flat-square&logo=render&logoColor=white",
  vercel:
    "https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white",
  redux:
    "https://img.shields.io/badge/-Redux-764ABC?style=flat-square&logo=redux&logoColor=white",
  reactQuery:
    "https://img.shields.io/badge/-React%20Query-2B7489?style=flat-square&logo=react-query&logoColor=white",
  reactRouter:
    "https://img.shields.io/badge/-React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white",
  npm: "https://img.shields.io/badge/-npm-CB3837?style=flat-square&logo=npm&logoColor=white",
  flutter:
    "https://img.shields.io/badge/-Flutter-02569B?style=flat-square&logo=flutter&logoColor=white",
  dart: "https://img.shields.io/badge/-Dart-0175C2?style=flat-square&logo=dart&logoColor=white",
  prisma:
    "https://img.shields.io/badge/-Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white",
  typescript:
    "https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white",
  supabase:
    "https://img.shields.io/badge/-Supabase-333366?style=flat-square&logo=supabase&logoColor=white",
};

export default function Projects() {
  return (
    <div className="projects section">
      <h1 className="titles">Projects</h1>
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

          <ProjectCard
            badgeObj={badgeObj}
            title="Smart Brain"
            stack={[
              "html",
              "css",
              "javascript",
              "tailwind",
              "react",
              "nodejs",
              "express",
              "psql",
            ]}
            description={
              "PSQL database holds user info. Users can signup/login and upload an image, the website will then detect and outline any faces on the image"
            }
            imgSrc={"cherry-cherries.svg"}
            githubFe={"https://github.com/cherrydub/face-recognition-fe"}
            githubBe={"https://github.com/cherrydub/face-recognition-brain-api"}
            siteLink={"https://smartbrain.cherrydub.com/"}
          />
          <ProjectCard
            badgeObj={badgeObj}
            title="Win98 Styled Portfolio"
            stack={["html", "css", "javascript", "react", "tailwind"]}
            description={
              "Fun nostalgic website to showcase CV, portfolio, and link to socials. Website has closable/draggable windows, very interactive"
            }
            imgSrc={"cherry-cherries.svg"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://win98.cherrydub.com/"}
          />
          <ProjectCard
            badgeObj={badgeObj}
            title="Blocklist"
            stack={["dart", "flutter", "supabase", "prisma", "typescript"]}
            description={
              "Interactive task management app that uses different sized blocks to visualize which tasks are most important. Created this app as traditional time management tools use a time based system, as opposed to priority, and having larger blocks representing more urgent tasks is very intuitive. BlockList also includes a user system with authentication, and stores the task blocks position and size in a server meaning it can be accessed from multiple devices/by multiple users."
            }
            imgSrc={"cherry-cherries.svg"}
            githubLink={"https://github.com/git-gremlins/blocklist"}
            siteLink={"https://northcoders.com/projects/may-2023/blocklist"}
            youtubeLink={"https://www.youtube.com/watch?v=sMBatcWxz8M"}
          />
          <ProjectCard
            badgeObj={badgeObj}
            title="JSON Formatter"
            stack={["html", "css", "javascript", "react"]}
            description={"this shit was annoying af to do"}
            imgSrc={"cherry-cherries.svg"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
        </div>
      </div>
    </div>
  );
}
