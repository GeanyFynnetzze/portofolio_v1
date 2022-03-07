import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
function hSocials() {
  return (
    <div className="header--socials">
      <a target="_blank" href="https://linkedin.com/in/varban-catalin">
        <FaLinkedin />
      </a>
      <a target="_blank" href="https://github.com/GeanyFynnetzze">
        <FaGithub />
      </a>
      <a target="_blank" href="https://www.facebook.com/catalin.varban.376/">
        <FaFacebook />
      </a>
    </div>
  );
}

export default hSocials;
