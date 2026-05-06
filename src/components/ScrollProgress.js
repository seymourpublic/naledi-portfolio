import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{ width: `${pct}%` }}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <style jsx>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          height: 1.5px;
          background: var(--text);
          z-index: 9997;
          transition: width 0.08s linear;
          pointer-events: none;
          opacity: 0.55;
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;
