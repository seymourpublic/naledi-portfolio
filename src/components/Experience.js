import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: "BI & Data Intern",
      company: "EPPF",
      location: "Bryanston, Gauteng",
      period: "May 2024 – January 2025",
      responsibilities: [
        "Designed & implemented RESTful APIs in Node.js for data integration, retrieval, and authentication, improving reporting turnaround times.",
        "Developed interactive dashboards for senior management using Power BI, improving data visibility and decision-making.",
        "Built and optimized data pipelines to streamline data processing for the company's data warehouse."
      ]
    },
    {
      title: "IT Intern",
      company: "EPPF",
      location: "Bryanston, Gauteng",
      period: "Feb 2024 – May 2024",
      responsibilities: [
        "Resolved 95% of technical issues within the first 24 hours, significantly reducing employee downtime and improving overall productivity.",
        "Provided timely and effective technical support, resulting in increased user satisfaction and a decrease in recurring issues."
      ]
    },
    {
      title: "Student Assistant",
      company: "NWU",
      location: "Potchefstroom, North-West",
      period: "July 2021 – Dec 2021",
      responsibilities: [
        "Provided mentorship & support to students, improving their understanding and application of C++.",
        "Assisted in grading and delivering feedback to enhance student performance."
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <div className="company-info">
                  <span>{exp.company}</span>
                  <span className="location">{exp.location}</span>
                </div>
                <div className="period">{exp.period}</div>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .experience {
          background-color: #f5f7fa;
        }

        .timeline {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          width: 2px;
          background-color: var(--primary-color);
          top: 0;
          bottom: 0;
          left: 50px;
          margin-left: -1px;
        }

        .timeline-item {
          position: relative;
          margin-bottom: 50px;
          padding-left: 70px;
        }

        .timeline-dot {
          position: absolute;
          width: 20px;
          height: 20px;
          left: 40px;
          background-color: var(--primary-color);
          border-radius: 50%;
          border: 4px solid var(--white);
          z-index: 1;
          box-shadow: 0 0 0 4px rgba(37, 99, 235, 0.2);
        }

        .timeline-content {
          padding: 25px;
          background-color: var(--white);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .company-info {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.5rem;
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
          margin-bottom: 1rem;
        }

        .responsibilities {
          margin-left: 20px;
        }

        .responsibilities li {
          margin-bottom: 0.5rem;
        }

        @media (max-width: 768px) {
          .timeline::before {
            left: 30px;
          }

          .timeline-item {
            padding-left: 50px;
          }

          .timeline-dot {
            left: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Experience;