import React from 'react';
import testImg from '../../assets/imgv2.png';

function PortofolioItem(props) {
  const checkLink = () => {
    if (props.live.includes('https://app.netlify.com')) {
      return 'Web';
    } else return 'Youtube';
  };
  return (
    <article className="portofolio--item">
      <div className="portofolio--item--img">
        <img src={props.image} alt="Project Cover" />
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
            More
          </a>
        )}
      </div>
    </article>
  );
}

export default PortofolioItem;
