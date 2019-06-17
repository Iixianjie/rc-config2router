import React from 'react';

const Base = (props) => {
  return (
    <div>
      base
      <div>{props.children}</div>
    </div>
  );
};

export default Base;