import React from 'react';
import NameFormat from "../NameFormat/NameFormat";
import {craftAll} from "../../data/array";

const ViewItem = ({obj, itemName}) => {

  return (
    <div className="craftOne">
      {!obj[itemName] || obj[itemName] === "air" ? null :
        <img
          src={`./image/minecraft-item/${obj[itemName]}.webp`}
          alt="none"
          data-aos="flip-left"
          title={NameFormat(obj[itemName])}
        />
      }
    </div>
  );
};

export default ViewItem;
