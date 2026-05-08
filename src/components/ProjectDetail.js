import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const ease = [0.22, 1, 0.36, 1];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div style={{ padding: '10rem 2rem', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Project not found.</p>
        <Link to="/" className="btn">← Back to portfolio</Link>
      </div>
    );
  }

  return (
    <main className="pd-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="pd-nav">
            <Link to="/#projects" className="pd-back">← All Work</Link>
            <span className="pd-count">{String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          </div>

          <div className="pd-header">
            <span className="section-tag">{project.category}</span>
            <h1 className="pd-title">{project.title}</h1>
            <p className="pd-desc">{project.description}</p>
          </div>

          <div className="pd-layout">
            <div className="pd-main">
              {project.challenge && (
                <motion.div
                  className="pd-block"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.15 }}
                >
                  <h2 className="pd-block-heading">Challenge</h2>
                  <p className="pd-block-body">{project.challenge}</p>
                </motion.div>
              )}

              {project.outcome && (
                <motion.div
                  className="pd-block"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.25 }}
                >
                  <h2 className="pd-block-heading">Outcome</h2>
                  <p className="pd-block-body">{project.outcome}</p>
                </motion.div>
              )}

              <motion.div
                className="pd-block"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.35 }}
              >
                <h2 className="pd-block-heading">Key Features</h2>
                <ul className="pd-features">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <motion.aside
              className="pd-sidebar"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 0.2 }}
            >
              <div className="pd-meta-block">
                <span className="pd-meta-label">Category</span>
                <span className="pd-meta-value">{project.category}</span>
              </div>

              <div className="pd-meta-block">
                <span className="pd-meta-label">Tech Stack</span>
                <div className="pd-tags">
                  {project.technologies.map((t, i) => (
                    <span key={i} className="pd-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="pd-links">
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn">
                    {project.apiDocs ? 'API Docs ↗' : 'Live Demo ↗'}
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                    View Code →
                  </a>
                )}
              </div>
            </motion.aside>
          </div>

          <div className="pd-pagination">
            {prev ? (
              <Link to={`/work/${prev.slug}`} className="pd-pag-link pd-pag-prev">
                <span className="pd-pag-dir">← Previous</span>
                <span className="pd-pag-name">{prev.title}</span>
              </Link>
            ) : <div />}
            {next ? (
              <Link to={`/work/${next.slug}`} className="pd-pag-link pd-pag-next">
                <span className="pd-pag-dir">Next →</span>
                <span className="pd-pag-name">{next.title}</span>
              </Link>
            ) : <div />}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .pd-page {
          min-height: 100vh;
          background: var(--bg);
          padding-top: 8rem;
          padding-bottom: 8rem;
        }

        .pd-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4rem;
        }

        .pd-back {
          font-size: 0.78rem;
          font-weight: 500;
          color: var(--text-muted);
          letter-spacing: 0.04em;
          transition: color 0.2s ease;
        }

        .pd-back:hover {
          color: var(--text);
        }

        .pd-count {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: var(--text-dim);
          font-variant-numeric: tabular-nums;
        }

        .pd-header {
          border-bottom: 1px solid var(--border);
          padding-bottom: 3rem;
          margin-bottom: 4rem;
          max-width: 820px;
        }

        .pd-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1.05;
          color: var(--text);
          margin-bottom: 1.25rem;
        }

        .pd-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.85;
          max-width: 600px;
          margin: 0;
        }

        .pd-layout {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 6rem;
          align-items: start;
          margin-bottom: 6rem;
        }

        .pd-block {
          border-top: 1px solid var(--border);
          padding-top: 2.5rem;
          margin-bottom: 2.5rem;
        }

        .pd-block-heading {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 1rem;
        }

        .pd-block-body {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.9;
          margin: 0;
        }

        .pd-features {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-left: 0;
          margin: 0;
        }

        .pd-features li {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.75;
          padding-left: 1.2rem;
          position: relative;
        }

        .pd-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--text-dim);
          font-size: 0.72rem;
          top: 0.12rem;
        }

        .pd-sidebar {
          position: sticky;
          top: 7rem;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .pd-meta-block {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--border);
        }

        .pd-meta-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .pd-meta-value {
          font-size: 0.88rem;
          color: var(--text-muted);
        }

        .pd-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .pd-tag {
          font-size: 0.68rem;
          font-weight: 500;
          color: var(--text-muted);
          background: var(--surface);
          border: 1px solid var(--border);
          padding: 0.25rem 0.65rem;
          letter-spacing: 0.02em;
        }

        .pd-links {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .pd-pagination {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          border-top: 1px solid var(--border);
        }

        .pd-pag-link {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 2rem 0;
          transition: opacity 0.2s ease;
        }

        .pd-pag-link:hover {
          opacity: 0.65;
        }

        .pd-pag-next {
          text-align: right;
          border-left: 1px solid var(--border);
          padding-left: 2rem;
        }

        .pd-pag-prev {
          padding-right: 2rem;
        }

        .pd-pag-dir {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .pd-pag-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: var(--text);
        }

        @media (max-width: 900px) {
          .pd-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .pd-sidebar {
            position: static;
          }

          .pd-pagination {
            grid-template-columns: 1fr;
          }

          .pd-pag-next {
            text-align: left;
            border-left: none;
            border-top: 1px solid var(--border);
            padding-left: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default ProjectDetail;
