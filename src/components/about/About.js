import React from 'react';
import './about.css';
import myImg from '../../assets/imgv2.png';
import { GoBrowser } from 'react-icons/go';
import { IoIosColorPalette } from 'react-icons/io';
import { FaUnity } from 'react-icons/fa';
function About() {
  return (
    <section id="about">
      <div className="about--intro">
        <h5>Some Details</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about--container">
        <div className="about--info">
          <div className="about--cards">
            <article className="about--card">
              <IoIosColorPalette />
              <h5 className="about--ui">UI/UX</h5>
            </article>
            <article className="about--card">
              <GoBrowser />
              <h5>Web Developement</h5>
            </article>
            <article className="about--card">
              <FaUnity />
              <h5>Game Development &amp; AR/VR</h5>
            </article>
          </div>
          <p>
            &ensp;&ensp;Recent Graduated as a{' '}
            <span className="span--intro">Software Engineer</span> after
            studying for 3.5 years in{' '}
            <span className="span--intro">Denmark</span>, I am now seeking an{' '}
            <span className="span--intro">Entry-Level</span> opportunity to join
            the Web Development industry.
            <br /> &ensp;&ensp;During this period I gathered hands-on experience
            for certain programming languages such as{' '}
            <span className="span--language">Java</span>,
            <span className="span--language"> JavaScript</span>,
            <span className="span--language"> C#</span> along with{' '}
            <span className="span--front">HTML</span> and
            <span className="span--front"> CSS</span> and experience with{' '}
            <span className="span--db"> SQL </span>
            and <span className="span--db"> NoSQL</span> databases .
          </p>
        </div>
        <div className="about--me">
          <img src={myImg} alt="my-image" className="about--me--img" />
        </div>
      </div>
    </section>
  );
}

export default About;
