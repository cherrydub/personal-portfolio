import React from "react";

export default function ProjectCard({
  projectCount,
  title,
  stack,
  description,
  githubLink,
  siteLink,
}) {
  return (
    <div className="border border-green-500">
      <h2>{title}</h2>
      <p>{stack}</p>
      <p>{description}</p>
      <p>{githubLink}</p>
      <p>{siteLink}</p>
      <p>{projectCount}</p>
    </div>
  );
}
