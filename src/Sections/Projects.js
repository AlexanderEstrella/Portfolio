import React from "react";
import Data from "../Data";

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="card-container">
        {Data.map((item) => (
          <a key={item.id} href={item.link} className="card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
