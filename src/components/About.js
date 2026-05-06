import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const useCountUp = (target, duration, inView) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);
  return value;
};

const StatItem = ({ target, suffix, label, inView }) => {
  const count = useCountUp(target, 1400, inView);
  return (
    <div className="stat">
      <span className="stat-n">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

const About = () => {
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: '-80px' });

  const stats = [
    { target: 2, suffix: '+', label: 'Years Experience' },
    { target: 6, suffix: '+', label: 'Projects Shipped' },
    { target: 2, suffix: '', label: 'Certifications' },
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="section-tag">About</span>
            <h2 className="about-heading">
              Building with purpose.<br />Thinking in systems.
            </h2>
            <p className="about-body">
              I'm a Solutions Engineer and Software Developer currently at Infobip, where I lead
              technical pre-sales engagements, design API-driven architectures, and build Proof
              of Concepts that bridge business requirements and scalable technical solutions.
            </p>
            <p className="about-body">
              With a background in Information Technology and a specialisation in Software
              Engineering, I combine technical depth with client-facing communication — translating
              complex systems into clear, working solutions.
            </p>
            <a href="/NalediSandamelaCV.pdf" download className="btn" style={{ marginTop: '2rem' }}>
              Download CV
            </a>
          </motion.div>

          <motion.div
            ref={statsRef}
            className="about-stats"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
          >
            {stats.map((s, i) => (
              <StatItem key={i} {...s} inView={inView} />
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 6rem;
          align-items: start;
        }

        .about-heading {
          font-size: clamp(1.8rem, 3.2vw, 2.6rem);
          font-weight: 700;
          line-height: 1.2;
          color: var(--text);
          margin-bottom: 1.75rem;
        }

        .about-body {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.9;
          max-width: 480px;
        }

        .about-stats {
          border-left: 1px solid var(--border);
          padding-left: 4rem;
          display: flex;
          flex-direction: column;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 2rem 0;
          border-bottom: 1px solid var(--border);
        }

        .stat:first-child {
          padding-top: 0;
        }

        .stat:last-child {
          border-bottom: none;
        }

        .stat-n {
          font-size: 3.2rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: var(--text);
          line-height: 1;
          font-variant-numeric: tabular-nums;
        }

        .stat-label {
          font-size: 0.7rem;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .about-stats {
            border-left: none;
            padding-left: 0;
            flex-direction: row;
            flex-wrap: wrap;
            border-top: 1px solid var(--border);
          }

          .stat {
            flex: 1 1 120px;
            padding: 1.5rem;
            border-bottom: none;
            border-right: 1px solid var(--border);
          }

          .stat:first-child {
            padding-top: 1.5rem;
          }

          .stat:last-child {
            border-right: none;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
