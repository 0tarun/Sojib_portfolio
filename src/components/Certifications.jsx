import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const certifications = [
  {
    title: 'Global Voice Of Innovators Summit 2023',
    issuer: 'Public Speaking Official',
    date: 'Dec 2023',
    credentialUrl: 'https://drive.google.com/file/d/1eMESIjRBMojkQn5QaAiFnRw93lzJgdsT/view?usp=drive_link',
    color: '#FF9900',
  },
  {
    title: 'Art of Public Speaking',
    issuer: 'Requin BD',
    date: 'Nov 2023',
    credentialUrl: 'https://drive.google.com/file/d/10q5CreK6WY5MEmTJYJuvosHr4derc_MN/view?usp=drive_link',
    color: '#0668E1',
  },
  {
    title: 'Corporate Presentation Skills',
    issuer: 'Grameenphone Limited',
    date: 'April 2026',
    credentialUrl: 'https://drive.google.com/file/d/1lpDGOZYOP5e_n-BCDN57QB-DwaxXjTIA/view?usp=drive_link',
    color: '#FF9900',
  },
  {
    title: 'Smart CV',
    issuer: 'Grameenphone Limited',
    date: 'April 2026',
    credentialUrl: 'https://drive.google.com/file/d/1DBfFwPE3uOoxVvzhqceOYOmGGNoztxEA/view?usp=drive_link',
    color: '#4285F4',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="cert-section">
      <div className="cert-bg" />
      <div ref={ref} className="cert-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Credentials</span>
          </h2>
          <p className="section-desc">
            Industry-recognized certifications that validate my expertise and commitment to learning.
          </p>
        </motion.div>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cert-card"
            >
              <div className="cert-icon-wrap" style={{ background: `${cert.color}15` }}>
                <FiAward style={{ color: cert.color, fontSize: '20px' }} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-link"
                  >
                    <FiExternalLink /> View
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cert-section {
          padding: 100px 0;
          position: relative;
        }
        .cert-bg {
          position: absolute;
          inset: 0;
          background: rgba(22, 22, 31, 0.4);
          pointer-events: none;
        }
        .cert-container {
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
        .cert-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .cert-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 24px;
          border-radius: 16px;
          background: #111118;
          border: 1px solid #1e1e2e;
          transition: all 0.3s;
        }
        .cert-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .cert-icon-wrap {
          width: 44px;
          height: 44px;
          min-width: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cert-content { flex: 1; min-width: 0; }
        .cert-title {
          font-size: 15px;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 4px;
          line-height: 1.4;
        }
        .cert-issuer {
          font-size: 13px;
          color: #64748b;
          margin-bottom: 12px;
        }
        .cert-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .cert-date {
          font-size: 12px;
          color: #475569;
          font-weight: 500;
        }
        .cert-link {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          color: #8b5cf6;
          font-weight: 500;
          transition: color 0.3s;
        }
        .cert-link:hover { color: #a78bfa; }

        /* ─── Mobile Polish ─── */
        @media (max-width: 768px) {
          .cert-section { padding: 72px 0; }
          .cert-container { padding: 0 20px; }
          .section-header { margin-bottom: 36px; }
          .section-desc { font-size: 14px; }
          .cert-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .cert-card {
            padding: 18px;
            border-radius: 14px;
            gap: 14px;
          }
          .cert-icon-wrap {
            width: 40px;
            height: 40px;
            min-width: 40px;
            border-radius: 10px;
          }
          .cert-title { font-size: 14px; }
          .cert-issuer { font-size: 12px; margin-bottom: 10px; }
        }
      `}</style>
    </section>
  );
}
