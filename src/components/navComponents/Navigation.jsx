import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import gsap from 'gsap';
import './navigation.css';

function Navigation({ navItems }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        navRef.current.querySelectorAll('li'),
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power1.out' }
      );
    }
  }, [isMenuOpen]);

  return (
    <nav ref={navRef} className={`Nav ${isMenuOpen ? 'active' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
      </div>
      <ul className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, index) => (
          <li key={index} className="nav-item">
            <Link
              to={item.path}
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
