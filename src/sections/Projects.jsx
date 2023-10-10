import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h1 className="titles">Projects</h1>
      <div>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, laborum
          minima fugiat nam sint eligendi corrupti eaque ad aliquam quo sapiente
          asperiores quae aspernatur eveniet dicta repudiandae, maxime numquam
        </section>
        <div className="flex justify-center items-center flex-wrap border-2">
          <ProjectCard
            projectCount={0}
            title="project 1"
            stack={["javascript", "react"]}
            description={"this shit was annoying af to do"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
          <ProjectCard
            projectCount={0}
            title="project 1"
            stack={["javascript", "react"]}
            description={"this shit was annoying af to do"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
          <ProjectCard
            projectCount={0}
            title="project 1"
            stack={["javascript", "react"]}
            description={"this shit was annoying af to do"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
          <ProjectCard
            projectCount={0}
            title="project 1"
            stack={["javascript", "react"]}
            description={"this shit was annoying af to do"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
          <ProjectCard
            projectCount={0}
            title="project 1"
            stack={["javascript", "react"]}
            description={"this shit was annoying af to do"}
            githubLink={"https://cherrydub.com/"}
            siteLink={"https://cherrydub.com/"}
          />
        </div>
      </div>
    </div>
  );
}
