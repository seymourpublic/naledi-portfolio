import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const education = [
  {
    degree: 'B.Sc. Honours IT with Software Engineering',
    institution: 'Eduvos',
    location: 'Potchefstroom, North-West',
    period: 'Feb 2023 – Dec 2023',
    highlights: [
      'Golden Key International Honour Society — Top 15% of the class.',
      'Data Mining Project: Predicted life expectancy and diabetes outcomes using Python.',
      'Job Board Web App: Built for IT graduates using React, Node.js, MongoDB, Apache Kafka, and Swagger in a microservice architecture.',
    ],
  },
  {
    degree: 'B.Sc. Information Technology',
    institution: 'NWU',
    location: 'Potchefstroom, North-West',
    period: 'Feb 2019 – Dec 2022',
    highlights: [],
  },
];

const Education = () => (
  <section id="education" className="education">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="edu-header"
      >
        <span className="section-tag">Academic</span>
        <h2 className="edu-heading">Education</h2>
      </motion.div>

      <div className="edu-list">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="edu-entry"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.12 }}
          >
            <div className="edu-top">
              <div className="edu-left">
                <h3 className="edu-degree">{edu.degree}</h3>
                <span className="edu-institution">{edu.institution}</span>
              </div>
              <div className="edu-right">
                <span className="edu-period">{edu.period}</span>
                <span className="edu-location">{edu.location}</span>
              </div>
            </div>
            {edu.highlights.length > 0 && (
              <ul className="edu-highlights">
                {edu.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .education {
        background: var(--bg-2);
        border-bottom: 1px solid var(--border);
      }

      .edu-header {
        margin-bottom: 4rem;
      }

      .edu-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--text);
      }

      .edu-list {
        border-top: 1px solid var(--border);
      }

      .edu-entry {
        padding: 2.75rem 0;
        border-bottom: 1px solid var(--border);
      }

      .edu-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }

      .edu-left {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .edu-degree {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text);
        margin: 0;
        line-height: 1.3;
      }

      .edu-institution {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--text-muted);
      }

      .edu-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
        flex-shrink: 0;
      }

      .edu-period {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text-muted);
      }

      .edu-location {
        font-size: 0.74rem;
        color: var(--text-dim);
      }

      .edu-highlights {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        padding-left: 0;
      }

      .edu-highlights li {
        font-size: 0.87rem;
        color: var(--text-muted);
        line-height: 1.75;
        padding-left: 1.2rem;
        position: relative;
      }

      .edu-highlights li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--text-dim);
        font-size: 0.72rem;
        top: 0.1rem;
      }

      @media (max-width: 640px) {
        .edu-right {
          align-items: flex-start;
        }
      }
    `}</style>
  </section>
);

export default Education;
