import React, { useEffect } from "react";
import styles from "./Navbar.module.css";
import ScrollSpy from 'bootstrap/js/dist/scrollspy';

function Navbar() {
  useEffect(() => {
    const scrollSpy = new ScrollSpy(document.body, {
      target: '#navbarNav', // updated to match collapse div ID
      offset: 70,
    });

    return () => scrollSpy.dispose();
  }, []);

  return (
    <section className={styles["navbar-section"]}>
      <nav className="navbar navbar-expand-lg bg-body-tertiary header-navbar w-100" id="mainNavbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#Home">Home</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item"><a className="nav-link" href="#About">About Me</a></li>
              <li className="nav-item"><a className="nav-link" href="#Education">Education</a></li>
              <li className="nav-item"><a className="nav-link" href="#Work">Relevant Experience</a></li>
              
              <li className="nav-item"><a className="nav-link" href="#Skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" href="#Projects">Projects</a></li>
              <li className="nav-item"><a className="nav-link" href="#Contact">Contact Me</a></li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="./assets/Programmer Resume 2025-2026.pdf" download>
                  <i className="bi bi-download"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
