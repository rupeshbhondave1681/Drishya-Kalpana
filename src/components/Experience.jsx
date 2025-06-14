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
          description: "Independently handled full-stack development, including UI, backend, and database. Built secure portals using Spring Boot and React. Integrated third-party APIs for document verification and license generation. Developed and managed proxy server architecture to improve security. Led all phases from requirement gathering to testing and deployment. Created scalable multi-role access workflows and automated license management. Provided client support and implemented continuous change requests post-deployment.",
          technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs","SOAP API","React Material UI","AG Grid","Bootstrap"]
        },
        {
          title: "Software Engineer",
          company: "Nucsoft Ltd",
          duration: "July 2023 – July 2024",
          location: "Mumbai, India",
          description: "Worked as a full-stack developer handling frontend and backend modules. Resolved UAT issues, implemented change requests, and created production-ready APIs. Provided backend integration with Angular, and handled CR-to-deployment cycles. Coordinated with QA and business teams to ensure timely delivery. Focused on performance optimization, UI improvements, and secure API implementations. Supported post-production environments and ensured system stability.",
          technologies: ["Java", "Spring Boot","Spring Security","Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap","Angular Material","Slick Grid"]
        },
        {
          title: "Web Developer Intern",
          company: "JBK Tutorials",
          duration: "Aug 2021 – Oct 2021",
          location: "Remote",
          description: "Developed basic user interfaces and forms using React JS. Implemented lazy loading and routing to optimize performance. Fixed backend integration bugs using Spring Boot and MySQL. Contributed to UI responsiveness and enhanced frontend logic. Gained foundational experience in full-stack workflows and remote collaboration.",
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
