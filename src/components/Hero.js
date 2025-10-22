import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Hi, I'm <span className="highlight">Naledi Sandamela</span></h1>
            <h3>Aspiring Software Engineer & Data Specialist</h3>
            <p>I build web applications, design APIs, and analyze data to solve real-world problems.</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn">Contact Me</a>
              <a href="#projects" className="btn btn-outline">View Projects</a>
              <a href="NalediSandamelaCV.docx" download className="btn">Download CV</a>
            </div>
          </motion.div>
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* You can add a profile image here */}
            
            {/* Placeholder for profile image */}
            <div className="profile-placeholder">
               <img src="/avatar.png" alt="Profile" className="profile-image" />
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
          }
          
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 80px;
          background: linear-gradient(170deg, var(--primary-color) 0%, rgba(37, 99, 235, 0.1) 100%);
        }

        .hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .hero-text {
          flex: 1;
        }

        .highlight {
          color: var(--primary-color);
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          margin-top: 2rem;
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .profile-placeholder {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: var(--primary-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 4rem;
          font-weight: bold;
          color: var(--white);
        }

        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse;
            text-align: center;
          }

          .hero-buttons {
            justify-content: center;
          }

          .profile-placeholder {
            width: 200px;
            height: 200px;
            font-size: 3rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
