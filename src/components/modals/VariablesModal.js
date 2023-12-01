import React from 'react';
import Modal from "react-modal";
import {craftAll} from "../../data/array";
import NameFormat from "../NameFormat/NameFormat";

import "./Modals.scss"

const VariablesModal = ({open, close, setLocalId, id}) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      className="modalMain customWight"
      overlayClassName="overlayModal"
      ariaHideApp={false}
    >
      <div className="wrapperPrevCraft" data-aos="fade-left">
        {!open ? null :
          <>
            {craftAll[id].map((el, i) => (
              <div
                key={i}
                className="oneBox"
                onClick={() => {
                  setLocalId(i);
                  close()
                }}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
                  <div key={index}>
                    {el[index] === null ? (<div className="prevCraft"></div>) : (
                      <img
                        src={`./image/minecraft-item/${el[index]}.webp`}
                        className="prevCraft"
                        alt="#"
                        title={NameFormat(el[index])}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </>
        }
      </div>
    </Modal>
  );
};

export default VariablesModal;
