import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const education = [
  {
    degree: 'B.Sc. Honours IT with Software Engineering',
    institution: 'Eduvos',
    location: 'Potchefstroom, North-West',
    period: 'Feb 2023 – Dec 2023',
    year: '2023',
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
    year: '2022',
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

      <div className="edu-timeline">
        {education.map((edu, i) => (
          <motion.div
            key={i}
            className="edu-node"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.12 }}
          >
            <div className={`edu-dot ${i === 0 ? 'edu-dot--active' : ''}`} />

            <div className="edu-content">
              <div className="edu-meta-row">
                <span className="edu-year">{edu.period}</span>
                <span className="edu-location">{edu.location}</span>
              </div>
              <h3 className="edu-degree">{edu.degree}</h3>
              <span className="edu-institution">{edu.institution}</span>

              {edu.highlights.length > 0 && (
                <ul className="edu-highlights">
                  {edu.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
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

      .edu-timeline {
        position: relative;
        padding-left: 2.5rem;
      }

      .edu-timeline::before {
        content: '';
        position: absolute;
        left: 6px;
        top: 10px;
        bottom: 10px;
        width: 1px;
        background: var(--border);
      }

      .edu-node {
        position: relative;
        padding-bottom: 3.5rem;
      }

      .edu-node:last-child {
        padding-bottom: 0;
      }

      .edu-dot {
        position: absolute;
        left: -2.5rem;
        top: 8px;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        border: 1px solid var(--border-strong);
        background: var(--bg-2);
        transform: translateX(0.5px);
      }

      .edu-dot--active {
        border-color: var(--accent);
        background: rgba(34, 197, 94, 0.12);
        box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.08);
      }

      .edu-content {
        padding-top: 2px;
      }

      .edu-meta-row {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 1rem;
        margin-bottom: 0.6rem;
        flex-wrap: wrap;
      }

      .edu-year {
        font-size: 0.72rem;
        font-weight: 500;
        color: var(--text-muted);
        letter-spacing: 0.04em;
      }

      .edu-location {
        font-size: 0.68rem;
        color: var(--text-dim);
      }

      .edu-degree {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text);
        margin: 0 0 0.3rem;
        line-height: 1.3;
      }

      .edu-institution {
        display: block;
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--text-muted);
        margin-bottom: 1.25rem;
      }

      .edu-highlights {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
        padding-left: 0;
        margin: 0;
      }

      .edu-highlights li {
        font-size: 0.86rem;
        color: var(--text-muted);
        line-height: 1.75;
        padding-left: 1.1rem;
        position: relative;
      }

      .edu-highlights li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--accent);
        font-size: 0.7rem;
        top: 0.12rem;
      }

      @media (max-width: 640px) {
        .edu-meta-row {
          flex-direction: column;
          gap: 0.2rem;
        }
      }
    `}</style>
  </section>
);

export default Education;
