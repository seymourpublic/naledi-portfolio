import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              I'm a Software Engineer and Data Specialist with experience in building RESTful APIs, 
              interactive dashboards, and data pipelines. My focus is on creating efficient, 
              scalable applications that solve real business problems.
            </p>
            <p>
              With a background in Information Technology and a specialization in Software Engineering, 
              I have developed a strong foundation in both frontend and backend technologies. 
              My approach combines technical expertise with analytical thinking to deliver 
              high-quality solutions.
            </p>
            <p>
              I'm passionate about continuous learning and staying updated with the latest 
              technologies in the ever-evolving world of software development.
            </p>
          </motion.div>
          <motion.div 
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Completed Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Professional Certifications</div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background-color: var(--background-light);
        }

        .about-content {
          display: flex;
          gap: 4rem;
          align-items: center;
        }

        .about-text {
          flex: 2;
        }

        .about-stats {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .stat-item {
          background-color: var(--white);
          padding: 1.5rem;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary-color);
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 1rem;
          color: var(--text-light);
        }

        @media (max-width: 768px) {
          .about-content {
            flex-direction: column;
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;