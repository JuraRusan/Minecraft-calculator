import React from "react";
import classNames from "classnames";
import { useSelector } from "react-redux";

import styles from "./Notifications.module.scss";

const Notifications = () => {
  const load_lang_app = useSelector((state) => state.lang_app);

  return (
    <div className={classNames(styles["notifications_footer"])}>
      <p className={classNames(styles["info"])}>{load_lang_app.notifications_product}</p>
      <p className={classNames(styles["info"])}>
        {load_lang_app.report}
        <a
          href="https://github.com/JuraRusan/Minecraft-calculator/issues"
          target="_blank"
          rel="noreferrer"
          className={classNames(styles["link"])}
        >
          GitHub
        </a>
      </p>
    </div>
  );
};

export default Notifications;
