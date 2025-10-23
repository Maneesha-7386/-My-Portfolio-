import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h1 className="section-title">Projects</h1>
        <div className="projects-container">
          <div className="project-card light empty">
            <div className="empty-content">
              <div className="empty-icon">+</div>
              <p className="empty-text">Coming Soon</p>
            </div>
          </div>
          
          <div className="project-card light empty">
            <div className="empty-content">
              <div className="empty-icon">+</div>
              <p className="empty-text">Coming Soon</p>
            </div>
          </div>
          
          <div className="project-card light empty">
            <div className="empty-content">
              <div className="empty-icon">+</div>
              <p className="empty-text">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
