import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(prevMenuActive => !prevMenuActive);
  };

  return (
    <nav className={`${style.navbar} bg-secondary text-white p-4`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className={`text-xl font-bold ${style.brandLogoText}`}>REKER WORLD</div>
        <div className={`${style.hamburger}`} onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${style.menu} ${menuActive ? 'active' : ''}`}>
          <NavLink 
            to="/" 
            className={({ isActive }: { isActive: boolean }) => isActive ? `${style.navLink} ${style.navLinkActive} mx-2` : `${style.navLink} mx-2`}
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }: { isActive: boolean }) => isActive ? `${style.navLink} ${style.navLinkActive} mx-2` : `${style.navLink} mx-2`}
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }: { isActive: boolean }) => isActive ? `${style.navLink} ${style.navLinkActive} mx-2` : `${style.navLink} mx-2`}
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
