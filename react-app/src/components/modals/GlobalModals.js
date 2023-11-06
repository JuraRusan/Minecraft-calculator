import React from 'react';
import Modal from "react-modal";
import {craftAll} from "../../data/array";
import NameFormat from "../NameFormat/NameFormat";

import "./Modals.scss"

const GlobalModals = ({open, close, setIndexGlobal}) => {
  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      className="modalMain"
      overlayClassName="overlayModal"
      ariaHideApp={false}
    >
      <div className="wrapperModal" data-aos="fade-left">
        <input type="search" name="string" placeholder="search" className="searchCraft"/>
        {craftAll.map((el, i) => {
          const craftItem = Array.isArray(el) ? el[0] : el;

          return (
            <div
              className="rowCraftOne"
              key={i}
              onClick={() => {
                close();
                setIndexGlobal(i);
              }}
            >
              {craftItem.out === "air" ? null :
                <>
                  <img src={`./image/minecraft-item/${craftItem.out}.webp`} className="image" alt="#"/>
                  <label className="nameCraft">{NameFormat(craftItem.out)}</label>
                </>
              }
            </div>
          )
        })}
      </div>
    </Modal>
  );
};

export default GlobalModals;
