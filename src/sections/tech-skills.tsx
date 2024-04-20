import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Nodejs",
  "HTML / JSX",
  "SCSS / CSS / BEM / Styled Components",
  "Infura",
  "GraphQL",
  "Postgres",
  "Knexjs",
  "Docker",
  "Javascript / Typescript",
  "React / Next",
  "Redux / Apollo / RxJS",
  "Electron",
  "WebRTC",
  "Cypress / Puppet",
  "Browser Extension",
  "React Native",
  "Astro",
  "Rust / Axum"
];

export const TechSkills: FC = () => (
  <SidebarBlocks>
    <h3>Tech Skills</h3>
    <div>
      <ul>
        {data.map((x) => (
          <ListItem className={s.techSkill} key={x}>
            {x}
          </ListItem>
        ))}
      </ul>
    </div>
  </SidebarBlocks>
);
