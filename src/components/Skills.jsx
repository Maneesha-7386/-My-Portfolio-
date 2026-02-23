import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <h1 className="section-title">Skills</h1>
        <div className="title-underline"></div>
        <div className="skills-layout">
          {/* Frontend Development */}
          <div className="tech-col">
            <h2 className="skills-heading">Frontend Development</h2>
            <div className="bar-item">
              <div className="bar-label">React.js (v19)</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">JavaScript (ES6+)</div>
              <div className="bar-track"><div className="bar-fill w-85"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">Redux Toolkit</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">Vanilla CSS (Animations)</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">HTML5 & CSS3</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
          </div>

          {/* Tools & Ecosystem */}
          <div className="tech-col">
            <h2 className="skills-heading">Tools </h2>
            <div className="bar-item">
              <div className="bar-label">Git & GitHub</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">Vite & Build Tools</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">Netlify (Deployment)</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">React Router (v7)</div>
              <div className="bar-track"><div className="bar-fill w-85"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">VS Code</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
          </div>

          {/* Professional Skills */}
          <div className="pro-col">
            <h2 className="skills-heading">Professional Skills</h2>
            <div className="professional-skills-list">
              <div className="skill-item">
                <div className="circle c-90"><span>90%</span></div>
                <div className="skill-info">
                  <h4>Creativity</h4>
                  <p>Innovative UI/UX thinking and creative problem-solving</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="circle c-85"><span>85%</span></div>
                <div className="skill-info">
                  <h4>Problem Solving</h4>
                  <p>Analytical mindset with systematic debugging (Chrome DevTools)</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="circle c-85"><span>85%</span></div>
                <div className="skill-info">
                  <h4>Team Work</h4>
                  <p>Collaborative development and effective communication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
