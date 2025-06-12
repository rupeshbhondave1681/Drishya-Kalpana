import React from 'react'

export default function Experience({ language }) {
    const content = {
        en: { title: "Work Experience" },
        hi: { title: "कार्य अनुभव" },
        mr: { title: "कामाचा अनुभव" }
      };
    
      const experiences = [
        {
          title: "Software Developer",
          company: "Swyftovate Softwares LLP",
          duration: "July 2024 – Present",
          location: "Mumbai, India",
          description: "Designed and developed enterprise-level E-KYC platform with multi-role access and document management.",
          technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs","SOAP API","React Material UI","AG Grid","Bootstrap"]
        },
        {
          title: "Software Engineer",
          company: "Nucsoft Ltd",
          duration: "July 2023 – July 2024",
          location: "Mumbai, India",
          description: "Full Stack Developer for Ambit LMS, a loan management system.",
          technologies: ["Java", "Spring Boot","Spring Security","Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap","Angular Material","Slick Grid"]
        },
        {
          title: "Web Developer Intern",
          company: "JBK Tutorials",
          duration: "Aug 2021 – Oct 2021",
          location: "Remote",
          description: "Enhanced UI and developed student registration and inquiry modules.",
          technologies: ["React JS", "HTML", "CSS", "Bootstrap"]
        }
      ];
    
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">{content[language].title}</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p className="timeline-duration">{exp.duration}</p>
                <p className="timeline-location">{exp.location}</p>
                <p className="timeline-description">{exp.description}</p>
                <div className="tech-stack">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
