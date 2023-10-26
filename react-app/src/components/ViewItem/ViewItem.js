import React from 'react';
import NameFormat from "../NameFormat/NameFormat";

const ViewItem = ({itemName, setCraft, craft}) => {

  const handleLeftClick = () => {
  };

  const handleRightClick = () => {
    setCraft((prevCraft) => ({
      ...prevCraft,
      [itemName]: null,
    }));
  };

  return (
    <div
      onClick={handleLeftClick}
      onContextMenu={(e) => {
        e.preventDefault();
        handleRightClick();
      }}
      className="craftOne"
    >
      {craft[itemName] === null ? undefined :
        <img
          src={`./image/minecraft-item/${craft[itemName]}.webp`}
          alt="none"
          data-aos="flip-left"
          title={NameFormat(craft[itemName])}
        />
      }
    </div>
  );
};

export default ViewItem;
