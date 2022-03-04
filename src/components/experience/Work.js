import React from 'react';
import { MdWork } from 'react-icons/md';
function Work(props) {
  return (
    <>
      <div className="work">
        <h4>
          <MdWork />
          {props.company}
        </h4>
        <h5>{props.role}</h5>
        <h6>{props.period}</h6>
      </div>
    </>
  );
}

export default Work;
