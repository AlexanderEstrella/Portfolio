import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <a href="#home" className="navbar-brand">
          <div className="logo-container">A</div>
        </a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </li>
            <li className="nav-item">
              <a href="/images/Resume.pdf" className="btn btn-link download-btn" download>
                Download CV <FontAwesomeIcon icon={faDownload} />
              </a>
            </li>
            <li className="nav-item">
            <button
  className="nav-link btn btn-link dark-light-toggle"
  onClick={toggleDarkMode}
  aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
  disabled // Always disable the button
>
  {isDarkMode ? '☀️' : '🌙'}
</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
