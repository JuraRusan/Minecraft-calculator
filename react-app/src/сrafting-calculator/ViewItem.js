import React from 'react';

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
          title={craft[itemName].replace(/_/g, ' ').charAt(0).toUpperCase() + craft[itemName].replace(/_/g, ' ').slice(1)}
        />
      }
    </div>
  );
};

export default ViewItem;
