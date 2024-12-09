import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2>About Me</h2>
        <span>My Story</span>
      </div>

      <div className="spacer-about"></div>

      <div className="about-me-box">
        {/* Details Section */}
        <div className="aboutdetails">
          <p>
            Hello! I'm Alexander Estrella, a Full-Stack Web Developer based in
            Orlando, Florida, originally from the Dominican Republic. What began
            as a coding hobby has evolved into my passion and profession.
          </p>

          <p>
            My journey as a developer has led me to work on a wide range of
            projects, with a focus on creating modern, functional, and user-friendly
            websites that help businesses grow. I'm always striving to enhance my
            skills and stay ahead of the latest technologies.
          </p>

          <p>
            When I'm not coding, I enjoy spending quality time with my family, playing
            video games, exploring the outdoors, and hanging out with my dog. 
          </p>

          <p>
            You can reach me at <a href="mailto:alexanderestrell23@gmail.com">alexanderestrell23@gmail.com</a>, or check out my full portfolio to see more of my work and get in touch!
          </p>
        </div>
      </div>

      <div className="spacer-about"></div>
    </section>
  );
};

export default About;
