import React from 'react';
import { FaLinkedinIn, FaGithub, FaTwitter, FaEnvelope, FaCodepen } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Naledi Sandamela</h3>
            <p>Software Engineer & Data Specialist</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://www.linkedin.com/in/naledi-s-0777a1210/" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/seymourpublic" className="social-icon">
              <FaGithub />
            </a>
            <a href="https://codepen.io/seymourpublic" className="social-icon">
              <FaCodepen />
            </a>
            <a href="mailto:naledisandamela@gmail.com" className="social-icon">
              <FaEnvelope />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Naledi Sandamela. All rights reserved.</p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: var(--background-dark);
          color: var(--white);
          padding: 3rem 0 1.5rem;
        }

        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-logo h3 {
          color: var(--white);
          margin-bottom: 0.5rem;
        }

        .footer-logo p {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .footer-links ul {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: var(--text-light);
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--primary-color);
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--white);
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          background-color: var(--primary-color);
          transform: translateY(-3px);
        }

        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          font-size: 0.9rem;
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .footer-social {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;