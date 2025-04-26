import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Honours Information Technology with Software Engineering",
      institution: "Eduvos",
      location: "Potchefstroom, North-West",
      period: "Feb 2023 - Dec 2023",
      highlights: [
        "Golden Key International Honour Society Member: Top 15% of the class",
        "Data Mining Project: Analyzed data to predict outcomes such as life expectancy and diabetes using Python.",
        "Job Board Web Application: Built a job board for IT graduates using React, Node.js, MongoDB, and microservice architecture. Included features for posting and applying to job listings, utilizing JavaScript, Apache Kafka, MongoDB, and Swagger."
      ]
    },
    {
      degree: "B.Sc. Information Technology",
      institution: "NWU",
      location: "Potchefstroom, North-West",
      period: "Feb 2019 - Dec 2022",
      highlights: []
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        <div className="education-cards">
          {education.map((edu, index) => (
            <motion.div 
              key={index} 
              className="education-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-header">
                <h3>{edu.degree}</h3>
                <div className="institution-info">
                  <span>{edu.institution}</span>
                  <span className="location">{edu.location}</span>
                </div>
                <div className="period">{edu.period}</div>
              </div>
              {edu.highlights.length > 0 && (
                <div className="highlights">
                  <h4>Highlights:</h4>
                  <ul>
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .education {
          background-color: var(--white);
        }

        .education-cards {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .education-card {
          background-color: var(--background-light);
          border-radius: 8px;
          padding: 25px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-5px);
        }

        .card-header {
          margin-bottom: 1rem;
        }

        .institution-info {
          display: flex;
          justify-content: space-between;
          margin: 0.5rem 0;
          color: var(--text-dark);
          font-weight: 500;
        }

        .location {
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .period {
          color: var(--primary-color);
          font-weight: 500;
        }

        .highlights h4 {
          margin-bottom: 0.5rem;
        }

        .highlights ul {
          margin-left: 20px;
        }

        .highlights li {
          margin-bottom: 0.5rem;
        }
      `}</style>
    </section>
  );
};

export default Education;