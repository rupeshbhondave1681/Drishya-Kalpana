// import React, { useState, useEffect } from 'react';
// import {FaEye } from 'react-icons/fa';
// import Ekyc from '../assets/EkycBackOffice.png';
// import Ambit from '../assets/DedupeAmbit.png';
// import NeoGrowth from '../assets/AdvanceSuite2.0.jpg';
// import XtremLicense from '../assets/XtremeLicense.jpeg'
// export default function Projects({ language }) {
//     const content = {
//         en: { title: "Projects", viewProject: "View Project" },
//         hi: { title: "प्रोजेक्ट्स", viewProject: "प्रोजेक्ट देखें" },
//         mr: { title: "प्रकल्प", viewProject: "प्रकल्प पहा" }
//       };
    
//       const projects = [
//         {
//           title: "E-KYC Platform",
//           description: "Enterprise-level platform with multi-role access and document management system.",
//           technologies: ["React JS", "Spring Boot", "MSSQL"],
//           image:Ekyc
//         },
//         {
//           title: "Ambit LMS",
//           description: "Comprehensive loan management system with audit logs and admin dashboards.",
//           technologies: ["Angular 14", "Spring Boot", "MSSQL"],
//           image: Ambit
//         },
//         {
//           title: "AdvanceSuite 2.0",
//           description: "Student registration and inquiry management system with enhanced UI.",
//           technologies: ["React JS", "Bootstrap", "CSS"],
//           image:NeoGrowth
//         },
//         {
//           title: "Xtrem License Portal",
//           description: "Student registration and inquiry management system with enhanced UI.",
//           technologies: ["React JS", "Bootstrap", "CSS"],
//           image:XtremLicense
//         }
//       ];
    
