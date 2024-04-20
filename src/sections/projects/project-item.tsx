import React, { FC } from "react";
import { Brackets } from "../../components/brackets";

import { ProjectItemProps } from "./projects.interface";

export const ProjectItem: FC<ProjectItemProps & { index: number }> = ({
  index,
  name,
  description,
  link,
  technologies,
  source,
}) => (
  <div>
    {index}.
    <a target="_blank" rel="noopener noreferrer" href={link}>
      {name}
    </a>
    <p>{description}</p>
    <br />
    Technologies: <Brackets>
      {technologies.map((x) => (
        <span key={x}>{x}</span>
      ))}
    </Brackets>
    {source && (
      <Brackets>
        <a target="_blank" rel="noopener noreferrer" href={source}>
          git_source
        </a>
      </Brackets>
    )}
  </div>
);
