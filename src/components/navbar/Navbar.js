import React, { useState } from 'react';
import './navbar.css';
import { AiOutlineHome, AiOutlineUser, AiOutlineMail } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsJournalCode } from 'react-icons/bs';
function Navbar() {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a
        href="#"
        aria-label="first tab"
        className={active === '#' ? 'active' : ''}
        onClick={() => setActive('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        aria-label="second tab"
        onClick={() => setActive('#about')}
        className={active === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        aria-label="third tab"
        onClick={() => setActive('#experience')}
        className={active === '#experience' ? 'active' : ''}
      >
        <BiBook />
      </a>
      <a
        href="#portofolio"
        aria-label="forth tab"
        onClick={() => setActive('#portofolio')}
        className={active === '#portofolio' ? 'active' : ''}
      >
        <BsJournalCode />
      </a>
      <a
        href="#contact"
        aria-label="fifth tab"
        onClick={() => setActive('#contact')}
        className={active === '#contact' ? 'active' : ''}
      >
        <AiOutlineMail />
      </a>
    </nav>
  );
}

export default Navbar;
