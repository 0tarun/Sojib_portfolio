import { FaGithub, FaLinkedin, FaFacebook, FaHeart } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaGithub />, href: 'https://github.com/sajibkingo', label: 'GitHub' },
  { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/sajib-saha-9633b8264/', label: 'LinkedIn' },
  { icon: <FaFacebook />, href: 'https://www.facebook.com/sajib.saha.823338', label: 'Facebook' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} <span className="footer-name">Sajib Saha</span>. All rights reserved.
        </p>
        <p className="footer-text footer-credit">
          Made with <FaHeart className="footer-heart" /> using React
        </p>
        <div className="footer-socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="footer-social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid #1e1e2e;
          background: rgba(10, 10, 15, 0.5);
        }
        .footer-content {
          max-width: 1152px;
          margin: 0 auto;
          padding: 28px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .footer-text {
          color: #475569;
          font-size: 13px;
          font-weight: 400;
        }
        .footer-name {
          color: #94a3b8;
          font-weight: 500;
        }
        .footer-credit {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .footer-heart {
          color: #ef4444;
          font-size: 11px;
        }
        .footer-socials {
          display: flex;
          gap: 12px;
        }
        .footer-social-link {
          color: #475569;
          font-size: 16px;
          transition: all 0.3s;
          display: flex;
        }
        .footer-social-link:hover { color: #8b5cf6; }

        /* ─── Mobile Polish ─── */
        @media (max-width: 640px) {
          .footer-content {
            flex-direction: column;
            text-align: center;
            padding: 24px 20px;
            gap: 12px;
          }
          .footer-text { font-size: 12px; }
          .footer-socials { gap: 16px; }
          .footer-social-link { font-size: 18px; }
        }
      `}</style>
    </footer>
  );
}
