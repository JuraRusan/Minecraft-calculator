import React from 'react';

import "./MiniBTN.scss";

const MiniBTN = ({onClick, disabled, label}) => {
  return (
    <button className="btnSwipe" onClick={onClick} disabled={disabled}>{label}</button>
  );
};

export default MiniBTN;
