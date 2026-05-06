import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const EXPERTISE = [
  {
    num: '01',
    title: 'Web Development',
    tagline: 'Building Scalable Full-Stack Applications That Perform',
    skills: [
      { name: 'Python', pro: true },
      { name: 'Java', pro: false },
      { name: 'C#', pro: true },
      { name: 'JavaScript', pro: true },
      { name: 'TypeScript', pro: false },
      { name: 'React', pro: true },
      { name: 'Flutter', pro: false },
    ],
  },
  {
    num: '02',
    title: 'API Architecture',
    tagline: 'Designing RESTful APIs That Power Real Products',
    skills: [
      { name: 'Node.js', pro: true },
      { name: 'Express.js', pro: true },
      { name: 'GraphQL', pro: true },
      { name: 'JWT Authentication', pro: true },
      { name: 'Postman', pro: true },
      { name: 'Swagger', pro: false },
    ],
  },
  {
    num: '03',
    title: 'Data Engineering',
    tagline: 'Building Pipelines That Transform Raw Data Into Intelligence',
    skills: [
      { name: 'SQL', pro: true },
      { name: 'PostgreSQL', pro: true },
      { name: 'MongoDB', pro: true },
      { name: 'Firebase', pro: true },
      { name: 'SQLite', pro: false },
      { name: 'Power BI', pro: true },
    ],
  },
  {
    num: '04',
    title: 'Cloud & DevOps',
    tagline: 'Deploying and Scaling Applications in the Cloud',
    skills: [
      { name: 'AWS S3', pro: true },
      { name: 'Docker', pro: false },
      { name: 'Azure', pro: false },
      { name: 'WebSockets', pro: true },
      { name: '.NET Core', pro: true },
    ],
  },
  {
    num: '05',
    title: 'Data Analysis',
    tagline: 'Extracting Actionable Insight From Complex Datasets',
    skills: [
      { name: 'Python', pro: true },
      { name: 'Data Visualisation', pro: true },
      { name: 'Web Scraping', pro: false },
      { name: 'Statistical Analysis', pro: true },
    ],
  },
  {
    num: '06',
    title: 'Development Tools',
    tagline: 'Working With Industry-Standard Tools and Workflows',
    skills: [
      { name: 'Git', pro: true },
      { name: 'GitHub', pro: true },
      { name: 'Jira', pro: true },
      { name: 'NetBeans', pro: false },
      { name: 'VS Code', pro: true },
    ],
  },
];

const CERTS = [
  {
    name: 'AWS Certified Cloud Practitioner',
    date: 'Apr 2025',
    badgeUrl: 'aws-certified-cloud-practitioner.png',
    credlyUrl: 'https://www.credly.com/badges/592e7b34-a83d-4c3b-b64e-0ae3aaaba734/public_url',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    date: 'July 2022',
    badgeUrl: 'google-data-analytics-professional-certificate.2.png',
    credlyUrl: 'https://www.credly.com/badges/6cc695ca-a96a-4c2c-b819-c01ada593884/public_url',
  },
];

const Skills = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="skills-header"
        >
          <span className="section-tag">Expertise</span>
          <h2 className="skills-heading">What I Do</h2>
        </motion.div>

        <div className="expertise-list">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={i}
              className="expertise-row"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease, delay: i * 0.06 }}
            >
              <button
                className="expertise-trigger"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span className="expertise-num">{item.num}</span>
                <div className="expertise-main">
                  <span className="expertise-title">{item.title}</span>
                  <span className="expertise-tagline">{item.tagline}</span>
                </div>
                <span className={`expertise-icon ${openIndex === i ? 'open' : ''}`}>+</span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    className="expertise-detail"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease }}
                  >
                    <div className="expertise-skills">
                      {item.skills.map((s, j) => (
                        <span key={j} className={`skill-pill${s.pro ? ' skill-pill--pro' : ''}`}>
                          {s.pro && <span className="skill-pro-dot" aria-hidden="true" />}
                          {s.name}
                        </span>
                      ))}
                    </div>
                    {item.skills.some(s => s.pro) && (
                      <p className="skill-legend">
                        <span className="skill-pro-dot" aria-hidden="true" /> Used professionally
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="certifications"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <span className="section-tag">Certifications</span>
          <div className="cert-list">
            {CERTS.map((cert, i) => (
              <a
                key={i}
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-row"
              >
                <img src={cert.badgeUrl} alt={cert.name} className="cert-badge" />
                <div className="cert-info">
                  <span className="cert-name">{cert.name}</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <span className="cert-arrow">↗</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .skills {
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
        }

        .skills-header {
          margin-bottom: 4rem;
        }

        .skills-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          color: var(--text);
        }

        /* Expertise accordion */
        .expertise-list {
          border-top: 1px solid var(--border);
          margin-bottom: 6rem;
        }

        .expertise-row {
          border-bottom: 1px solid var(--border);
        }

        .expertise-trigger {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 1.75rem 0;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          transition: opacity 0.2s ease;
        }

        .expertise-trigger:hover {
          opacity: 0.75;
        }

        .expertise-num {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: var(--text-dim);
          min-width: 28px;
        }

        .expertise-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .expertise-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
        }

        .expertise-tagline {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .expertise-icon {
          font-size: 1.4rem;
          font-weight: 300;
          color: var(--text-muted);
          transition: transform 0.3s ease, color 0.2s ease;
          flex-shrink: 0;
          line-height: 1;
        }

        .expertise-icon.open {
          transform: rotate(45deg);
          color: var(--text);
        }

        .expertise-detail {
          overflow: hidden;
        }

        .expertise-skills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          padding: 0 0 1.75rem 3.5rem;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.76rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.35rem 0.9rem;
          letter-spacing: 0.02em;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .skill-pill:hover {
          border-color: var(--border-strong);
          color: var(--text);
        }

        .skill-pill--pro {
          border-color: rgba(34, 197, 94, 0.2);
        }

        .skill-pro-dot {
          display: inline-block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
        }

        .skill-legend {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          font-size: 0.66rem;
          color: var(--text-dim);
          letter-spacing: 0.1em;
          padding: 0 0 1.75rem 3.5rem;
          margin: 0;
          margin-top: 0.5rem;
        }

        /* Certifications */
        .certifications {
          border-top: 1px solid var(--border);
          padding-top: 4rem;
        }

        .certifications .section-tag {
          margin-bottom: 2rem;
        }

        .cert-list {
          display: flex;
          flex-direction: column;
        }

        .cert-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 1.5rem 0;
          border-bottom: 1px solid var(--border);
          transition: opacity 0.2s ease;
          color: var(--text);
        }

        .cert-row:first-child {
          border-top: 1px solid var(--border);
        }

        .cert-row:hover {
          opacity: 0.65;
        }

        .cert-badge {
          width: 56px;
          height: 56px;
          object-fit: contain;
          flex-shrink: 0;
          filter: grayscale(30%);
        }

        .cert-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .cert-name {
          font-size: 0.92rem;
          font-weight: 500;
          color: var(--text);
        }

        .cert-date {
          font-size: 0.74rem;
          color: var(--text-muted);
        }

        .cert-arrow {
          font-size: 1.1rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .expertise-skills {
            padding-left: 0;
          }
          .expertise-trigger {
            gap: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
