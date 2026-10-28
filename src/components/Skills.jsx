import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDocker, FaFigma,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, SiNextdotjs,
} from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
  { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
  { name: 'Figma', icon: <FaFigma />, color: '#F24E1E' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="skills-section">
      <div className="skills-bg" />
      <div ref={ref} className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            Technologies I <span className="gradient-text">work with</span>
          </h2>
          <p className="section-desc">
            I'm always learning and adapting to new technologies to deliver the best solutions.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="skill-card"
            >
              <span className="skill-icon" style={{ color: skill.color }}>
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 100px 0;
          position: relative;
        }
        .skills-bg {
          position: absolute;
          inset: 0;
          background: rgba(22, 22, 31, 0.4);
          pointer-events: none;
        }
        .skills-container {
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
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }
        .skill-card {
          padding: 24px 16px;
          border-radius: 16px;
          background: #111118;
          border: 1px solid #1e1e2e;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          transition: all 0.3s;
          cursor: default;
        }
        .skill-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .skill-icon { font-size: 30px; transition: transform 0.3s; }
        .skill-card:hover .skill-icon { transform: scale(1.15); }
        .skill-name {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
          transition: color 0.3s;
        }
        .skill-card:hover .skill-name { color: #e2e8f0; }

        /* ─── Tablet ─── */
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(4, 1fr); }
        }

        /* ─── Mobile Polish ─── */
        @media (max-width: 640px) {
          .skills-section { padding: 72px 0; }
          .skills-container { padding: 0 20px; }
          .section-header { margin-bottom: 36px; }
          .section-desc { font-size: 14px; }
          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
          }
          .skill-card {
            padding: 18px 10px;
            border-radius: 14px;
            gap: 8px;
          }
          .skill-icon { font-size: 24px; }
          .skill-name { font-size: 11px; }
        }
        @media (max-width: 360px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }
        }
      `}</style>
    </section>
  );
}
