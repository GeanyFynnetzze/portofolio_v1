import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';
function Technologies(props) {
  return (
    <div className="technologies">
      <BsCheck2Circle />
      <h4>{props.skill}</h4>
    </div>
  );
}

export default Technologies;
