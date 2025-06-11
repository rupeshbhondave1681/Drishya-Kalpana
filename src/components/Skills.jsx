import React from 'react'

export default function Skills({ language }) {
    const content = {
        en: { title: "Skills & Technologies" },
        hi: { title: "कौशल और तकनीकें" },
        mr: { title: "कौशल्ये आणि तंत्रज्ञान" }
      };
    
      const skills = [
        { name: 'Java', icon: '☕', level: 90 },
        { name: 'Spring Boot', icon: '🍃', level: 85 },
        { name: 'React JS', icon: '⚛️', level: 88 },
        { name: 'Angular', icon: '🅰️', level: 80 },
        { name: 'JavaScript', icon: '🟨', level: 85 },
        { name: 'MySQL', icon: '🗄️', level: 82 },
        { name: 'REST API', icon: '🔗', level: 90 },
        { name: 'Git', icon: '📦', level: 85 }
      ];
  return (
    <section id="skills" className="skills-section">
    <div className="container">
      <h2 className="section-title">{content[language].title}</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
            <div className="skill-progress">
              <div
                className="skill-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
