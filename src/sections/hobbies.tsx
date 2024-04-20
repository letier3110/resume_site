import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";
import { ListItem } from "../components/list-item";

const data = [
  "Hiking / Volleyball / Cycling",
  "Learning new spoken languages",
  "Gamedev",
];

export const Hobbies: FC = () => (
  <SidebarBlocks>
    <h3>Hobbies</h3>
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
