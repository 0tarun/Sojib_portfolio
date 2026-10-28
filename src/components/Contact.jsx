import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';

const contactInfo = [
  { icon: <FiMail />, label: 'Email', value: 'sksaha0167@gmail.com', href: 'mailto:[sksaha0167@gmail.com]' },
  { icon: <FiPhone />, label: 'Phone', value: '+880 1677074199', href: 'tel:+8801677074199' },
  { icon: <FiMapPin />, label: 'Location', value: 'Mirpur-10, Dhaka, Bangladesh', href: null },
];

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/sajibkingo', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/sajib-saha-9633b8264/', label: 'LinkedIn' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/sajib.saha.823338', label: 'Facebook' },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for your message! I'll get back to you soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-bg" />
      <div ref={ref} className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's work <span className="gradient-text">together</span>
          </h2>
          <p className="section-desc">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="contact-info"
          >
            {contactInfo.map((item) => (
              <div key={item.label} className="contact-info-card">
                <span className="contact-info-icon">{item.icon}</span>
                <div>
                  <p className="contact-info-label">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="contact-info-value">{item.value}</a>
                  ) : (
                    <p className="contact-info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="contact-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="contact-social-link"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            onSubmit={handleSubmit}
            className="contact-form"
          >
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                className="form-input form-textarea"
              />
            </div>
            <button type="submit" className="form-submit">
              <FiSend /> Send Message
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 100px 0;
          position: relative;
        }
        .contact-bg {
          position: absolute;
          inset: 0;
          background: rgba(22, 22, 31, 0.4);
          pointer-events: none;
        }
        .contact-container {
          position: relative;
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .section-header { text-align: center; margin-bottom: 56px; }
        .section-label {
          color: #8b5cf6;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .section-title {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(1.6rem, 4vw, 2.8rem);
          margin-top: 12px;
          color: #f1f5f9;
          line-height: 1.2;
        }
        .gradient-text {
          background: linear-gradient(to right, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .section-desc {
          color: #94a3b8;
          margin-top: 14px;
          max-width: 480px;
          margin-left: auto;
          margin-right: auto;
          font-size: 15px;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 2fr 3fr;
          gap: 32px;
          align-items: start;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px;
          border-radius: 14px;
          background: #111118;
          border: 1px solid #1e1e2e;
          transition: border-color 0.3s;
        }
        .contact-info-card:hover { border-color: rgba(139,92,246,0.2); }
        .contact-info-icon {
          width: 42px;
          height: 42px;
          min-width: 42px;
          border-radius: 10px;
          background: rgba(139,92,246,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8b5cf6;
          font-size: 16px;
        }
        .contact-info-label {
          color: #64748b;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 2px;
        }
        .contact-info-value {
          color: #e2e8f0;
          font-weight: 500;
          font-size: 14px;
        }
        a.contact-info-value:hover { color: #8b5cf6; }
        .contact-socials {
          display: flex;
          gap: 10px;
          padding-top: 6px;
        }
        .contact-social-link {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          border: 1px solid #1e1e2e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-size: 17px;
          transition: all 0.3s;
        }
        .contact-social-link:hover {
          color: #8b5cf6;
          border-color: rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.06);
        }

        /* Form */
        .contact-form {
          padding: 28px;
          border-radius: 18px;
          background: #111118;
          border: 1px solid #1e1e2e;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .form-group { display: flex; flex-direction: column; }
        .form-label {
          font-size: 13px;
          color: #94a3b8;
          margin-bottom: 8px;
          font-weight: 500;
        }
        .form-input {
          width: 100%;
          padding: 13px 16px;
          border-radius: 12px;
          background: #16161f;
          border: 1px solid #1e1e2e;
          color: #f1f5f9;
          font-size: 15px;
          outline: none;
          transition: border-color 0.3s, box-shadow 0.3s;
          box-sizing: border-box;
          font-family: inherit;
        }
        .form-input::placeholder { color: #475569; }
        .form-input:focus {
          border-color: rgba(139,92,246,0.5);
          box-shadow: 0 0 0 3px rgba(139,92,246,0.08);
        }
        .form-textarea { resize: none; }
        .form-submit {
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 12px;
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(139,92,246,0.2);
          margin-top: 4px;
        }
        .form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(139,92,246,0.35);
        }

        /* ─── Mobile Polish ─── */
        @media (max-width: 768px) {
          .contact-section { padding: 72px 0; }
          .contact-container { padding: 0 20px; }
          .section-header { margin-bottom: 36px; }
          .section-desc { font-size: 14px; }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .contact-info { gap: 10px; }
          .contact-info-card { padding: 14px; border-radius: 12px; }
          .contact-info-icon {
            width: 38px;
            height: 38px;
            min-width: 38px;
            border-radius: 8px;
            font-size: 15px;
          }
          .contact-info-value { font-size: 13px; }
          .contact-socials { gap: 8px; }
          .contact-social-link { width: 40px; height: 40px; border-radius: 8px; }
          .contact-form {
            padding: 20px;
            border-radius: 14px;
            gap: 16px;
          }
          .form-input {
            padding: 12px 14px;
            font-size: 14px;
            border-radius: 10px;
          }
          .form-submit {
            padding: 14px;
            font-size: 14px;
            border-radius: 10px;
          }
        }
      `}</style>
    </section>
  );
}
