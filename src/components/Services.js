import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const SERVICES = [
  {
    num: '01',
    title: 'Solutions Design',
    description: 'End-to-end technical pre-sales and solution architecture. I translate business requirements into API-driven systems, conduct demos, build POCs, and lead engagements from scoping to delivery.',
    tags: ['POC Development', 'Architecture Design', 'Technical Demos', 'Client Consulting'],
  },
  {
    num: '02',
    title: 'API Architecture',
    description: 'Design and development of RESTful and GraphQL APIs built for scale. From authentication systems to messaging platform integrations, I build backends that power real products.',
    tags: ['RESTful APIs', 'GraphQL', 'Node.js', 'JWT Auth', 'Platform Integrations'],
  },
  {
    num: '03',
    title: 'Data Engineering',
    description: 'Data pipelines, Power BI dashboards, and warehouse optimisation. I turn raw data into actionable intelligence for senior stakeholders and operational teams.',
    tags: ['Power BI', 'Data Pipelines', 'PostgreSQL', 'Python', 'Visualisation'],
  },
];

const Services = () => (
  <section id="services" className="services">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
        className="services-header"
      >
        <span className="section-tag">What I Offer</span>
        <h2 className="services-heading">Services</h2>
      </motion.div>

      <div className="services-grid">
        {SERVICES.map((s, i) => (
          <motion.div
            key={i}
            className="service-card"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease, delay: i * 0.1 }}
          >
            <span className="service-num">{s.num}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.description}</p>
            <div className="service-tags">
              {s.tags.map((t, j) => (
                <span key={j} className="service-tag">{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <style jsx>{`
      .services {
        background: var(--bg-2);
        border-bottom: 1px solid var(--border);
      }

      .services-header {
        margin-bottom: 4rem;
      }

      .services-heading {
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 700;
        letter-spacing: -0.02em;
        color: var(--text);
      }

      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-top: 1px solid var(--border);
        border-left: 1px solid var(--border);
      }

      .service-card {
        border-right: 1px solid var(--border);
        border-bottom: 1px solid var(--border);
        padding: 2.5rem 2rem;
        display: flex;
        flex-direction: column;
        gap: 0;
        transition: background 0.25s ease;
      }

      .service-card:hover {
        background: var(--surface);
      }

      .service-num {
        font-size: 0.62rem;
        font-weight: 600;
        letter-spacing: 0.18em;
        color: var(--accent);
        margin-bottom: 1.5rem;
        display: block;
      }

      .service-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text);
        line-height: 1.2;
        margin-bottom: 1rem;
      }

      .service-desc {
        font-size: 0.86rem;
        color: var(--text-muted);
        line-height: 1.85;
        margin-bottom: 1.75rem;
        flex: 1;
      }

      .service-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
      }

      .service-tag {
        font-size: 0.67rem;
        font-weight: 500;
        letter-spacing: 0.04em;
        color: var(--text-muted);
        background: var(--bg);
        border: 1px solid var(--border);
        padding: 0.25rem 0.65rem;
      }

      @media (max-width: 900px) {
        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </section>
);

export default Services;
