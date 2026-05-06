const ITEMS = [
  'Web Development',
  'API Architecture',
  'Data Engineering',
  'Cloud Infrastructure',
  'Python',
  'Node.js',
  'React',
  'PostgreSQL',
  'Power BI',
  'Docker',
  'AWS',
  'GraphQL',
];

const Marquee = () => {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep" aria-hidden="true">·</span>
          </span>
        ))}
      </div>

      <style jsx>{`
        .marquee-wrap {
          overflow: hidden;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 0.9rem 0;
          background: var(--bg);
          user-select: none;
        }

        .marquee-wrap:hover .marquee-track {
          animation-play-state: paused;
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marqueeScroll 28s linear infinite;
          width: max-content;
        }

        .marquee-item {
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-muted);
          padding: 0 1.75rem;
          display: inline-flex;
          align-items: center;
          gap: 1.75rem;
        }

        .marquee-sep {
          color: var(--text-dim);
        }

        @keyframes marqueeScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
