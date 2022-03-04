import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
function Navbar() {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a
        href="#"
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <AiOutlineMail />
      </a>
      <a href="#">
        <AiOutlineHome />
      </a>
    </nav>
  );
}

export default Navbar;
