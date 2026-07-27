import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar(): JSX.Element {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="logo">
          <span className="logo-icon">✦</span>
          Biurh<span className="logo-highlight">Adorn</span>
          <span className="logo-icon">✦</span>
        </div>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#products">Collections</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="nav-actions">
          <button className="icon-btn" aria-label="Search">
            🔍
          </button>
          <button className="icon-btn" aria-label="Cart">
            🛒
          </button>
        </div>

        <button className="hamburger" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
