import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import { animated } from "react-spring";

const Home = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("|");

  useEffect(() => {
    shiftName();
    shiftTitle();
  }, []);

  function shiftName() {
    const nameElement = document.getElementsByClassName("subheading")[0];
    let emptyName = "";
    const string = "I'm Alexander";
  
    // Adjust the speed to make the typing smoother
    for (let i = 0; i < string.length; i++) {
      time(i);
    }
  
    function time(i) {
      setTimeout(() => {
        emptyName += string[i];
        setName(emptyName);  // Update the state with the progressively built string
      }, 100 * i);  // Faster (100ms) for a smoother transition
    }
  }
  

  function shiftTitle() {
    const titles = ["Consultant", "System Administrator", "Developer"];
    let index = 0;
  
    // Set the initial title immediately
    setTitle(titles[index]);
  
    // Set interval to change the title every 2 seconds
    setInterval(() => {
      index = (index + 1) % titles.length; // Loop back to 0 after the last title
      // Add a fade transition for smoother title changes
      setTitle(titles[index]);
    }, 3000);  // 3-second interval for smoother transition between titles
  }
  


  return (
    <section id="home" className="home-section">
     
      <div className="left-content">
        <animated.h2 className="subheading">{name}</animated.h2>
        <animated.h3 className="subsubheading">{title}</animated.h3>
        <p className="description">
  I'm a seasoned IT professional and full-stack developer with over 3 years of experience in cloud architecture, cybersecurity, and building innovative web applications. I specialize in integrating APIs, designing accessible user interfaces, and developing secure, scalable back-end systems. My expertise includes migrating legacy systems to cloud platforms, creating automated workflows, and conducting cybersecurity training to improve organizational resilience. Passionate about leveraging technology to streamline business operations and enhance user experiences, I’m driven to solve complex challenges and contribute to impactful projects.
</p>


        {/* Social Media Links */}
        <ul className="socials">
          <li>
            <a className="fa-xl" href="https://github.com/AlexanderEstrella">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              className="fa-xl"
              href="https://www.linkedin.com/in/alexanderjestrella/"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
          
        </ul>

        
        <div className="footer-stats">
          <div className="footer-stat-item">
            <span>3+</span> Years of Experience
          </div>
          <div className="footer-stat-item">
            <span>18+</span> Projects Completed
          </div>
          <div className="footer-stat-item">
            <span>4</span> Technologies Mastered
          </div>
        </div>
      </div>

      
      <div className="right-content">
        <div className="profile-circle">
          <img src="/images/profile.jpg" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
