import React, { useEffect, useState } from "react";
import classNames from "classnames";
import ReactModal from "react-modal";

import styles from "./MyModal.module.scss";

const MyModal = ({ type, open = false, showClose = true, close = () => {}, children, param }) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (open) {
      setModal(true);
      document.body.style.overflow = "hidden";
    } else {
      setModal(false);
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <ReactModal
      isOpen={modal}
      className={classNames(styles["modal_main_box"])}
      overlayClassName={classNames(styles["overlay_modal_full"])}
      ariaHideApp={false}
      {...param}
    >
      <div
        className={classNames(styles["window"], {
          [styles["recipes"]]: type === "recipes",
          [styles["languages"]]: type === "languages",
          [styles["variables"]]: type === "variables",
        })}
      >
        {showClose && (
          <button
            onClick={() => {
              setModal(false);
              close();
            }}
            className={classNames(styles["modal_close"])}
          >
            &#128473;
          </button>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default MyModal;
