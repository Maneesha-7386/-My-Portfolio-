
import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-inner">
        <div className="skills-layout">
          {/* Frontend Development */}
          <div className="tech-col">
            <h2 className="skills-heading">Frontend Development</h2>
            <div className="bar-item">
              <div className="bar-label">React</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">JavaScript</div>
              <div className="bar-track"><div className="bar-fill w-85"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">CSS</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
            <div className="bar-item">
              <div className="bar-label">HTML</div>
              <div className="bar-track"><div className="bar-fill w-95"></div></div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="tech-col">
            <h2 className="skills-heading">Tools & Technologies</h2>
            <div className="bar-item">
              <div className="bar-label">Git</div>
              <div className="bar-track"><div className="bar-fill w-90"></div></div>
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
                  <p>Innovative thinking and creative problem-solving approach</p>
                </div>
              </div>
              <div className="skill-item">
                <div className="circle c-85"><span>85%</span></div>
                <div className="skill-info">
                  <h4>Problem Solving</h4>
                  <p>Analytical mindset with systematic debugging skills</p>
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
