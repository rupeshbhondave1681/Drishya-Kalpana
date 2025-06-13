import React, { useState, useEffect } from 'react';
import {FaEye } from 'react-icons/fa';
import Ekyc from '../assets/EkycBackOffice.png';
import Ambit from '../assets/DedupeAmbit.png';
import NeoGrowth from '../assets/AdvanceSuite2.0.jpg';
import XtremLicense from '../assets/XtremeLicense.jpeg'
export default function Projects({ language }) {
    const content = {
        en: { title: "Projects", viewProject: "View Project" },
        hi: { title: "प्रोजेक्ट्स", viewProject: "प्रोजेक्ट देखें" },
        mr: { title: "प्रकल्प", viewProject: "प्रकल्प पहा" }
      };
    
      const projects = [
        {
          title: "E-KYC Platform",
          description: "Enterprise-level platform with multi-role access and document management system.",
          technologies: ["React JS", "Spring Boot", "MSSQL"],
          image:Ekyc
        },
        {
          title: "Ambit LMS",
          description: "Comprehensive loan management system with audit logs and admin dashboards.",
          technologies: ["Angular 14", "Spring Boot", "MSSQL"],
          image: Ambit
        },
        {
          title: "AdvanceSuite 2.0",
          description: "Student registration and inquiry management system with enhanced UI.",
          technologies: ["React JS", "Bootstrap", "CSS"],
          image:NeoGrowth
        },
        {
          title: "Xtrem License Portal",
          description: "Student registration and inquiry management system with enhanced UI.",
          technologies: ["React JS", "Bootstrap", "CSS"],
          image:XtremLicense
        }
      ];
    
  return (
   <section id="projects" className="projects-section">
         <div className="container">
           <h2 className="section-title">{content[language].title}</h2>
           <div className="projects-grid">
             {projects.map((project, index) => (
               <div key={index} className="project-card">
                 <img src={project.image} alt={project.title} />
                 <div className="project-content">
                   <h3>{project.title}</h3>
                   <p>{project.description}</p>
                   <div className="project-tech">
                     {project.technologies.map((tech, techIndex) => (
                       <span key={techIndex} className="tech-tag">{tech}</span>
                     ))}
                   </div>
                   <button className="btn btn-primary">
                     <FaEye /> {content[language].viewProject}
                   </button>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </section>
  )
}
