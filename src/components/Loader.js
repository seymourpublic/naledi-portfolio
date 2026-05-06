import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Loader = ({ onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 2400);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease }}
    >
      <motion.span
        className="loader-mono"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.2 }}
      >
        NS
      </motion.span>

      <div className="loader-track">
        <motion.div
          className="loader-fill"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.7, ease, delay: 0.4 }}
        />
      </div>

      <motion.p
        className="loader-label"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Naledi Sandamela
      </motion.p>

      <style jsx>{`
        .loader {
          position: fixed;
          inset: 0;
          z-index: 10000;
          background: var(--bg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .loader-mono {
          font-family: 'Inter', sans-serif;
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          color: var(--text);
          line-height: 1;
        }

        .loader-track {
          width: 120px;
          height: 1px;
          background: var(--border);
          overflow: hidden;
        }

        .loader-fill {
          height: 100%;
          background: var(--text);
          transform-origin: left;
        }

        .loader-label {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin: 0;
        }
      `}</style>
    </motion.div>
  );
};

export default Loader;
