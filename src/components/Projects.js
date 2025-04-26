import React from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "Beeper API Microservices-Based Messaging Platform",
      description: "A secure and scalable messaging platform API that delivers seamless user experiences.",
      technologies: ["Node.js", "Express.js", "MongoDB"],
      features: [
        "Developed a secure and scalable API using Node.js, Express.js, and MongoDB.",
        "Implemented user authentication, profile management, and notifications.",
        "Delivered seamless user experiences across mobile and web platforms."
      ]
    },
    {
      title: "Latch – Social Media Platform for CS and IT Graduates",
      description: "A specialized social media platform designed for CS and IT graduates to connect and share resources.",
      technologies: ["Node.js", "Express.js", "WebSockets", "JWT", "AWS S3", "Swagger"],
      features: [
        "Designed and implemented a microservices architecture with Node.js & Express.js.",
        "Integrated WebSockets for real-time messaging & notifications.",
        "Implemented JWT authentication for secure user access.",
        "Utilized AWS S3 for cloud storage and Swagger for API documentation."
      ]
    },
    {
      title: "Web Scraper / Python and Data Analysis",
      description: "A Python-based web scraper for collecting and analyzing product pricing data.",
      technologies: ["Python", "Data Analysis", "Web Scraping"],
      features: [
        "Developed a Python-based web scraper to collect and store product prices from multiple websites.",
        "Analyzed & visualized data to track pricing trends and fluctuations."
      ]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          background-color: var(--white);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;