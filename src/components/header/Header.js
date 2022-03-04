import React, { useState, useEffect } from 'react';
import myImg from '../../assets/imgv2.png';
import './header.css';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { AiFillHtml5 } from 'react-icons/ai';
import {
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
} from 'react-icons/si';
import Socials from './Socials';
function Header() {
  const name = '</Vârban Cătălin>';
  const iconsArray = [
    'html',
    'css',
    'js',
    'react',
    'node',
    'express',
    'sql',
    'mongo',
  ];
  let i = 0;
  const [activeIcon, setActiveIcon] = useState(iconsArray[0]);

  const changeIcon = () => {
    i++;
    if (i > iconsArray.length) {
      setActiveIcon(iconsArray[0]);
    }
    setActiveIcon(iconsArray[i]);

    console.log(i);
    console.log(iconsArray.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      i++;
      if (i > iconsArray.length - 1) {
        i = 0;
      }
      const arrayValue = [iconsArray[i]];
      console.log(arrayValue);
      setActiveIcon(iconsArray[i]);
    }, 3000); // clearing interval
    return () => clearInterval(timer);
  }, [i]);
  return (
    <header>
      <div className="floating-bg"></div>
      <div className="container header_container">
        <h5>Hi, my name is</h5>
        <h1>{name}</h1>
        <h6 className="header--role">Junior Web Developer</h6>
        <Socials />
        <div className="header--icons">
          <AiFillHtml5
            className={activeIcon === 'html' ? 'activeIcon' : 'falseIcon'}
          />
          <SiCss3
            className={activeIcon === 'css' ? 'activeIcon' : 'falseIcon'}
          />
          <SiJavascript
            className={activeIcon === 'js' ? 'activeIcon' : 'falseIcon'}
          />
          <SiReact
            className={activeIcon === 'react' ? 'activeIcon' : 'falseIcon'}
          />
          <SiNodedotjs
            className={activeIcon === 'node' ? 'activeIcon' : 'falseIcon'}
          />
          <SiExpress
            className={activeIcon === 'express' ? 'activeIcon' : 'falseIcon'}
          />
          <SiPostgresql
            className={activeIcon === 'sql' ? 'activeIcon' : 'falseIcon'}
          />
          <SiMongodb
            className={activeIcon === 'mongo' ? 'activeIcon' : 'falseIcon'}
          />
        </div>
        {/* <div className="header--img">
          <img src={myImg} alt="my Photo" />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
