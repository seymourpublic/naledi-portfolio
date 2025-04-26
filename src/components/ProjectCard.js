import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <ul className="features">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <style jsx>{`
        .project-card {
          background-color: var(--white);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-5px);
        }

        .project-description {
          margin: 1rem 0;
          color: var(--text-light);
        }

        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .tech-tag {
          background-color: rgba(16, 185, 129, 0.1);
          color: var(--secondary-color);
          padding: 0.3rem 0.7rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .features {
          margin-left: 1.5rem;
        }

        .features li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </motion.div>
  );
};

export default ProjectCard;