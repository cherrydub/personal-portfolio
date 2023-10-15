import React from "react";

export default function ProjectCard({
  title,
  badgeObj,
  stack,
  description,
  githubLink,
  siteLink,
  imgSrc,
  youtubeLink,
  githubFe,
  githubBe,
}) {
  return (
    <div className="project-card flex flex-col self-stretch">
      <h2 className="font-bold">{title}</h2>
      <div className="stack flex flex-wrap">
        {stack.map((tech) => (
          <img key={tech} src={badgeObj[tech]} alt={tech} />
        ))}
      </div>
      <div>{description}</div>
      {/* <img src={imgSrc} alt={title} width={"50px"} /> */}
      <div className="">
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <i class="lab la-github-alt" title="GitHub"></i>
          </a>
        )}
        {githubFe && (
          <a href={githubFe} target="_blank" rel="noopener noreferrer">
            <i class="lab la-github-alt" title="Frontend"></i>
          </a>
        )}
        {githubBe && (
          <a href={githubBe} target="_blank" rel="noopener noreferrer">
            <i class="lab la-github-alt" title="Backend"></i>
          </a>
        )}
        {siteLink && (
          <a href={siteLink} target="_blank" rel="noopener noreferrer">
            <i class="lab la-internet-explorer" title="Website"></i>
          </a>
        )}

        {youtubeLink && (
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <i class="lab la-youtube" title="YouTube"></i>
          </a>
        )}
      </div>
    </div>
  );
}
