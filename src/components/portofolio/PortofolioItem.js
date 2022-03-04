import React from 'react';
import testImg from '../../assets/imgv2.png';

function PortofolioItem(props) {
  return (
    <article className="portofolio--item">
      <div className="portofolio--item--img">
        <img src={props.image} />
      </div>
      <h3>{props.title}</h3>
      <div className="portofolio--links">
        <a href={props.github} className="btn">
          Github
        </a>
        {props.live === '' ? (
          ''
        ) : (
          <a href={props.live} className="btn btn-primary">
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default PortofolioItem;
