import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';

const ease = [0.22, 1, 0.36, 1];

const CARD_GRADIENTS = [
  'linear-gradient(135deg, #0F0E14 0%, #13101E 100%)',
  'linear-gradient(135deg, #0E0F14 0%, #10131C 100%)',
  'linear-gradient(135deg, #0E1410 0%, #10181A 100%)',
  'linear-gradient(135deg, #14100E 0%, #1C1410 100%)',
  'linear-gradient(135deg, #0E1314 0%, #101A1C 100%)',
  'linear-gradient(135deg, #14120E 0%, #1C1610 100%)',
  'linear-gradient(135deg, #130E14 0%, #180E1C 100%)',
  'linear-gradient(135deg, #0E140E 0%, #10180F 100%)',
];

const FILTERS = ['All', 'Frontend', 'Backend', 'Data'];

const ProjectCard = ({ project, index, globalIndex }) => {
  const [demoOpen, setDemoOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const microlinkUrl = project.demoUrl && !project.apiDocs
    ? `https://api.microlink.io/?url=${encodeURIComponent(project.demoUrl)}&screenshot=true&meta=false&embed=screenshot.url`
    : null;

  return (
    <motion.div
      className="proj-card"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease, delay: index * 0.08 }}
      layout
    >
      <div className="proj-preview" style={{ background: CARD_GRADIENTS[globalIndex % CARD_GRADIENTS.length] }}>
        {microlinkUrl && !imgError && (
          <img
            src={microlinkUrl}
            alt={`${project.title} preview`}
            className="proj-screenshot"
            onError={() => setImgError(true)}
            loading="lazy"
          />
        )}
        <span className="proj-num-bg">{String(globalIndex + 1).padStart(2, '0')}</span>
        <span className="proj-category-tag">{project.category}</span>
        <Link to={`/work/${project.slug}`} className="proj-preview-hover">
          View Case Study →
        </Link>
      </div>

      <div className="proj-body">
        <Link to={`/work/${project.slug}`} className="proj-title-link">
          <h3 className="proj-title">{project.title}</h3>
        </Link>
        <p className="proj-desc">{project.description}</p>
        <div className="proj-tags">
          {project.technologies.map((t, i) => (
            <span key={i} className="proj-tag">{t}</span>
          ))}
        </div>
        <ul className="proj-features">
          {project.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      <div className="proj-footer">
        {project.demoUrl && (
          <button className="proj-btn" onClick={() => setDemoOpen(!demoOpen)}>
            {demoOpen ? 'Hide Demo' : (project.apiDocs ? 'View API' : 'Live Demo')}
          </button>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="proj-link">
            View Code →
          </a>
        )}
      </div>

      <AnimatePresence>
        {demoOpen && project.demoUrl && (
          <motion.div
            className="proj-demo"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease }}
          >
            <div className="proj-demo-bar">
              <span>{project.apiDocs ? 'API Docs' : 'Live Demo'}</span>
              <button onClick={() => setDemoOpen(false)}>✕</button>
            </div>
            <iframe
              src={project.demoUrl}
              title={project.title}
              className="proj-iframe"
              sandbox="allow-scripts allow-same-origin"
              loading="lazy"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .proj-card {
          background: var(--surface);
          border: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          transition: border-color 0.25s ease, background 0.25s ease, transform 0.25s ease;
        }

        .proj-card:hover {
          border-color: var(--border-strong);
          background: var(--surface-hover);
          transform: translateY(-4px);
        }

        .proj-preview {
          position: relative;
          height: 160px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          padding: 1.25rem;
          border-bottom: 1px solid var(--border);
        }

        .proj-screenshot {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.55);
          transition: filter 0.3s ease;
        }

        .proj-card:hover .proj-screenshot {
          filter: brightness(0.4);
        }

        .proj-preview-hover {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text);
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          transition: opacity 0.25s ease;
          z-index: 3;
          text-decoration: none;
        }

        .proj-card:hover .proj-preview-hover {
          opacity: 1;
        }

        .proj-num-bg {
          position: absolute;
          right: 1rem;
          bottom: -0.75rem;
          font-size: 6.5rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.04);
          line-height: 1;
          letter-spacing: -0.04em;
          user-select: none;
          pointer-events: none;
          z-index: 1;
        }

        .proj-category-tag {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          background: rgba(255,255,255,0.06);
          border: 1px solid var(--border);
          padding: 0.25rem 0.7rem;
          position: relative;
          z-index: 2;
        }

        .proj-body {
          padding: 1.75rem;
          flex: 1;
        }

        .proj-title-link {
          text-decoration: none;
          display: block;
          margin-bottom: 0.75rem;
        }

        .proj-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text);
          line-height: 1.3;
          transition: color 0.2s ease;
          margin: 0;
        }

        .proj-title-link:hover .proj-title {
          color: var(--accent);
        }

        .proj-desc {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.75;
          margin-bottom: 1rem;
        }

        .proj-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .proj-tag {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--text-muted);
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          padding: 0.22rem 0.6rem;
        }

        .proj-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }

        .proj-features li {
          font-size: 0.8rem;
          color: var(--text-muted);
          line-height: 1.6;
          padding-left: 1rem;
          position: relative;
        }

        .proj-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--text-dim);
          font-size: 0.7rem;
        }

        .proj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.75rem;
          border-top: 1px solid var(--border);
          gap: 1rem;
          margin-top: auto;
        }

        .proj-btn {
          font-family: 'Inter', sans-serif;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          background: var(--text);
          color: var(--bg);
          border: 1px solid var(--text);
          padding: 0.5rem 1.1rem;
          cursor: pointer;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .proj-btn:hover {
          background: transparent;
          color: var(--text);
        }

        .proj-link {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        .proj-link:hover {
          color: var(--text);
        }

        .proj-demo {
          overflow: hidden;
          border-top: 1px solid var(--border);
        }

        .proj-demo-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.65rem 1.25rem;
          background: var(--bg-2);
          border-bottom: 1px solid var(--border);
        }

        .proj-demo-bar span {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-muted);
        }

        .proj-demo-bar button {
          background: none;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
          font-size: 0.85rem;
          transition: color 0.2s ease;
        }

        .proj-demo-bar button:hover {
          color: var(--text);
        }

        .proj-iframe {
          width: 100%;
          height: 400px;
          border: none;
          display: block;
        }
      `}</style>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
          className="projects-header"
        >
          <div className="projects-title-block">
            <h2 className="projects-heading">Featured Work</h2>
            <p className="projects-subtitle">Selected work shipping products, building APIs, and moving data</p>
          </div>

          <div className="filter-tabs">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-tab ${activeFilter === f ? 'filter-tab--active' : ''}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                globalIndex={projects.indexOf(project)}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style jsx>{`
        .projects {
          background: var(--bg);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .projects-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-bottom: 4rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .projects-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .projects-subtitle {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin: 0;
          max-width: 440px;
          line-height: 1.7;
        }

        .filter-tabs {
          display: flex;
          gap: 0.25rem;
          flex-shrink: 0;
        }

        .filter-tab {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 0.55rem 1.25rem;
          background: transparent;
          color: var(--text-muted);
          border: 1px solid var(--border);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-tab:hover {
          color: var(--text);
          border-color: var(--border-strong);
        }

        .filter-tab--active {
          background: var(--text);
          color: var(--bg);
          border-color: var(--text);
        }

        .filter-tab--active:hover {
          background: var(--text);
          color: var(--bg);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 768px) {
          .projects-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
