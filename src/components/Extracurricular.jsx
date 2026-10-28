import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiUsers, FiMic, FiBookOpen, FiHeart } from 'react-icons/fi';

const activities = [
  {
    icon: <FiUsers />,
    title: 'Associate Event Management',
    org: 'UIU APP FORUM',
    description:
      'Coordinated logistics, venue management, and execution for campus-wide tech workshops and hackathons. Collaborated with cross-functional teams and managed real-time workflows to ensure smooth event operations.',
    period: '2022 – 2024',
    color: '#4285F4',
  },
  {
    icon: <FiMic />,
    title: 'Head of Media and Publication Department',
    org: 'Shuhash',
    description:
      'Led media strategies, visual branding, and content direction across organizational social platforms. Oversee the production of high-quality visual assets and event publications aligned with brand standards.',
    period: '2021 – 2024',
    color: '#06b6d4',
  },
  {
    icon: <FiBookOpen />,
    title: 'Joint Secretary (JS)',
    org: 'Science Club of The Laboratorians',
    description:
      'Assisted in executive club administration, membership coordination, and annual event planning. Managed volunteer teams and project showcases for large-scale inter-school science exhibitions.',
    period: '2017 – 2019',
    color: '#8b5cf6',
  },
  {
    icon: <FiHeart />,
    title: 'Campus Ambassador ',
    org: 'Requin BD ',
    description:
      'Promoted brand awareness and student engagement on campus through targeted outreach and events. Acted as the primary liaison between the organization and the university student community.',
    period: '2023 – 2024',
    color: '#f472b6',
  },
];

export default function Extracurricular() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="extracurricular" className="extra-section">
      <div ref={ref} className="extra-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Extracurricular</span>
          <h2 className="section-title">
            Beyond <span className="gradient-text">the Code</span>
          </h2>
          <p className="section-desc">
            Activities and communities I'm passionate about outside of professional work.
          </p>
        </motion.div>

        <div className="extra-grid">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="extra-card"
            >
              <div className="extra-card-top">
                <div
                  className="extra-icon-wrap"
                  style={{ background: `${activity.color}12` }}
                >
                  <span style={{ color: activity.color, fontSize: '18px', display: 'flex' }}>
                    {activity.icon}
                  </span>
                </div>
                <span className="extra-period">{activity.period}</span>
              </div>
              <h3 className="extra-title">{activity.title}</h3>
              <p className="extra-org">{activity.org}</p>
              <p className="extra-desc">{activity.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .extra-section { padding: 100px 0; }
        .extra-container {
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
        .extra-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .extra-card {
          padding: 24px;
          border-radius: 16px;
          background: #111118;
          border: 1px solid #1e1e2e;
          transition: all 0.3s;
        }
        .extra-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .extra-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .extra-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .extra-period {
          font-size: 12px;
          color: #475569;
          font-weight: 500;
          padding: 4px 10px;
          border-radius: 9999px;
          background: rgba(30,30,46,0.6);
        }
        .extra-title {
          font-size: 16px;
          font-weight: 600;
          color: #f1f5f9;
          margin-bottom: 4px;
          font-family: 'Space Grotesk', system-ui, sans-serif;
        }
        .extra-org {
          font-size: 13px;
          color: #8b5cf6;
          font-weight: 500;
          margin-bottom: 10px;
        }
        .extra-desc {
          font-size: 14px;
          color: #94a3b8;
          line-height: 1.65;
        }

        /* ─── Mobile Polish ─── */
        @media (max-width: 768px) {
          .extra-section { padding: 72px 0; }
          .extra-container { padding: 0 20px; }
          .section-header { margin-bottom: 36px; }
          .section-desc { font-size: 14px; }
          .extra-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .extra-card {
            padding: 20px;
            border-radius: 14px;
          }
          .extra-card-top { margin-bottom: 14px; }
          .extra-icon-wrap {
            width: 40px;
            height: 40px;
            border-radius: 10px;
          }
          .extra-title { font-size: 15px; }
          .extra-desc { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
