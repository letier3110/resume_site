import React, { FC } from "react";
import { SidebarBlocks } from "../components/sidebar-blocks";

import s from "../App.module.css";

export const Contacts: FC = () => (
  <SidebarBlocks>
    <h3>Contacts</h3>
    <div>
      <p>
        <strong>E: </strong>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="mailto:letier3110@gmail.com"
        >
          letier3110@gmail.com
        </a>
      </p>
      <p>
        <strong>SM:</strong>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/toxcik-979ab6ab/"
        >
          LinkedIn,
        </a>
        <a
          target={"_blank"}
          className={s.link}
          rel="noreferrer noopener"
          href="https://github.com/letier3110"
        >
          Github
        </a>
      </p>
    </div>
  </SidebarBlocks>
);