//   return (
//    <section id="projects" className="projects-section">
//          <div className="container">
//            <h2 className="section-title">{content[language].title}</h2>
//            <div className="projects-grid">
//              {projects.map((project, index) => (
//                <div key={index} className="project-card">
//                  <img src={project.image} alt={project.title} />
//                  <div className="project-content">
//                    <h3>{project.title}</h3>
//                    <p>{project.description}</p>
//                    <div className="project-tech">
//                      {project.technologies.map((tech, techIndex) => (
//                        <span key={techIndex} className="tech-tag">{tech}</span>
//                      ))}
//                    </div>
//                    <button className="btn btn-primary">
//                      <FaEye /> {content[language].viewProject}
//                    </button>
//                  </div>
//                </div>
//              ))}
//            </div>
//          </div>
//        </section>
//   )
// }



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
    
      const projects = {
        en: [
          {
            title: "E-KYC Platform",
            description: "A digital onboarding system for secure document verification. Built a secure document collection and verification system with Maker-Checker workflow. Integrated third-party APIs (NSDL, Digio, TCS) for Aadhaar, PAN, and bank verification. Implemented image cropping, document preview, and access control for different user roles.",
            technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "React-Bootstrap"],
            image: Ekyc,
            duration: "Dec 2024 – Present",
            organization: "XtremSoft Technology"
          },
          {
            title: "Xtrem License Portal",
            description: "Automated licensing system for software products with secure client access. Developed a centralized license management portal for product-based operations. Replaced manual support requests with a self-service client portal. Integrated a proxy server layer for enhanced backend security. Handled full lifecycle development including backend logic, frontend UI, testing, and deployment.",
            technologies: ["React JS", "Spring Boot", "MSSQL", "Tailwind CSS", "AG Grid"],
            image: XtremLicense,
            duration: "July 2024 – Dec 2024",
            organization: "XtremSoft Technology"
          },
          {
            title: "AdvanceSuite 2.0",
            description: "A full-scale business loan management platform with 50+ modules. Contributed individually to the ScoreCard and Geographic Master modules. Built reusable Angular SlickGrid components for fast rendering and inline editing. Implemented export-import functionality and scalable backend services using Spring Boot to support real-time data operations and integration with other platform modules.",
            technologies: ["Angular 14", "Spring Boot", "MSSQL", "Bootstrap", "Slick Grid"],
            image: NeoGrowth,
            duration: "Dec 2023 – July 2024",
            organization: "Nucsoft Ltd"
          },
          {
            title: "Ambit LMS",
            description: "Loan management system supporting audit, role control, and workflow automation. Contributed to the core platform by resolving UAT issues, implementing change requests, and developing backend APIs and frontend dashboards. Ensured robust data handling, role-based access control, and reliable production support throughout the lifecycle.",
            technologies: ["Angular 14", "Spring Boot", "MSSQL"],
            image: Ambit,
            duration: "July 2023 – Dec 2023",
            organization: "Nucsoft Ltd"
          }
        ],
        hi: [
          {
            title: "ई-केवाईसी प्लेटफॉर्म",
            description: "सुरक्षित दस्तावेज़ सत्यापन के लिए एक डिजिटल ऑनबोर्डिंग प्रणाली। डॉक्यूमेंट अपलोड और वेरिफिकेशन के लिए मेकर-चेकर वर्कफ़्लो के साथ सिस्टम विकसित किया गया। आधार, पैन और बैंक सत्यापन के लिए थर्ड-पार्टी एपीआई इंटीग्रेशन किया गया। छवि क्रॉपिंग, डॉक्यूमेंट प्रीव्यू और एक्सेस कंट्रोल जैसी विशेषताएँ जोड़ी गईं।",
            technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "React-Bootstrap"],
            image: Ekyc,
            duration: "दिसंबर 2024 – वर्तमान",
            organization: "XtremSoft Technology"
          },
          {
            title: "एक्सट्रीम लाइसेंस पोर्टल",
            description: "सॉफ्टवेयर उत्पादों के लिए एक स्वचालित लाइसेंसिंग सिस्टम। मैन्युअल सपोर्ट रिक्वेस्ट की जगह सेल्फ-सर्विस पोर्टल लागू किया गया। बैकएंड सुरक्षा के लिए प्रॉक्सी सर्वर जोड़ा गया। विकास, टेस्टिंग और डिप्लॉयमेंट की पूरी प्रक्रिया को स्वतंत्र रूप से संभाला गया।",
            technologies: ["React JS", "Spring Boot", "MSSQL", "Tailwind CSS", "AG Grid"],
            image: XtremLicense,
            duration: "जुलाई 2024 – दिसंबर 2024",
            organization: "XtremSoft Technology"
          },
          {
            title: "अडवांससूट 2.0",
            description: "50+ मॉड्यूल्स वाला एक पूर्ण बिज़नेस लोन मैनेजमेंट प्लेटफॉर्म। व्यक्तिगत रूप से स्कोरकार्ड और जियोग्राफिक मास्टर मॉड्यूल्स पर काम किया। Angular SlickGrid कॉम्पोनेन्ट्स बनाए और डेटा हैंडलिंग के लिए एक्सपोर्ट-इम्पोर्ट कार्यक्षमता और स्केलेबल बैकएंड सेवाएं विकसित कीं।",
            technologies: ["Angular 14", "Spring Boot", "MSSQL", "Bootstrap", "Slick Grid"],
            image: NeoGrowth,
            duration: "दिसंबर 2023 – जुलाई 2024",
            organization: "Nucsoft Ltd"
          },
          {
            title: "अॅम्बिट एलएमएस",
            description: "ऑडिट लॉग्स, यूजर भूमिका नियंत्रण और वर्कफ़्लो ऑटोमेशन के साथ एक लोन मैनेजमेंट सिस्टम। UAT समस्याओं को हल किया, बदलाव अनुरोध लागू किए और बैकएंड एपीआई और फ्रंटएंड डैशबोर्ड विकसित किए।",
            technologies: ["Angular 14", "Spring Boot", "MSSQL"],
            image: Ambit,
            duration: "जुलाई 2023 – दिसंबर 2023",
            organization: "Nucsoft Ltd"
          }
        ],
        mr: [
          {
            title: "ई-केवायसी प्लॅटफॉर्म",
            description: "सुरक्षित दस्तऐवज पडताळणीसाठी एक डिजिटल ऑनबोर्डिंग प्रणाली. डॉक्युमेंट संग्रह व सत्यापनासाठी मेकर-चेकर वर्कफ्लो तयार केला. आधार, पॅन आणि बँक पडताळणीसाठी तृतीय-पक्ष API चे एकत्रीकरण केले. इमेज क्रॉपिंग, प्रीव्यू आणि ऍक्सेस कंट्रोल कार्यान्वित केले.",
            technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "React-Bootstrap"],
            image: Ekyc,
            duration: "डिसेंबर 2024 – सध्याचा",
            organization: "XtremSoft Technology"
          },
          {
            title: "Xtrem लाइसेंस पोर्टल",
            description: "सॉफ्टवेअर उत्पादनांसाठी स्वयंचलित लाइसेंसिंग प्रणाली. मॅन्युअल सपोर्ट कॉलच्या जागी सेल्फ-सर्व्हिस पोर्टल विकसित केला. सुरक्षेसाठी प्रॉक्सी सर्व्हर लेयर एकत्रित केला. बॅकएंड, फ्रंटएंड, चाचणी आणि डिप्लॉयमेंट पूर्णपणे स्वतंत्रपणे हाताळले.",
            technologies: ["React JS", "Spring Boot", "MSSQL", "Tailwind CSS", "AG Grid"],
            image: XtremLicense,
            duration: "जुलै 2024 – डिसेंबर 2024",
            organization: "XtremSoft Technology"
          },
          {
            title: "AdvanceSuite 2.0",
            description: "५०+ मॉड्यूल्ससह एक संपूर्ण बिझनेस लोन मॅनेजमेंट प्लॅटफॉर्म. स्कोरकार्ड आणि जिओग्राफिक मास्टर या दोन मॉड्यूल्सवर स्वतंत्ररित्या काम केले. Angular SlickGrid वापरून रीयूजेबल घटक तयार केले आणि Spring Boot सह स्केलेबल बॅकएंड सेवा विकसित केल्या.",
            technologies: ["Angular 14", "Spring Boot", "MSSQL", "Bootstrap", "Slick Grid"],
            image: NeoGrowth,
            duration: "डिसेंबर 2023 – जुलै 2024",
            organization: "Nucsoft Ltd"
          },
          {
            title: "Ambit LMS",
            description: "ऑडिट लॉग्स, रचना नियंत्रण आणि कार्यप्रवाह ऑटोमेशनसाठी कर्ज व्यवस्थापन प्रणाली. UAT समस्या सोडवून, चेंज रिक्वेस्ट लागू करून API आणि UI विकसित केले.",
            technologies: ["Angular 14", "Spring Boot", "MSSQL"],
            image: Ambit,
            duration: "जुलै 2023 – डिसेंबर 2023",
            organization: "Nucsoft Ltd"
          }
        ]
      };
      
      
    
  return (
  //  <section id="projects" className="projects-section">
  //        <div className="container">
  //          <h2 className="section-title">{content[language].title}</h2>
  //          <div className="projects-grid">
  //            {projects.map((project, index) => (
  //              <div key={index} className="project-card">
  //                <img src={project.image} alt={project.title} />
  //                <div className="project-content">
  //                  <h3>{project.title}</h3>
  //                  <div className="project-meta">
  //                    <span className="project-duration">{project.duration}</span>
  //                    <span className="project-organization">{project.organization}</span>
  //                  </div>
  //                  <p>{project.description}</p>
  //                  <div className="project-tech">
  //                    {project.technologies.map((tech, techIndex) => (
  //                      <span key={techIndex} className="tech-tag">{tech}</span>
  //                    ))}
  //                  </div>
  //                  <button className="btn btn-primary">
  //                    <FaEye /> {content[language].viewProject}
  //                  </button>
  //                </div>
  //              </div>
  //            ))}
  //          </div>
  //        </div>
  //      </section>


  <section id="projects" className="projects-section">
  <div className="container">
    <h2 className="section-title">{content[language].title}</h2>
    <div className="projects-grid">
      {(projects[language] || []).map((project, index) => (
        <div key={index} className="project-card">
          <img src={project.image} alt={project.title} />
          <div className="project-content">
            <h3>{project.title}</h3>
            <div className="project-meta">
              <span className="project-duration">{project.duration}</span>
              <span className="project-organization">{project.organization}</span>
            </div>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">{tech}</span>
              ))}
            </div>
            {/* <button className="btn btn-primary">
              <FaEye /> {content[language].viewProject}
            </button> */}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}