import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Ukrainian - Native",
  "Japanese - Basic (N5/N4)",
  "English - Advanced",
];

export const Languages: FC = () => (
  <SidebarBlocks>
    <h3>Languages</h3>
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
