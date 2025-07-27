import React, { useEffect, useState } from "react";
import CN from "classnames";
import ReactModal from "react-modal";
import CloseSVGComponent from "../../svg/CloseSVGComponent";

import styles from "./MyModal.module.scss";

const MyModal = ({ type, open = false, showClose = true, close = () => {}, children, param }) => {
  const [modal, setModal] = useState(false);

  const handleClose = () => {
    setModal(false);
    close();
  };

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
      className={styles["modal_main_box"]}
      overlayClassName={styles["overlay_modal_full"]}
      ariaHideApp={false}
      {...param}
    >
      <div
        className={CN(styles["window"], {
          [styles["recipes"]]: type === "recipes",
          [styles["languages"]]: type === "languages",
          [styles["variables"]]: type === "variables",
        })}
      >
        {showClose && (
          <button onClick={handleClose} className={CN(styles["button"], styles["_close"])}>
            <CloseSVGComponent width="30px" height="30px" />
          </button>
        )}
        {children}
      </div>
    </ReactModal>
  );
};

export default MyModal;
