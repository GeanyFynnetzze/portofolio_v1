import React from 'react';
import './footer.css';
function Footer() {
  return (
    <footer>
      <a href="#" className="footer--logo">
        TANK
      </a>
      <ul className="footer--permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Expereince</a>
        </li>
        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <h3 className="footer--copyright">TankIndustries©All Rights Reserved</h3>
    </footer>
  );
}

export default Footer;
