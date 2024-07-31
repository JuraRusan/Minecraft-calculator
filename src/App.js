import React from "react";
import classNames from "classnames";
import Main from "./main/Main";
import Notifications from "./components/notifications/Notifications";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.scss";

function App() {
  return (
    <Router>
      <div className={classNames(styles["main_body_page"])}>
        <div className={classNames(styles["content"])}>
          <Main />
          <Notifications />
        </div>
      </div>
    </Router>
  );
}

export default App;
