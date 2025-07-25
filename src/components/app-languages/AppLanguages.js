import React from "react";
import MyModal from "../my_modal/MyModal";
import { ISO } from "../../data/ISO";

import styles from "./AppLanguages.module.scss";

const AppLanguages = ({ open, close, setSelectLang }) => {
  return (
    <MyModal open={open} close={close} type="languages">
      <div className={styles["list"]}>
        {Object.keys(ISO).map((language, index) => (
          <p
            className={styles["name"]}
            key={index}
            onClick={() => {
              setSelectLang(language);
              close();
            }}
          >
            &#8226; {ISO[language]}
          </p>
        ))}
      </div>
    </MyModal>
  );
};

export default AppLanguages;
