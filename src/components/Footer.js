import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope, FaCodepen } from 'react-icons/fa';

const CLOCKS = [
  { city: 'Johannesburg', tz: 'Africa/Johannesburg' },
  { city: 'London', tz: 'Europe/London' },
  { city: 'New York', tz: 'America/New_York' },
  { city: 'Sydney', tz: 'Australia/Sydney' },
];

const Footer = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const updated = {};
      CLOCKS.forEach(({ city, tz }) => {
        updated[city] = now.toLocaleTimeString('en-US', {
          timeZone: tz,
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
      });
      setTimes(updated);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = [
    { id: 'projects', label: 'Work' },
    { id: 'skills', label: 'Expertise' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-name">Naledi Sandamela</p>
            <p className="footer-role">Solutions Engineer &amp; Software Developer</p>
          </div>

          <div className="footer-clocks">
            {CLOCKS.map(({ city }) => (
              <div key={city} className="clock-item">
                <span className="clock-city">{city}</span>
                <span className="clock-time">{times[city] || '--:--'}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-mid">
          <nav className="footer-nav">
            <p className="footer-nav-label">Navigate</p>
            {navLinks.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="footer-nav-link"
                onClick={e => { e.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            ))}
          </nav>

          <div className="footer-connect">
            <p className="footer-nav-label">Connect</p>
            <a href="https://www.linkedin.com/in/naledi-s-0777a1210/" target="_blank" rel="noopener noreferrer" className="footer-nav-link">LinkedIn</a>
            <a href="https://github.com/seymourpublic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">GitHub</a>
            <a href="https://codepen.io/seymourpublic" target="_blank" rel="noopener noreferrer" className="footer-nav-link">CodePen</a>
            <a href="mailto:naledisandamela@gmail.com" className="footer-nav-link">Email</a>
          </div>

          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/naledi-s-0777a1210/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="https://github.com/seymourpublic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"><FaGithub /></a>
            <a href="https://codepen.io/seymourpublic" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="CodePen"><FaCodepen /></a>
            <a href="mailto:naledisandamela@gmail.com" className="social-icon" aria-label="Email"><FaEnvelope /></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">&copy; 2024 – {new Date().getFullYear()} Naledi Sandamela</p>
          <a href="/NalediSandamelaCV.pdf" download className="footer-cv-link">Download CV</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--bg);
          border-top: 1px solid var(--border);
          padding: 4rem 0 2.5rem;
        }

        .footer-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .footer-name {
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 0.3rem;
        }

        .footer-role {
          font-size: 0.76rem;
          color: var(--text-muted);
          margin: 0;
        }

        .footer-clocks {
          display: flex;
          gap: 2.5rem;
          flex-wrap: wrap;
        }

        .clock-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .clock-city {
          font-size: 0.62rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .clock-time {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-muted);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.04em;
        }

        .footer-mid {
          display: grid;
          grid-template-columns: auto auto 1fr;
          gap: 4rem;
          align-items: start;
          padding-bottom: 3rem;
          border-bottom: 1px solid var(--border);
          margin-bottom: 2rem;
        }

        .footer-nav,
        .footer-connect {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-nav-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 0.5rem;
        }

        .footer-nav-link {
          font-size: 0.8rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
          line-height: 1.4;
        }

        .footer-nav-link:hover {
          color: var(--text);
        }

        .footer-socials {
          display: flex;
          gap: 1.25rem;
          align-items: center;
          justify-content: flex-end;
          align-self: center;
        }

        .social-icon {
          font-size: 1rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .social-icon:hover {
          color: var(--text);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }

        .footer-copy {
          font-size: 0.72rem;
          color: var(--text-dim);
          margin: 0;
        }

        .footer-cv-link {
          font-size: 0.72rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
          letter-spacing: 0.04em;
        }

        .footer-cv-link:hover {
          color: var(--text);
        }

        @media (max-width: 768px) {
          .footer-clocks {
            gap: 1.5rem;
          }

          .footer-mid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-socials {
            grid-column: 1 / -1;
            justify-content: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
