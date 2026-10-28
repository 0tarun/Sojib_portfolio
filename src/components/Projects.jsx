import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
  {
    title: 'Automated Ferry Management System',
    description:
      'Our ferry management system project aims to develop a robust and user-friendly online platform that facilitates efficient management and operation of ferry services. The system will integrate various functionalities to streamline processes such as ticket booking, scheduling, and user management. The project includes specialized dashboards for both users and administrators to ensure smooth operations, handle emergencies, and manage revenue effectively.',
    tags: ['Figma', 'Canva', 'Flaticon'],
    github: 'https://github.com',
    live: 'https://www.figma.com/community/file/1414274571213020658',
    gradientFrom: 'rgba(139,92,246,0.15)',
    gradientTo: 'rgba(59,130,246,0.15)',
    image: null,
  },
  {
    title: 'Corporate Training & Employee Skill Evaluation System',
    description:
      'A comprehensive web platform designed to streamline corporate learning, track employee skill progression, and evaluate performance. The system connects key stakeholders—Employees, HR/Admins, and Trainers—into a single, cohesive workflow.',
    tags: ['Figma', 'Canva', 'Flaticon'],
    github: 'https://github.com',
    live: 'https://www.figma.com/community/file/1622118672216489843/corporate-training-platform-ui',
    gradientFrom: 'rgba(6,182,212,0.15)',
    gradientTo: 'rgba(16,185,129,0.15)',
    image: null,
  },
  {
    title: 'teacher-api-automation-pytest',
    description:
      'This project contains an automated API testing framework for the Teachers module of the Student Management APIs. We have automated the Authentication flow, complete CRUD operations and comprehensive Negative test scenarios using Python and Pytest. The framework utilizes dynamic data generation, reusable helper functions and session-level fixtures to ensure clean, non-repetitive and highly efficient test execution.',
    tags: ['Python', 'Pytest', 'Faker', 'Requests', 'Python-dotenv', 'Allure'],
    github: 'https://github.com/sajibkingo/teacher-api-automation-pytest.git',
    live: 'https://example.com',
    gradientFrom: 'rgba(244,114,182,0.15)',
    gradientTo: 'rgba(251,146,60,0.15)',
    image: null,
  },
  {
    title: 'teacher-management-api-postman',
    description:
      'This project features a comprehensive API testing suite for the Teachers module of the Student Management system, fully automated using Postman and Newman. It covers the complete testing lifecycle—including secure JWT authentication, full CRUD operations, query-based filtering, and edge-case negative scenarios. Built with custom Postman test scripts, the execution workflow integrates seamlessly with Newman to automatically generate structured, actionable HTML test reports.',
    tags: ['Postman', 'Newman', 'Node.js'],
    github: 'https://github.com/sajibkingo/teacher-management-api-postman.git',
    live: 'https://example.com',
    gradientFrom: 'rgba(139,92,246,0.15)',
    gradientTo: 'rgba(217,70,239,0.15)',
    image: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="projects-section">
      <div ref={ref} className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-header"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="project-card"
            >
              <div
                className="project-header"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}, ${project.gradientTo})`,
                }}
              >
                <div className="project-header-grid" />
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                ) : (
                  <span className="project-letter">{project.title.charAt(0)}</span>
                )}
                <div className="project-header-overlay" />
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiGithub /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section { padding: 100px 0; }
        .projects-container {
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
        .projects-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .project-card {
          border-radius: 18px;
          background: #111118;
          border: 1px solid #1e1e2e;
          overflow: hidden;
          transition: all 0.4s;
        }
        .project-card:hover {
          border-color: rgba(139,92,246,0.25);
          transform: translateY(-4px);
          box-shadow: 0 12px 36px rgba(0,0,0,0.35);
        }
        .project-header {
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .project-header-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        .project-image {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .project-card:hover .project-image {
          transform: scale(1.06);
        }
        .project-header-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: linear-gradient(180deg, transparent 40%, rgba(17, 17, 24, 0.85) 100%);
          pointer-events: none;
        }
        .project-letter {
          position: relative;
          z-index: 2;
          font-size: 72px;
          font-weight: 700;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          color: rgba(255,255,255,0.07);
          user-select: none;
          transition: color 0.4s;
        }
        .project-card:hover .project-letter {
          color: rgba(255,255,255,0.15);
        }
        .project-body { padding: 24px; }
        .project-title {
          font-size: 18px;
          font-weight: 700;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          color: #f1f5f9;
          margin-bottom: 8px;
          transition: color 0.3s;
        }
        .project-card:hover .project-title { color: #a78bfa; }
        .project-desc {
          color: #94a3b8;
          font-size: 14px;
          line-height: 1.65;
          margin-bottom: 16px;
        }
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }
        .project-tag {
          padding: 5px 12px;
          font-size: 12px;
          border-radius: 9999px;
          background: rgba(139,92,246,0.08);
          color: #a78bfa;
          border: 1px solid rgba(139,92,246,0.15);
          font-weight: 500;
        }
        .project-links {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .project-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          color: #64748b;
          font-weight: 500;
          transition: color 0.3s;
        }
        .project-link:hover { color: #f1f5f9; }

        /* ─── Mobile Polish ─── */
        @media (max-width: 768px) {
          .projects-section { padding: 72px 0; }
          .projects-container { padding: 0 20px; }
          .section-header { margin-bottom: 36px; }
          .section-desc { font-size: 14px; }
          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .project-header { height: 140px; }
          .project-letter { font-size: 56px; }
          .project-body { padding: 20px; }
          .project-title { font-size: 17px; }
          .project-desc { font-size: 13px; margin-bottom: 14px; }
          .project-tags { gap: 6px; margin-bottom: 16px; }
          .project-tag { padding: 4px 10px; font-size: 11px; }
        }
      `}</style>
    </section>
  );
}
