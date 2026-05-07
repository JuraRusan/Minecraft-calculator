import CN from "classnames";
import { type FC, type ReactNode, useEffect } from "react";
import ReactModal from "react-modal";

import { CloseCircle } from "@/common/components/atoms/icon/Icons.ts";

import styles from "./Modal.module.scss";

type MyModalProps = {
  show: boolean;
  showClose?: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const Modal: FC<MyModalProps> = ({ show, showClose = true, handleClose, children }) => {
  useEffect(() => {
    if (!show) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, [show]);

  return (
    <ReactModal
      isOpen={show}
      className={styles["modal_main_container"]}
      overlayClassName={styles["modal_full_overlay"]}
      ariaHideApp={false}>
      <div className={styles["content_container"]}>
        {children}
        {!showClose ? null : (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleClose();
            }}
            className={CN(styles["close"])}>
            <CloseCircle width="30px" height="30px" />
          </button>
        )}
      </div>
    </ReactModal>
  );
};

export default Modal;
