import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log(formData);
    // For demo purposes, just setting submitted state
    setIsSubmitted(true);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset submit state after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <div className="contact-container">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3>Get In Touch</h3>
            <p>
              I'm currently available for freelance work and full-time positions. 
              Feel free to reach out if you have any questions or want to work together.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>062 529 6925</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>naledisandamela@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Vereeniging, Gauteng</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {isSubmitted ? (
              <div className="success-message">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background-color: #f5f7fa;
        }

        .contact-container {
          display: flex;
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .contact-info,
        .contact-form {
          flex: 1;
        }

        .contact-info h3 {
          margin-bottom: 1rem;
        }

        .contact-details {
          margin-top: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .contact-item .icon {
          width: 40px;
          height: 40px;
          margin-right: 1rem;
          color: var(--primary-color);
        }

        .contact-item h4 {
          margin-bottom: 0.3rem;
        }

        .contact-item p {
          margin: 0;
          color: var(--text-light);
        }

        form {
          background-color: var(--white);
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid #e5e7eb;
          border-radius: 5px;
          font-family: 'Poppins', sans-serif;
          font-size: 1rem;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: var(--primary-color);
          box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
        }

        .success-message {
          background-color: #ecfdf5;
          border: 1px solid #10b981;
          padding: 2rem;
          border-radius: 8px;
          text-align: center;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .success-message .icon {
          width: 60px;
          height: 60px;
          color: #10b981;
          margin-bottom: 1rem;
        }

        .success-message h4 {
          margin-bottom: 0.5rem;
          color: #10b981;
        }

        @media (max-width: 768px) {
          .contact-container {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;