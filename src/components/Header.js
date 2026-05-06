import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const allMenuLinks = [{ id: 'home', label: 'Home' }, ...navLinks];

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container">
          <div className="header-inner">
            <a href="#home" className="header-logo" onClick={e => { e.preventDefault(); scrollTo('home'); }}>
              Naledi Sandamela
            </a>

            <nav className="header-nav">
              {navLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="header-nav-link"
                  onClick={e => { e.preventDefault(); scrollTo(id); }}>
                  {label}
                </a>
              ))}
            </nav>

            <div className="header-right">
              <a href="#contact" className="header-cta"
                onClick={e => { e.preventDefault(); scrollTo('contact'); }}>
                Connect With Me
              </a>
              <button
                className="theme-toggle"
                onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
              <button className="menu-toggle" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="slide-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.55, ease }}
            >
              <button className="slide-menu-close" onClick={() => setMenuOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              <nav className="slide-menu-nav">
                {allMenuLinks.map(({ id, label }, i) => (
                  <motion.a
                    key={id}
                    href={`#${id}`}
                    className="slide-menu-link"
                    onClick={e => { e.preventDefault(); scrollTo(id); }}
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.12 + i * 0.07, duration: 0.5, ease }}
                  >
                    <span className="slide-menu-num">0{i + 1}</span>
                    {label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="slide-menu-foot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <p>naledisandamela@gmail.com</p>
                <p>Johannesburg, Gauteng</p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          padding: 1.5rem 0;
          transition: background 0.4s ease, border-color 0.4s ease, padding 0.3s ease;
          border-bottom: 1px solid transparent;
        }

        .header--scrolled {
          background: rgba(9, 9, 9, 0.9);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom-color: var(--border);
          padding: 1rem 0;
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .header-logo {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text);
        }

        .header-nav {
          display: flex;
          gap: 2.25rem;
        }

        .header-nav-link {
          font-size: 0.78rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .header-nav-link:hover {
          color: var(--text);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 1.75rem;
        }

        .header-cta {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .header-cta:hover {
          color: var(--text);
        }

        .theme-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          background: none;
          border: 1px solid var(--border);
          color: var(--text-muted);
          cursor: pointer;
          padding: 6px;
          transition: color 0.2s ease, border-color 0.2s ease;
          width: 32px;
          height: 32px;
        }

        .theme-toggle:hover {
          color: var(--text);
          border-color: var(--border-strong);
        }

        .menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .menu-toggle span {
          display: block;
          width: 22px;
          height: 1px;
          background: var(--text);
        }

        /* Slide menu */
        .menu-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(6px);
          -webkit-backdrop-filter: blur(6px);
          z-index: 200;
        }

        .slide-menu {
          position: fixed;
          top: 0;
          right: 0;
          width: min(400px, 100vw);
          height: 100vh;
          background: #0D0D0D;
          border-left: 1px solid var(--border);
          z-index: 300;
          display: flex;
          flex-direction: column;
          padding: 5rem 3.5rem 3rem;
        }

        .slide-menu-close {
          position: absolute;
          top: 1.5rem;
          right: 1.75rem;
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          padding: 8px;
          transition: color 0.2s ease;
        }

        .slide-menu-close:hover {
          color: var(--text);
        }

        .slide-menu-nav {
          display: flex;
          flex-direction: column;
          gap: 0;
          flex: 1;
          justify-content: center;
        }

        .slide-menu-link {
          display: flex;
          align-items: baseline;
          gap: 1rem;
          font-size: 2.1rem;
          font-weight: 700;
          color: var(--text-muted);
          line-height: 1.55;
          transition: color 0.2s ease;
        }

        .slide-menu-link:hover {
          color: var(--text);
        }

        .slide-menu-num {
          font-size: 0.62rem;
          font-weight: 500;
          color: var(--text-dim);
          letter-spacing: 0.1em;
          margin-top: 2px;
        }

        .slide-menu-foot {
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .slide-menu-foot p {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 900px) {
          .header-nav { display: none; }
        }

        @media (max-width: 600px) {
          .header-cta { display: none; }
        }
      `}</style>
    </>
  );
};

export default Header;
