import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Python", "Java", "C#", "JavaScript", "TypeScript"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Node.js", "Express.js", "React", "Flutter", ".NET Core"]
    },
    {
      category: "Databases",
      skills: ["SQL", "PostgreSQL", "MongoDB", "Firebase", "SQLite"]
    },
    {
      category: "API Development",
      skills: ["RESTful APIs", "Postman", "Swagger", "JWT Authentication"]
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS S3", "Docker", "Azure", "Web Sockets"]
    },
    {
      category: "Tools & Version Control",
      skills: ["Git", "GitHub", "Jira", "NetBeans", "Power BI"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Cloud Practitioner",
      date: "Apr 2025"
    },
    {
      name: "Google Data Analytics Professional Certificate",
      date: "July 2022"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Certifications
        </motion.h2>
        
        <div className="skills-container">
          <motion.div 
            className="skills-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {skillCategories.map((category, index) => (
              <motion.div 
                key={index} 
                className="skill-category"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{category.category}</h3>
                <div className="skill-tags">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="certifications"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3>Certifications</h3>
            <div className="cert-cards">
              {certifications.map((cert, index) => (
                <div key={index} className="cert-card">
                  <div className="cert-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="cert-content">
                    <h4>{cert.name}</h4>
                    <p>{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .skills {
          background-color: #f5f7fa;
        }

        .skills-container {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
        }

        .skill-category {
          background-color: var(--white);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .skill-category h3 {
          margin-bottom: 1rem;
          color: var(--primary-color);
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .skill-tag {
          background-color: rgba(37, 99, 235, 0.1);
          color: var(--primary-color);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .certifications h3 {
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .cert-cards {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .cert-card {
          display: flex;
          align-items: center;
          background-color: var(--white);
          border-radius: 8px;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 400px;
        }

        .cert-icon {
          width: 40px;
          height: 40px;
          margin-right: 1rem;
          color: var(--primary-color);
        }

        .cert-content h4 {
          margin-bottom: 0.3rem;
        }

        .cert-content p {
          color: var(--text-light);
          margin: 0;
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;