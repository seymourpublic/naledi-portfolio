import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Projects = () => {
  // State to track which project demo is currently being shown
  const [activeDemo, setActiveDemo] = useState(null);

  const projects = [
    {
      title: "VersaBlog – Frontend",
      description: "The public-facing frontend of the VersaBlog platform, offering a dynamic reading experience with content filtering and search capabilities.",
      technologies: ["Next.js", "Apollo Client", "React", "GraphQL", "Tailwind CSS"],
      features: [
        "Built dynamic blog frontend with real-time content updates via GraphQL",
        "Implemented content filtering and robust search functionality",
        "Created responsive design for optimal reading experience across devices",
        "Developed SEO-optimized page structure with dynamic metadata",
        "Integrated with backend GraphQL API for efficient data fetching"
      ],
      demoUrl: "https://versablogdemo.netlify.app/",
      githubUrl: "https://github.com/seymourpublic/versa-blog-frontend"
    },
    {
      title: "VersaBlog – Admin Dashboard",
      description: "A powerful admin interface for the VersaBlog platform, allowing content creators to manage all aspects of their blog.",
      technologies: ["React", "Apollo Client", "GraphQL", "React Hook Form", "Draft.js"],
      features: [
        "Developed comprehensive dashboard for content management",
        "Created rich text editor for blog post creation and editing",
        "Built category and tag management system",
        "Implemented media library for image uploads and management",
        "Added post status control (draft, published, archived)"
      ],
      demoUrl: "https://versa-blog-admin.netlify.app/",
      githubUrl: "https://github.com/seymourpublic/my-blog-admin"
    },
    {
      title: "VersaBlog – Backend API",
      description: "The GraphQL API powering the VersaBlog platform, handling data management, authentication, and content delivery.",
      technologies: ["Node.js", "Express.js", "GraphQL", "MongoDB", "Mongoose", "JWT"],
      features: [
        "Designed a modular GraphQL API with Apollo Server",
        "Implemented MongoDB database integration with Mongoose",
        "Created secure authentication system with JWT",
        "Developed efficient resolvers for optimal query performance",
        "Built scalable architecture with separation of concerns"
      ],
      demoUrl: "https://versablog-backend.onrender.com/graphql/v1",
      githubUrl: "https://github.com/seymourpublic/VersaBlog-backend",
      apiDocs: true
    },
    {
      title: "Budgeting App",
      description: "A modern, responsive budgeting application to help users manage finances, track income and expenses, and set savings goals.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Chart.js", "react-i18next"],
      features: [
        "Built income management system with detailed breakdown of multiple sources",
        "Implemented expense tracking with category visualization using Pie and Line Charts",
        "Developed savings goals feature with progress tracking and milestone notifications",
        "Added data export functionality (CSV/PDF) for income and expense data",
        "Created multi-language support for global accessibility"
      ],
      demoUrl: "https://cashcanvas.netlify.app/",
      githubUrl: "https://github.com/seymourpublic/budgeting-app"
    },
    {
      title: "FireDrop API",
      description: "A lightweight and scalable file upload API built for seamless file management and storage.",
      technologies: ["Node.js", "Express.js", "Firebase Storage", "REST API"],
      features: [
        "Developed file upload system supporting multiple file types with 50MB size limit",
        "Implemented automatic thumbnail generation for image files",
        "Created secure file deletion functionality",
        "Built with CORS support for frontend integration",
        "Integrated with Firebase Storage for reliable cloud storage"
      ],
      demoUrl: "https://random-data-api.netlify.app/",
      githubUrl: "https://github.com/seymourpublic/firedrop-api",
      apiDocs: true
    },
    {
      title: "Random Data Generator API",
      description: "An API providing fake data for testing and development purposes with support for various data types.",
      technologies: ["Node.js", "Express.js", "REST API"],
      features: [
        "Built endpoints for generating random user profiles with avatars",
        "Implemented random financial transaction generation",
        "Created custom data generation for emails, addresses, company names, and more",
        "Developed support for bulk data generation",
        "Designed for easy integration with testing environments"
      ],
      demoUrl: "https://random-data-api-demo.onrender.com",
      githubUrl: "https://github.com/seymourpublic/random-data-api",
      apiDocs: true
    },
    
    {
      title: "Web Scraper / Python and Data Analysis",
      description: "A Python-based web scraper for collecting and analyzing product pricing data.",
      technologies: ["Python", "Data Analysis", "Web Scraping"],
      features: [
        "Developed a Python-based web scraper to collect and store product prices from multiple websites",
        "Analyzed & visualized data to track pricing trends and fluctuations"
      ],
      githubUrl: "https://github.com/seymourpublic/scraper"
    }
  ];

  // Function to toggle demo view
  const toggleDemo = (index) => {
    if (activeDemo === index) {
      setActiveDemo(null);
    } else {
      setActiveDemo(index);
    }
  };

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
        
        {/* VersaBlog Project Group */}
        <motion.div
          className="project-group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card-container"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
              
              {/* Demo controls */}
              <div className="project-actions">
                {project.demoUrl && (
                  <button 
                    className="demo-btn"
                    onClick={() => toggleDemo(index)}
                  >
                    {activeDemo === index ? "Hide Demo" : "Show Demo"}
                  </button>
                )}
                
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    View Code
                  </a>
                )}
              </div>
              
              {/* Demo iframe display */}
              {activeDemo === index && project.demoUrl && (
                <motion.div 
                  className="demo-container"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="demo-header">
                    <h4>{project.apiDocs ? "API Documentation" : "Live Demo"}</h4>
                    <button 
                      className="close-demo-btn"
                      onClick={() => setActiveDemo(null)}
                    >
                      ×
                    </button>
                  </div>
                  <iframe 
                    src={project.demoUrl}
                    title={`${project.title} demo`}
                    className="demo-iframe"
                    sandbox="allow-scripts allow-same-origin"
                    loading="lazy"
                  ></iframe>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .projects {
          background-color: var(--white);
          padding: 4rem 0;
        }

        .section-title {
          margin-bottom: 1.5rem;
        }

        .project-group {
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #eaeaea;
        }

        .group-title {
          font-size: 1.5rem;
          color: var(--primary-color, #3498db);
          margin-bottom: 0.5rem;
        }

        .group-description {
          color: var(--text, #555);
          max-width: 800px;
          line-height: 1.6;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .project-card-container {
          display: flex;
          flex-direction: column;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          background-color: #fff;
          transition: transform 0.3s ease;
        }

        .project-card-container:hover {
          transform: translateY(-5px);
        }

        .project-actions {
          display: flex;
          padding: 1rem;
          gap: 1rem;
          border-top: 1px solid #eaeaea;
        }

        .demo-btn, .github-btn {
          padding: 0.5rem 1rem;
          border-radius: 4px;
          font-weight: 500;
          cursor: pointer;
          text-align: center;
          transition: all 0.3s ease;
          flex: 1;
        }

        .demo-btn {
          background-color: var(--primary-color, #3498db);
          color: white;
          border: none;
        }

        .demo-btn:hover {
          background-color: var(--primary-dark, #2980b9);
        }

        .github-btn {
          background-color: #f8f9fa;
          color: #333;
          border: 1px solid #ddd;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .github-btn:hover {
          background-color: #eaeaea;
        }

        .demo-container {
          width: 100%;
          border-top: 1px solid #eaeaea;
          overflow: hidden;
        }

        .demo-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.75rem 1rem;
          background-color: #f8f9fa;
        }

        .demo-header h4 {
          margin: 0;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .close-demo-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #555;
          padding: 0;
          line-height: 1;
        }

        .demo-iframe {
          width: 100%;
          height: 400px;
          border: none;
          background-color: #fff;
        }

        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .demo-iframe {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;