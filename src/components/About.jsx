import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCode, FiLayers, FiZap } from 'react-icons/fi';

const stats = [
  { number: '3+', label: 'Years Experience' },
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '10+', label: 'Technologies' },
];

const highlights = [
  { icon: <FiCode />, title: 'UI/UX Design' },
  { icon: <FiLayers />, title: 'SQA & Testing' },
  { icon: <FiZap />, title: 'Frontend Development' },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="about-section">
      <div ref={ref} className="about-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Passionate about creating{' '}
            <span className="gradient-text">digital experiences</span>
          </h2>
        </motion.div>

        <div className="about-grid">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="about-text">
              I am a versatile Tech Professional operating at the intersection of UI/UX Design, Frontend Development and Software Quality Assurance (SQA). I specialize in taking digital products from initial visual concept to responsive code, while ensuring exceptional performance and zero-defect reliability.
              <p className="about-text">
                <br /> With a strong foundation in user-centered design, modern frontend frameworks and comprehensive software testing methodologies (manual & automated), I bridge the gap between design, execution and quality control.
              </p>
            </p>
            <div className="about-highlights">
              {highlights.map((item) => (
                <div key={item.title} className="highlight-chip">
                  <span className="highlight-icon">{item.icon}</span>
                  <span className="highlight-label">{item.title}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="stats-grid"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .about-section { padding: 100px 0; }
        .about-container {
          max-width: 1152px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .section-header {
          text-align: center;
          margin-bottom: 56px;
        }
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
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .about-text {
          color: #94a3b8;
          font-size: 16px;
          line-height: 1.75;
          margin-bottom: 18px;
        }
        .about-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 8px;
        }
        .highlight-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: 10px;
          background: #111118;
          border: 1px solid #1e1e2e;
        }
        .highlight-icon { color: #8b5cf6; display: flex; font-size: 15px; }
        .highlight-label {
          font-size: 13px;
          color: #e2e8f0;
          font-weight: 500;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .stat-card {
          padding: 28px 20px;
          border-radius: 16px;
          background: #111118;
          border: 1px solid #1e1e2e;
          text-align: center;
          transition: all 0.3s;
        }
        .stat-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-2px);
        }
        .stat-number {
          font-size: clamp(1.5rem, 3vw, 2.2rem);
          font-weight: 700;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 4px;
        }
        .stat-label {
          color: #94a3b8;
          font-size: 12px;
          font-weight: 500;
        }

        /* ─── Mobile Polish ─── */
        @media (max-width: 768px) {
          .about-section { padding: 72px 0; }
          .about-container { padding: 0 20px; }
          .section-header { margin-bottom: 40px; }
          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-text { font-size: 15px; margin-bottom: 14px; }
          .stats-grid { gap: 12px; }
          .stat-card { padding: 22px 16px; border-radius: 14px; }
          .stat-label { font-size: 11px; }
        }
        @media (max-width: 380px) {
          .about-highlights { gap: 8px; }
          .highlight-chip { padding: 8px 12px; }
          .highlight-label { font-size: 12px; }
        }
      `}</style>
    </section>
  );
}
