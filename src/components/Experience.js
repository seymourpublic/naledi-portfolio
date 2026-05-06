import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const experiences = [
  {
    title: 'Associate Solutions Engineer',
    company: 'Infobip',
    location: 'Bryanston, Gauteng',
    period: 'Jan 2026 – Present',
    current: true,
    bullets: [
      'Lead technical pre-sales engagements including demos, POCs, and solution design.',
      'Translate business requirements into scalable architectures spanning APIs and telecom systems.',
      'Design API-driven solutions integrating messaging and communication platforms.',
      'Build and validate technical Proof of Concepts with real integrations across distributed systems.',
      'Support sales cycles through technical validation and solution positioning.',
    ],
  },
  {
    title: 'Solutions Engineering Intern',
    company: 'Infobip',
    location: 'Bryanston, Gauteng',
    period: 'Jul 2025 – Dec 2025',
    bullets: [
      'Designed tailored solutions aligned with client operational needs.',
      'Delivered product demonstrations and technical walkthroughs to prospective clients.',
      'Built and configured platform integrations across multiple communication channels.',
      'Created documentation for solution delivery and ongoing support.',
    ],
  },
  {
    title: 'BI & Data Intern',
    company: 'EPPF',
    location: 'Bryanston, Gauteng',
    period: 'May 2024 – Jan 2025',
    bullets: [
      'Designed & implemented RESTful APIs in Node.js for data integration, retrieval, and authentication, improving reporting turnaround times.',
      'Developed interactive Power BI dashboards for senior management, improving data visibility and decision-making.',
      'Built and optimised data pipelines to streamline data processing for the company\'s data warehouse.',
    ],
  },
  {
    title: 'IT Intern',
    company: 'EPPF',
    location: 'Bryanston, Gauteng',
    period: 'Feb 2024 – May 2024',
    bullets: [
      'Resolved 95% of technical issues within the first 24 hours, significantly reducing employee downtime and improving productivity.',
      'Provided timely and effective technical support, increasing user satisfaction and decreasing recurring issues.',
    ],
  },
  {
    title: 'Student Assistant',
    company: 'NWU',
    location: 'Potchefstroom, North-West',
    period: 'Jul 2021 – Dec 2021',
    bullets: [
      'Mentored students in C++, improving understanding and application of programming fundamentals.',
      'Assisted in grading and delivering structured feedback to enhance student performance.',
    ],
  },
];

const Experience = () => (
  <section id="experience" className="experience">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="exp-header"
      >
        <span className="section-tag">Career</span>
        <h2 className="exp-heading">Experience</h2>
      </motion.div>

      <div className="exp-list">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="exp-entry"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
          >
            <div className="exp-top">
              <div className="exp-left">
                <h3 className="exp-title">
                  {exp.title}
                  {exp.current && <span className="exp-current">Current</span>}
                </h3>
                <span className="exp-company">{exp.company}</span>
              </div>
              <div className="exp-right">
                <span className="exp-period">{exp.period}</span>
                <span className="exp-location">{exp.location}</span>
              </div>
            </div>
            <ul className="exp-bullets">
              {exp.bullets.map((b, j) => (
                <li key={j}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .experience {
        background: var(--bg);
        border-bottom: 1px solid var(--border);
      }

      .exp-header {
        margin-bottom: 4rem;
      }

      .exp-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--text);
      }

      .exp-list {
        border-top: 1px solid var(--border);
      }

      .exp-entry {
        padding: 2.75rem 0;
        border-bottom: 1px solid var(--border);
      }

      .exp-top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 2rem;
        margin-bottom: 1.5rem;
        flex-wrap: wrap;
      }

      .exp-left {
        display: flex;
        flex-direction: column;
        gap: 0.3rem;
      }

      .exp-title {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--text);
        margin: 0;
        line-height: 1.3;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .exp-current {
        font-size: 0.6rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #22c55e;
        border: 1px solid rgba(34, 197, 94, 0.35);
        padding: 0.2rem 0.55rem;
        line-height: 1;
      }

      .exp-company {
        font-size: 0.72rem;
        font-weight: 600;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: var(--text-muted);
      }

      .exp-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.25rem;
        flex-shrink: 0;
      }

      .exp-period {
        font-size: 0.8rem;
        font-weight: 500;
        color: var(--text-muted);
      }

      .exp-location {
        font-size: 0.74rem;
        color: var(--text-dim);
      }

      .exp-bullets {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.65rem;
        padding-left: 0;
      }

      .exp-bullets li {
        font-size: 0.87rem;
        color: var(--text-muted);
        line-height: 1.75;
        padding-left: 1.2rem;
        position: relative;
      }

      .exp-bullets li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: var(--text-dim);
        font-size: 0.72rem;
        top: 0.1rem;
      }

      @media (max-width: 640px) {
        .exp-right {
          align-items: flex-start;
        }
      }
    `}</style>
  </section>
);

export default Experience;
