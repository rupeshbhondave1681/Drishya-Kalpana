import React from 'react'

export default function Experience({ language }) {

  const content = {
    en: { title: "Work Experience" },
    hi: { title: "कार्य अनुभव" },
    mr: { title: "कामाचा अनुभव" }
  };

  // const experiences = [
  //   {
  //     title: "Software Developer",
  //     company: "Swyftovate Softwares LLP",
  //     duration: "July 2024 – Present",
  //     location: "Mumbai, India",
  //     description: "Independently handled full-stack development, including UI, backend, and database. Built secure portals using Spring Boot and React. Integrated third-party APIs for document verification and license generation. Developed and managed proxy server architecture to improve security. Led all phases from requirement gathering to testing and deployment. Created scalable multi-role access workflows and automated license management. Provided client support and implemented continuous change requests post-deployment.",
  //     technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs","SOAP API","React Material UI","AG Grid","Bootstrap"]
  //   },
  //   {
  //     title: "Software Engineer",
  //     company: "Nucsoft Ltd",
  //     duration: "July 2023 – July 2024",
  //     location: "Mumbai, India",
  //     description: "Worked as a full-stack developer handling frontend and backend modules. Resolved UAT issues, implemented change requests, and created production-ready APIs. Provided backend integration with Angular, and handled CR-to-deployment cycles. Coordinated with QA and business teams to ensure timely delivery. Focused on performance optimization, UI improvements, and secure API implementations. Supported post-production environments and ensured system stability.",
  //     technologies: ["Java", "Spring Boot","Spring Security","Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap","Angular Material","Slick Grid"]
  //   },
  //   {
  //     title: "Web Developer Intern",
  //     company: "JBK Tutorials",
  //     duration: "Aug 2021 – Oct 2021",
  //     location: "Remote",
  //     description: "Developed basic user interfaces and forms using React JS. Implemented lazy loading and routing to optimize performance. Fixed backend integration bugs using Spring Boot and MySQL. Contributed to UI responsiveness and enhanced frontend logic. Gained foundational experience in full-stack workflows and remote collaboration.",
  //     technologies: ["React JS", "HTML", "CSS", "Bootstrap"]
  //   }
  // ];


  const experiences = {
    en: [
      {
        title: "Software Developer",
        company: "Swyftovate Softwares LLP",
        duration: "July 2024 – Present",
        location: "Mumbai, India",
        description: "Independently handled full-stack development, including UI, backend, and database. Built secure portals using Spring Boot and React. Integrated third-party APIs for document verification and license generation. Developed and managed proxy server architecture to improve security. Led all phases from requirement gathering to testing and deployment. Created scalable multi-role access workflows and automated license management. Provided client support and implemented continuous change requests post-deployment.",
        technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs", "SOAP API", "React Material UI", "AG Grid", "Bootstrap"]
      },
      {
        title: "Software Engineer",
        company: "Nucsoft Ltd",
        duration: "July 2023 – July 2024",
        location: "Mumbai, India",
        description: "Worked as a full-stack developer handling frontend and backend modules. Resolved UAT issues, implemented change requests, and created production-ready APIs. Provided backend integration with Angular, and handled CR-to-deployment cycles. Coordinated with QA and business teams to ensure timely delivery. Focused on performance optimization, UI improvements, and secure API implementations. Supported post-production environments and ensured system stability.",
        technologies: ["Java", "Spring Boot", "Spring Security", "Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap", "Angular Material", "Slick Grid"]
      },
      {
        title: "Web Developer Intern",
        company: "JBK Tutorials",
        duration: "Aug 2021 – Oct 2021",
        location: "Remote",
        description: "Developed basic user interfaces and forms using React JS. Implemented lazy loading and routing to optimize performance. Fixed backend integration bugs using Spring Boot and MySQL. Contributed to UI responsiveness and enhanced frontend logic. Gained foundational experience in full-stack workflows and remote collaboration.",
        technologies: ["React JS", "HTML", "CSS", "Bootstrap"]
      }
    ],
    hi: [
      {
        title: "सॉफ्टवेयर डेवलपर",
        company: "Swyftovate Softwares LLP",
        duration: "जुलाई 2024 – वर्तमान",
        location: "मुंबई, भारत",
        description: "UI, बैकएंड और डेटाबेस सहित पूर्ण-स्टैक डेवलपमेंट को स्वतंत्र रूप से संभाला। Spring Boot और React का उपयोग करके सुरक्षित पोर्टल बनाए। दस्तावेज़ सत्यापन और लाइसेंस जनरेशन के लिए थर्ड-पार्टी API को एकीकृत किया। सुरक्षा के लिए प्रॉक्सी सर्वर आर्किटेक्चर को विकसित और प्रबंधित किया। आवश्यकताओं से लेकर टेस्टिंग और डिप्लॉयमेंट तक सभी चरणों का नेतृत्व किया। मल्टी-रोल एक्सेस वर्कफ़्लो और लाइसेंस प्रबंधन को स्वचालित किया। क्लाइंट समर्थन और डिप्लॉयमेंट के बाद निरंतर बदलावों को लागू किया।",
        technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs", "SOAP API", "React Material UI", "AG Grid", "Bootstrap"]
      },
      {
        title: "सॉफ्टवेयर इंजीनियर",
        company: "Nucsoft Ltd",
        duration: "जुलाई 2023 – जुलाई 2024",
        location: "मुंबई, भारत",
        description: "फ्रंटएंड और बैकएंड मॉड्यूल को संभालते हुए फुल-स्टैक डेवलपर के रूप में काम किया। UAT मुद्दों को हल किया, बदलावों को लागू किया, और प्रोडक्शन-रेडी API बनाए। Angular के साथ बैकएंड इंटीग्रेशन प्रदान किया और CR से डिप्लॉयमेंट तक का प्रबंधन किया। समय पर डिलीवरी सुनिश्चित करने के लिए QA और बिजनेस टीमों के साथ समन्वय किया। प्रदर्शन अनुकूलन, UI सुधार और सुरक्षित API कार्यान्वयन पर ध्यान केंद्रित किया। पोस्ट-प्रोडक्शन समर्थन और सिस्टम स्थिरता सुनिश्चित की।",
        technologies: ["Java", "Spring Boot", "Spring Security", "Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap", "Angular Material", "Slick Grid"]
      },
      {
        title: "वेब डेवलपर इंटर्न",
        company: "JBK Tutorials",
        duration: "अगस्त 2021 – अक्टूबर 2021",
        location: "रिमोट",
        description: "React JS का उपयोग करके बेसिक UI और फॉर्म विकसित किए। प्रदर्शन अनुकूलन के लिए लेज़ी लोडिंग और रूटिंग लागू की। Spring Boot और MySQL के साथ बैकएंड बग्स को ठीक किया। UI प्रतिक्रिया में सुधार किया और फ्रंटएंड लॉजिक को मजबूत किया। पूर्ण-स्टैक वर्कफ़्लो और रिमोट सहयोग का बुनियादी अनुभव प्राप्त किया।",
        technologies: ["React JS", "HTML", "CSS", "Bootstrap"]
      }
    ],
    mr: [
      {
        title: "सॉफ्टवेअर डेव्हलपर",
        company: "Swyftovate Softwares LLP",
        duration: "जुलै 2024 – वर्तमान",
        location: "मुंबई, भारत",
        description: "UI, बॅकएंड आणि डेटाबेससह पूर्ण-स्टॅक डेव्हलपमेंट स्वतंत्रपणे हाताळले. Spring Boot आणि React वापरून सुरक्षित पोर्टल्स तयार केले. दस्तऐवज पडताळणी आणि परवाना निर्मितीसाठी थर्ड-पार्टी API एकत्रित केल्या. सुरक्षा वाढवण्यासाठी प्रॉक्सी सर्व्हर आर्किटेक्चर विकसित व व्यवस्थापित केले. गरज संकलन ते चाचणी व डिप्लॉयमेंटपर्यंत सर्व टप्प्यांचे नेतृत्व केले. स्केलेबल मल्टी-रोल अ‍ॅक्सेस वर्कफ्लो तयार केले आणि परवाना व्यवस्थापन स्वयंचलित केले. क्लायंट सपोर्ट प्रदान केला आणि डिप्लॉयमेंटनंतर सतत बदल लागू केले.",
        technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs", "SOAP API", "React Material UI", "AG Grid", "Bootstrap"]
      },
      {
        title: "सॉफ्टवेअर इंजिनिअर",
        company: "Nucsoft Ltd",
        duration: "जुलै 2023 – जुलै 2024",
        location: "मुंबई, भारत",
        description: "फ्रंटएंड आणि बॅकएंड मॉड्यूल हाताळणारा फुल-स्टॅक डेव्हलपर म्हणून काम केले. UAT समस्या सोडवल्या, बदल लागू केले आणि प्रोडक्शन-रेडी API तयार केल्या. Angular सह बॅकएंड इंटीग्रेशन दिले आणि CR ते डिप्लॉयमेंट पर्यंत व्यवस्थापन केले. QA आणि व्यवसाय टीमसह समन्वय साधून वेळेवर वितरण सुनिश्चित केले. कार्यक्षमता वाढ, UI सुधारणा आणि सुरक्षित API अंमलबजावणीवर लक्ष केंद्रित केले. पोस्ट-प्रोडक्शन समर्थन आणि सिस्टम स्थिरता सुनिश्चित केली.",
        technologies: ["Java", "Spring Boot", "Spring Security", "Microservices", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap", "Angular Material", "Slick Grid"]
      },
      {
        title: "वेब डेव्हलपर इंटर्न",
        company: "JBK Tutorials",
        duration: "ऑगस्ट 2021 – ऑक्टोबर 2021",
        location: "रिमोट",
        description: "React JS वापरून बेसिक UI आणि फॉर्म तयार केले. कार्यक्षमतेसाठी लेझी लोडिंग आणि रूटिंग अंमलात आणली. Spring Boot आणि MySQL सह बॅकएंड बग्स निश्चित केले. UI प्रतिसाद सुधारला आणि फ्रंटएंड लॉजिक सुधारले. पूर्ण-स्टॅक वर्कफ्लो आणि रिमोट सहकार्याचा मूलभूत अनुभव मिळवला.",
        technologies: ["React JS", "HTML", "CSS", "Bootstrap"]
      }
    ]
  };


  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">{content[language].title}</h2>
        <div className="timeline">
          {experiences[language].map((exp, index) => (
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
