import React from 'react';

import "./Error.scss";

const Error = (props) => {
  return (
    <div className="wrapperError">
      <p className="errorMessage">{props.message}</p>
    </div>
  );
};

export default Error;
