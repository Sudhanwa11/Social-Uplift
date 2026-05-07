import React, { useEffect } from "react";
import "./Header.css";

const Header = ({ isNavOpen, toggleNav, handleScroll }) => {

  // 🔹 Add scroll-based glass intensity
  useEffect(() => {
    const header = document.querySelector("header");

    const onScroll = () => {
      if (window.scrollY > 20) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="glass-navbar">
      <div className="container">
        <nav>
          <a
            href="#home"
            className="logo"
            onClick={(e) => handleScroll(e, "#home")}
          >
            Social <span>Uplift</span>
          </a>

          <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
            {["home", "why-us", "services", "portfolio", "contact"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    toggleNav();
                    handleScroll(e, `#${id}`);
                  }}
                >
                  {id.charAt(0).toUpperCase() +
                    id.slice(1).replace("-", " ")}
                </a>
              </li>
            ))}
          </ul>

          <div className="hamburger" onClick={toggleNav}>
            <i className="fas fa-bars"></i>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;