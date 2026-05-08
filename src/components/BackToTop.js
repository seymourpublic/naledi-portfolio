import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      setVisible(pct > 0.35);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
              <path d="M7 12V2M2 7l5-5 5 5" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <style jsx>{`
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 40px;
          height: 40px;
          background: var(--surface);
          border: 1px solid var(--border-strong);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9990;
          transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
        }

        .back-to-top:hover {
          color: var(--text);
          border-color: var(--text);
          background: var(--surface-hover);
        }
      `}</style>
    </>
  );
};

export default BackToTop;
