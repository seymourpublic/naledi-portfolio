import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">Naledi Sandamela</Link>
          <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">
              <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
              <li><a href="#experience" onClick={() => scrollToSection('experience')}>Experience</a></li>
              <li><a href="#education" onClick={() => scrollToSection('education')}>Education</a></li>
              <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
              <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
              <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </nav>
          <div className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          background-color: transparent;
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .header.scrolled {
          background-color: var(--white);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-color);
        }

        .navbar {
          display: flex;
        }

        .nav-menu {
          display: flex;
          list-style: none;
        }

        .nav-menu li {
          margin-left: 2rem;
        }

        .nav-menu a {
          color: var(--text-dark);
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-menu a:hover {
          color: var(--primary-color);
        }

        .menu-icon {
          display: none;
          font-size: 1.5rem;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-icon {
            display: block;
          }

          .navbar {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background-color: var(--white);
            flex-direction: column;
            align-items: center;
            padding: 2rem 0;
            clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
            transition: all 0.4s ease;
          }

          .navbar.active {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
            box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
          }

          .nav-menu {
            flex-direction: column;
            align-items: center;
          }

          .nav-menu li {
            margin: 1rem 0;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;