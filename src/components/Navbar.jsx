import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    const navbarHeight = 70;
    const y = section.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsMobileMenuOpen(false); // Close menu on click
  };

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Trigger when section is in the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <h2>Portfolio</h2>
        </div>

        {/* Hamburger Icon */}
        <div
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <div className={`navbar-links ${isMobileMenuOpen ? "open" : ""}`}>
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={activeSection === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
