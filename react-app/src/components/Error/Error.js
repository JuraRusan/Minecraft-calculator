import React from 'react';

import "./Error.scss";

const Error = ({message}) => {
  return (
    <div className="wrapperError">
      <p className="errorMessage">{message}</p>
    </div>
  );
};

export default Error;
