import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Activities', href: '#extracurricular' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid #1e1e2e' : '1px solid transparent',
      }}
    >
      <div className="nav-container">
        <a href="#home" className="nav-logo">
          Sajib
        </a>

        {/* Desktop Nav */}
        <div className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="nav-mobile-toggle"
          aria-label="Toggle menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      {/* Mobile Drawer — Slide from Right */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="drawer-backdrop"
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="drawer-panel"
            >
              <div className="drawer-header">
                <span className="drawer-title">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="drawer-close"
                >
                  <HiX />
                </button>
              </div>

              <div className="drawer-links">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="drawer-link"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>


            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        .nav-container {
          max-width: 1152px;
          margin: 0 auto;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-logo {
          font-size: 24px;
          font-weight: 700;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          background: linear-gradient(to right, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 32px;
        }
        .nav-link {
          color: #94a3b8;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover { color: #f1f5f9; }

        .nav-mobile-toggle {
          color: #f1f5f9;
          font-size: 26px;
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          transition: background 0.2s;
        }
        .nav-mobile-toggle:hover { background: rgba(139,92,246,0.1); }

        /* Drawer */
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          backdrop-filter: blur(4px);
          z-index: 90;
        }
        .drawer-panel {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          max-width: 85vw;
          background: linear-gradient(180deg, #111118 0%, #0d0d14 100%);
          border-left: 1px solid #1e1e2e;
          z-index: 100;
          display: flex;
          flex-direction: column;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.6);
        }
        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid rgba(30,30,46,0.6);
        }
        .drawer-title {
          font-size: 18px;
          font-weight: 700;
          font-family: 'Space Grotesk', system-ui, sans-serif;
          background: linear-gradient(to right, #8b5cf6, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .drawer-close {
          color: #64748b;
          font-size: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          transition: all 0.2s;
        }
        .drawer-close:hover {
          background: rgba(139,92,246,0.1);
          color: #8b5cf6;
        }
        .drawer-links {
          padding: 12px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .drawer-link {
          color: #94a3b8;
          padding: 14px 16px;
          font-size: 16px;
          font-weight: 500;
          border-radius: 12px;
          transition: all 0.2s;
        }
        .drawer-link:hover {
          color: #f1f5f9;
          background: rgba(139,92,246,0.08);
        }


        @media (max-width: 767px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
          .nav-container { padding: 14px 20px; }
          .nav-logo { font-size: 22px; }
        }
      `}</style>
    </motion.nav>
  );
}
