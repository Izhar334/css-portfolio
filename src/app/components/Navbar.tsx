import Link from "next/link";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo or Home Link */}
        <Link className="navbar-logo" href="/">
          Izhar&apos;s Portfolio
        </Link>

        {/* Links */}
        <div className="navbar-links">
          <Link className="navbar-link" href="/">
            Home
          </Link>
          <Link className="navbar-link" href="/about">
            About
          </Link>
          <Link className="navbar-link" href="/contact">
            Contact
          </Link>
        </div>

        {/* Resume Button */}
        <Link className="navbar-resume-button" href="/resume">
          View Resume
        </Link>
      </div>
    </nav>
  );
}
