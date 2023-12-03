import classNames from "classnames";
import Main from "./main/Main";

import styles from "./App.module.scss";

function App() {
  return (
    <div className={classNames(styles["main_body_page"])}>
      <div className={classNames(styles["shadow_top"])}></div>
      <div className={classNames(styles["index"])}>
        <Main/>
      </div>
      <div className={classNames(styles["shadow_bottom"])}></div>
    </div>
  );
}

export default App;
