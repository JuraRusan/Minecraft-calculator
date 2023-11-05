import React from "react";
import Modal from "react-modal";

import NameFormat from "../../components/NameFormat/NameFormat";

const VariablesModal = ({
  show,
  data,
  handleClose,
  setLocalId,
  setNestedLocalData,
}) => {
  const dataArray = Array.isArray(data) ? data : null;

  return (
    <Modal
      isOpen={show}
      onRequestClose={handleClose}
      className="modalMain customWight"
      overlayClassName="overlayModal"
      ariaHideApp={false}
    >
      <div className="wrapperPrevCraft" data-aos="fade-left">
        {show && dataArray ? (
          <>
            {dataArray?.map((el, i) => (
              <div
                key={i}
                className="oneBox"
                onClick={() => {
                  setLocalId(i);
                  handleClose();
                  setNestedLocalData(() => ({
                    itemIndex: i,
                    needUpdate: true,
                  }));
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <div key={index}>
                    {el[index] === null ? (
                      <div className="prevCraft"></div>
                    ) : (
                      <img
                        alt="#"
                        className="prevCraft"
                        title={NameFormat(el[index])}
                        src={`./image/minecraft-item/${el[index]}.webp`}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default VariablesModal;
