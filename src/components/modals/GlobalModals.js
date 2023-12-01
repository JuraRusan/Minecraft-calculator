import React, {useEffect, useState} from 'react';
import Modal from "react-modal";
import {craftAll} from "../../data/array.js";
import NameFormat from "../NameFormat/NameFormat";
import {debounce} from "lodash";

import "./Modals.scss"

const GlobalModals = ({open, close, setIndexGlobal}) => {

  const [search, serSearch] = useState('')

  useEffect(() => {
    if (!open) {
      serSearch('')
    }
  }, [open])

  return (
    <Modal
      isOpen={open}
      onRequestClose={close}
      className="modalMain"
      overlayClassName="overlayModal"
      ariaHideApp={false}
    >
      <div className="wrapperModal" data-aos="fade-left">
        <input
          type="search"
          name="string"
          placeholder="search"
          className="searchCraft"
          onChange={debounce((e) => serSearch(e.target.value.toLowerCase()), 350)}
        />
        {craftAll.map((el, i) => {
          const craftItem = Array.isArray(el) ? el[0] : el;

          return (
            craftItem.out === "air" || !craftItem.out.includes(search) ? null :
              <div
                className="rowCraftOne"
                key={i}
                onClick={() => {
                  close();
                  setIndexGlobal(i);
                  serSearch('')
                }}
              >
                <img src={`./image/minecraft-item/${craftItem.out}.webp`} className="image" alt="#"/>
                <label className="nameCraft">{NameFormat(craftItem.out)}</label>
              </div>
          )
        })}
      </div>
    </Modal>
  );
};

export default GlobalModals;
