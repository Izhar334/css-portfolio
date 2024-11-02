import Link from "next/link";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <p>Izhar&apos;s Portfolio</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <Link className="footer-link" href="/">
            Home
          </Link>
          <Link className="footer-link" href="/about">
            About
          </Link>
          <Link className="footer-link" href="/contact">
            Contact
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <Link
            className="footer-social-link"
            target="_blank"
            href="https://linkedin.com"
          >
            LinkedIn
          </Link>
          <Link
            className="footer-social-link"
            target="_blank"
            href="https://github.com"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} Izhar&apos;s Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
