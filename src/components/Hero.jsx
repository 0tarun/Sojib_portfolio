import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import profileImg from '../assets/profile.png';
import cvFile from '../Image/SAJIB_CV.pdf';


export default function Hero() {
  // Mouse tilt animation state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['15deg', '-15deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-15deg', '15deg']);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Effects */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="hero-content">
        <div className="hero-split-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-text-col">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="hero-badge"> Available for Freelance Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="hero-title"
            >
              I'm <span className="hero-gradient-text">Sajib Saha</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hero-desc"
            >
              I am a multidisciplinary developer and designer combining UI/UX Design, Frontend Development and SQA Engineering.


            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="hero-buttons"
            >
              <a href="#projects" className="hero-btn-primary">
                View My Work <FiArrowRight />
              </a>
              <a
                href={cvFile}
                download="Sajib_Saha_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-secondary"
              >
                <FiDownload /> Download CV
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="hero-socials"
            >
              {[
                { icon: <FaGithub />, href: 'https://github.com/sajibkingo', label: 'GitHub' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/sajib-saha-9633b8264/', label: 'LinkedIn' },
                { icon: <FaFacebook />, href: 'https://www.facebook.com/sajib.saha.823338', label: 'Facebook' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="hero-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Profile Image with Floating & 3D Interactive Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image-col"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hero-image-floating-wrapper"
            >
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                className="hero-image-card"
              >
                {/* Animated Glowing Ring Backdrop */}
                <div className="hero-image-glow-ring" />
                <div className="hero-image-glow-orb" />

                {/* Profile Image Frame */}
                <div className="hero-image-frame">
                  <img
                    src={profileImg}
                    alt="Sajib Saha - Full Stack Developer"
                    className="hero-profile-img"
                  />
                </div>

                {/* Interactive Status Badge */}
                {/* <div className="hero-image-status-badge">
                  <span className="status-dot" />
                  <span>Full Stack Dev</span>
                </div> */}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - desktop only */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="scroll-indicator"
      >
        <div className="scroll-mouse">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="scroll-dot"
          />
        </div>
      </motion.div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          min-height: 100svh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
        }
        .hero-orb-1 {
          top: 15%;
          left: 5%;
          width: 280px;
          height: 280px;
          background: rgba(139, 92, 246, 0.12);
        }
        .hero-orb-2 {
          bottom: 15%;
          right: 5%;
          width: 280px;
          height: 280px;
          background: rgba(6, 182, 212, 0.1);
        }
        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 1152px;
          margin: 0 auto;
          padding: 120px 24px 80px;
        }
        .hero-split-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 48px;
          align-items: center;
        }
        .hero-text-col {
          text-align: left;
        }
        .hero-badge {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 9999px;
          border: 1px solid rgba(139, 92, 246, 0.25);
          background: rgba(139, 92, 246, 0.06);
          color: #a78bfa;
          font-size: 14px;
          font-weight: 500;
          margin-bottom: 28px;
        }
        .hero-title {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 700;
          font-size: clamp(2.5rem, 5.5vw, 4.5rem);
          line-height: 1.1;
          color: #f1f5f9;
          margin-bottom: 20px;
        }
        .hero-gradient-text {
          background: linear-gradient(135deg, #8b5cf6, #06b6d4, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-desc {
          color: #94a3b8;
          font-size: clamp(1rem, 2vw, 1.15rem);
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 36px;
        }
        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-bottom: 40px;
        }
        .hero-btn-primary {
          padding: 14px 28px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4);
          border-radius: 9999px;
          color: #fff;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
          box-shadow: 0 4px 20px rgba(139,92,246,0.25);
        }
        .hero-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(139,92,246,0.35);
        }
        .hero-btn-secondary {
          padding: 14px 28px;
          border: 1px solid #1e1e2e;
          border-radius: 9999px;
          color: #f1f5f9;
          font-weight: 600;
          font-size: 15px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s;
        }
        .hero-btn-secondary:hover {
          border-color: rgba(139,92,246,0.3);
          background: rgba(139,92,246,0.05);
          transform: translateY(-2px);
        }
        .hero-socials {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .hero-social-link {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: 1px solid #1e1e2e;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #64748b;
          font-size: 18px;
          transition: all 0.3s;
        }
        .hero-social-link:hover {
          color: #8b5cf6;
          border-color: rgba(139,92,246,0.4);
          background: rgba(139,92,246,0.06);
        }

        /* Profile Image Styles */
        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 1000px;
        }
        .hero-image-floating-wrapper {
          position: relative;
          width: 100%;
          max-width: 360px;
        }
        .hero-image-card {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 1;
          border-radius: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        /* Glowing Animated Gradient Ring */
        .hero-image-glow-ring {
          position: absolute;
          inset: -4px;
          border-radius: 36px;
          background: linear-gradient(135deg, #8b5cf6, #06b6d4, #f472b6, #8b5cf6);
          background-size: 300% 300%;
          animation: ringGlow 6s linear infinite;
          opacity: 0.85;
          filter: blur(1px);
        }

        @keyframes ringGlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .hero-image-glow-orb {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(6,182,212,0.15) 50%, transparent 70%);
          filter: blur(25px);
          z-index: 0;
        }

        .hero-image-frame {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          border-radius: 32px;
          overflow: hidden;
          background: #111118;
          border: 2px solid rgba(255, 255, 255, 0.1);
        }

        .hero-profile-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }

        .hero-image-card:hover .hero-profile-img {
          transform: scale(1.05);
        }

        /* Floating Badge */
        .hero-image-status-badge {
          position: absolute;
          bottom: -14px;
          right: -10px;
          z-index: 10;
          background: rgba(17, 17, 24, 0.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(139, 92, 246, 0.3);
          padding: 8px 16px;
          border-radius: 9999px;
          color: #f1f5f9;
          font-size: 13px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseDot 2s infinite;
        }

        @keyframes pulseDot {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.6; }
        }

        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
        }
        .scroll-mouse {
          width: 24px;
          height: 38px;
          border-radius: 9999px;
          border: 2px solid rgba(30,30,46,0.8);
          display: flex;
          justify-content: center;
          padding-top: 8px;
        }
        .scroll-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #8b5cf6;
        }

        /* ─── Responsive Adjustments ─── */
        @media (max-width: 960px) {
          .hero-split-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .hero-text-col {
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-desc {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-buttons {
            justify-content: center;
          }
          .hero-socials {
            justify-content: center;
          }
          .hero-image-col {
            order: -1; /* Place image on top for mobile */
          }
          .hero-image-floating-wrapper {
            max-width: 260px;
          }
        }

        @media (max-width: 640px) {
          .hero-content {
            padding: 100px 20px 60px;
          }
          .hero-badge {
            font-size: 13px;
            padding: 7px 14px;
            margin-bottom: 20px;
          }
          .hero-desc {
            margin-bottom: 28px;
          }
          .hero-buttons {
            flex-direction: column;
            gap: 12px;
            margin-bottom: 32px;
            width: 100%;
          }
          .hero-btn-primary,
          .hero-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 15px 24px;
            font-size: 15px;
          }
          .hero-socials { gap: 12px; }
          .hero-social-link {
            width: 42px;
            height: 42px;
            font-size: 16px;
          }
          .scroll-indicator { display: none; }
        }
      `}</style>
    </section>
  );
}
