import classNames from "classnames";
import React from "react";
import Main from "./main/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={classNames(styles["main_body_page"])}>
      <div className={classNames(styles["notifications_box"])}>
        <h4 className={classNames(styles["title"])}>Notifications</h4>
        <p className={classNames(styles["info"])}>If you find any bugs, please report them to
          <a
            href="https://github.com/JuraRusan/Minecraft-calculator/issues"
            target="_blank"
            rel="noreferrer"
            className={classNames(styles["link"])}
          > GitHub</a>
        </p>
      </div>
      <div className={classNames(styles["shadow_top"])}></div>
      <div className={classNames(styles["index"])}>
        <Main/>
      </div>
      <div className={classNames(styles["shadow_bottom"])}></div>
    </div>
  );
}

export default App;
