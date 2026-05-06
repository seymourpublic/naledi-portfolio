import React from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const FadeUp = ({ children, delay = 0, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.75, ease, delay }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" />

      <div className="hero-layout">
        <div className="hero-left">
          <FadeUp delay={0.0}>
            <div className="hero-avail">
              <span className="hero-avail-dot" aria-hidden="true" />
              Available for work
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="hero-eyebrow">Solutions Engineer &amp; Software Developer</p>
          </FadeUp>

          <div className="hero-name-block">
            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.2 }}
            >
              Naledi
            </motion.h1>
            <motion.h1
              className="hero-name hero-name--outline"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.34 }}
            >
              Sandamela
            </motion.h1>
          </div>

          <FadeUp delay={0.5}>
            <p className="hero-location">Based in Johannesburg, Gauteng · South Africa</p>
          </FadeUp>

          <FadeUp delay={0.6}>
            <p className="hero-desc">
              Specializing in Solutions Engineering, API Architecture &amp; Software Development
              <br />
              2+ Years Experience · Currently at Infobip
            </p>
          </FadeUp>

          <FadeUp delay={0.72}>
            <div className="hero-actions">
              <button className="btn" onClick={() => scrollTo('projects')}>View Work</button>
              <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>Get in Touch</button>
              <a href="/NalediSandamelaCV.pdf" download className="btn btn-ghost">CV ↓</a>
            </div>
          </FadeUp>
        </div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.6, ease, delay: 0.05 }}
        >
          <div className="hero-img-container">
            <img src="/avatar.png" alt="Naledi Sandamela" className="hero-img" />
            <div className="hero-img-fade-left" />
            <div className="hero-img-fade-bottom" />
          </div>
        </motion.div>
      </div>

      <motion.button
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={() => scrollTo('projects')}
        aria-label="Scroll down"
      >
        <div className="hero-scroll-bar" />
        <span className="hero-scroll-label">Scroll</span>
      </motion.button>

      <style jsx>{`
        .hero {
          position: relative;
          min-height: 100vh;
          background: var(--bg);
          overflow: hidden;
        }

        .hero-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
          background-size: 72px 72px;
          pointer-events: none;
        }

        .hero-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: 1fr 420px;
          min-height: 100vh;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0 3rem 6rem;
          padding-top: 140px;
          max-width: 820px;
        }

        .hero-avail {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--text-muted);
          border: 1px solid var(--border);
          padding: 0.35rem 0.9rem;
          background: rgba(255, 255, 255, 0.02);
          margin-bottom: 1.5rem;
        }

        .hero-avail-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          flex-shrink: 0;
          animation: avail-pulse 2.2s ease-in-out infinite;
        }

        @keyframes avail-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); opacity: 1; }
          50% { box-shadow: 0 0 0 5px rgba(34, 197, 94, 0); opacity: 0.85; }
        }

        .hero-eyebrow {
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 1.5rem;
        }

        .hero-name-block {
          margin-bottom: 2rem;
        }

        .hero-name {
          display: block;
          font-size: clamp(4.5rem, 10vw, 10rem);
          font-weight: 700;
          line-height: 0.88;
          letter-spacing: -0.03em;
          color: var(--text);
        }

        .hero-name--outline {
          color: transparent;
          -webkit-text-stroke: 1.5px var(--text);
        }

        .hero-location {
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.65rem;
        }

        .hero-desc {
          font-size: 0.88rem;
          font-weight: 300;
          color: var(--text-muted);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        .hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        /* Right image panel */
        .hero-right {
          position: relative;
        }

        .hero-img-container {
          position: absolute;
          inset: 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
          filter: grayscale(30%) brightness(0.75);
        }

        .hero-img-fade-left {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 55%;
          background: linear-gradient(to right, var(--bg), transparent);
        }

        .hero-img-fade-bottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 45%;
          background: linear-gradient(to top, var(--bg), transparent);
        }

        /* Scroll hint */
        .hero-scroll {
          position: absolute;
          bottom: 2.5rem;
          left: 3rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 2;
        }

        .hero-scroll-bar {
          width: 1px;
          height: 46px;
          background: linear-gradient(to bottom, var(--text-dim), transparent);
          animation: scrollDrop 2.8s ease-in-out infinite;
        }

        .hero-scroll-label {
          font-size: 0.57rem;
          font-weight: 600;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        @keyframes scrollDrop {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(6px); opacity: 1; }
        }

        @media (max-width: 1000px) {
          .hero-layout {
            grid-template-columns: 1fr;
          }

          .hero-right {
            display: none;
          }

          .hero-left {
            padding: 140px 1.5rem 5rem;
            max-width: 100%;
          }

          .hero-scroll {
            left: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
