import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('naledisandamela@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('https://formspree.io/f/xpwdwdkr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div
            className="contact-left"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease }}
          >
            <span className="section-tag">Contact</span>
            <h2 className="contact-heading">New Business<br />Inquiries</h2>
            <p className="contact-body">
              Currently available for freelance work and full-time positions.
              Reach out if you have a project in mind or want to work together.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <span className="detail-label">Email</span>
                <a
                  href="mailto:naledisandamela@gmail.com"
                  className={`detail-value detail-email${copied ? ' detail-email--copied' : ''}`}
                  onClick={copyEmail}
                  title="Click to copy"
                >
                  {copied ? 'Copied!' : 'naledisandamela@gmail.com'}
                </a>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Location</span>
                <span className="detail-value">Johannesburg, Gauteng</span>
              </div>
              <div className="contact-detail">
                <span className="detail-label">Availability</span>
                <span className="detail-value">Open to opportunities</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-right"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease, delay: 0.12 }}
          >
            {isSubmitted ? (
              <div className="success-box">
                <span className="success-check">✓</span>
                <h4>Message sent.</h4>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" value={formData.name}
                      onChange={handleChange} required placeholder="Your name" />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formData.email}
                      onChange={handleChange} required placeholder="your@email.com" />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="subject">Subject</label>
                  <input id="subject" name="subject" type="text" value={formData.subject}
                    onChange={handleChange} required placeholder="What's this about?" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows="6" value={formData.message}
                    onChange={handleChange} required placeholder="Tell me about your project..." />
                </div>
                <button type="submit" className="btn" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: var(--bg-2);
          border-top: 1px solid var(--border);
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 6rem;
          align-items: start;
        }

        .contact-heading {
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 700;
          color: var(--text);
          margin-bottom: 1.25rem;
          line-height: 1.15;
          letter-spacing: -0.02em;
        }

        .contact-body {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.85;
          margin-bottom: 2.5rem;
          max-width: 340px;
        }

        .contact-details {
          border-top: 1px solid var(--border);
        }

        .contact-detail {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          padding: 1.25rem 0;
          border-bottom: 1px solid var(--border);
        }

        .detail-label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .detail-value {
          font-size: 0.88rem;
          color: var(--text-muted);
          transition: color 0.2s ease;
        }

        a.detail-value:hover {
          color: var(--text);
        }

        .detail-email {
          cursor: copy;
          transition: color 0.2s ease;
        }

        .detail-email--copied {
          color: #22c55e;
        }

        /* Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          margin-bottom: 2rem;
        }

        label {
          font-size: 0.62rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
          margin-bottom: 0.75rem;
        }

        input, textarea {
          background: transparent;
          border: none;
          border-bottom: 1px solid var(--border);
          outline: none;
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: var(--text);
          padding: 0.5rem 0 0.75rem;
          resize: none;
          line-height: 1.6;
          transition: border-color 0.2s ease;
        }

        input::placeholder, textarea::placeholder {
          color: var(--text-dim);
        }

        input:focus, textarea:focus {
          border-bottom-color: var(--border-strong);
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Success */
        .success-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 2rem;
          border: 1px solid var(--border);
          min-height: 300px;
          background: var(--surface);
        }

        .success-check {
          font-size: 2rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .success-box h4 {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text);
          margin-bottom: 0.5rem;
        }

        .success-box p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
        }

        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 4rem;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
