import React from 'react'

export default function Education({ language }) {
    const content = {
        en: { title: "Education" },
        hi: { title: "शिक्षा" },
        mr: { title: "शिक्षण" }
      };
    
      const education = [
        {
          degree: "B.Tech in Computer Science Engineering",
          institution: "Shah and Anchor Kutchhi Engineering College (MU)",
          year: "2019 - 2023",
          cgpa: "CGPA: 8.2/10",
          location: "Mumbai, India"
        },
        {
          degree: "HSC - Maharashtra State Board",
          institution: "Pemraj Sarda College",
          year: "2018 - 2019",
          location: "Ahmednagar, India"
        },
        {
          degree: "SSC - Maharashtra State Board",
          institution: "AES Bhausaheb Firodiya High School",
          year: "2016 - 2017",
          location: "Maharashtra, India"
        }
      ];
    
  return (
    <section id="education" className="education-section">
    <div className="container">
      <h2 className="section-title">{content[language].title}</h2>
      <div className="timeline">
        {education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p className="timeline-year">{edu.year}</p>
              {edu.cgpa && <p className="timeline-cgpa">{edu.cgpa}</p>}
              <p className="timeline-location">{edu.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}
