import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from 'react-icons/fa';
function hSocials() {
  return (
    <div className="header--socials">
      <a href="https://linkedin.com/in/varban-catalin" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://github.com/GeanyFynnetzze" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.facebook.com/catalin.varban.376/" target="_blank">
        <FaFacebook />
      </a>
    </div>
  );
}

export default hSocials;
