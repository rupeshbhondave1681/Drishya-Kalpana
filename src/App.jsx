import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload, FaEye } from 'react-icons/fa';
import './App.css';
import rupeshImg from './assets/Rupesh.jpg';


// Main App Component
const App = () => {
  const [language, setLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
  }, [darkMode]);

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        contact: 'Contact',
        FAQ :"FAQ"
      }
    },
    hi: {
      nav: {
        home: 'होम',
        about: 'परिचय',
        skills: 'कौशल',
        education: 'शिक्षा',
        experience: 'अनुभव',
        projects: 'प्रोजेक्ट्स',
        contact: 'संपर्क'
      }
    },
    mr: {
      nav: {
        home: 'होम',
        about: 'माहिती',
        skills: 'कौशल्ये',
        education: 'शिक्षण',
        experience: 'अनुभव',
        projects: 'प्रकल्प',
        contact: 'संपर्क'
      }
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Navbar
        language={language}
        setLanguage={setLanguage}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        translations={translations}
      />

      <Home language={language} scrollToSection={scrollToSection} />
      <AboutUs language={language} />
      <Skills language={language} />
      <Education language={language} />
      <Experience language={language} />
      <Projects language={language} />
      <FAQ  language={language}/>
      <Contact language={language} />
      <Footer language={language}/>
    </div>
  );
};

// Navbar Component
const Navbar = ({ language, setLanguage, darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, scrollToSection, translations }) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>RB</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {Object.entries(translations[language].nav).map(([key, value]) => (
            <a
              key={key}
              href={`#${key === 'about' ? 'aboutus' : key}`}
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(key === 'about' ? 'aboutus' : key);
              }}
            >
              {value}
            </a>
          ))}
        </div>

        <div className="nav-controls">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="language-selector"
          >
            {/* <option value="en">EN</option>
            <option value="hi">हिं</option>
            <option value="mr">मर</option> */}
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
            <option value="mr">मराठी</option>

          </select>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="theme-toggle"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="nav-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = ({ language, scrollToSection }) => {
  const content = {
    en: {
      greeting: "Hello, I'm",
      name: "Rupesh Bhondave",
      title: "Full Stack Software Developer",
      description: "A detail-oriented and results-driven Full Stack Software Developer with 2+ years of experience in building scalable web applications and enterprise-grade software solutions.",
      getInTouch: "Get In Touch",
      downloadResume: "Download Resume"
    },
    hi: {
      greeting: "नमस्ते, मैं हूं",
      name: "रुपेश भोंडवे",
      title: "फुल स्टैक सॉफ्टवेयर डेवलपर",
      description: "एक विस्तार-उन्मुख और परिणाम-संचालित फुल स्टैक सॉफ्टवेयर डेवलपर जिसके पास स्केलेबल वेब एप्लिकेशन और एंटरप्राइज़-ग्रेड सॉफ्टवेयर समाधान बनाने में 2+ वर्षों का अनुभव है।",
      getInTouch: "संपर्क करें",
      downloadResume: "रिज्यूमे डाउनलोड करें"
    },
    mr: {
      greeting: "नमस्कार, मी आहे",
      name: "रुपेश भोंडवे",
      title: "फुल स्टॅक सॉफ्टवेअर डेव्हलपर",
      description: "स्केलेबल वेब अॅप्लिकेशन्स आणि एंटरप्राइझ-ग्रेड सॉफ्टवेअर सोल्यूशन्स तयार करण्यात 2+ वर्षांचा अनुभव असलेला तपशील-केंद्रित आणि परिणाम-चालित फुल स्टॅक सॉफ्टवेअर डेव्हलपर.",
      getInTouch: "संपर्क साधा",
      downloadResume: "रिझ्युमे डाउनलोड करा"
    }
  };

  // const handleDownloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/Rupesh_Bhondave_Resume.pdf';
  //   link.download = 'Rupesh_Bhondave_Resume.pdf';
  //   link.click();
  // };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Rupesh_Bhondave_Java_Fullstack_Resume_2_YOE.pdf';
    link.download = 'Rupesh_Bhondave_Resume.pdf'; // This is the file name for download
    link.click();
  };


  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="home-content">
          <div className="profile-image">
            <div className="image-circle">
              <img src={rupeshImg} alt="Rupesh Bhondave" />
            </div>
          </div>
          <div className="home-text">
            <p className="greeting">{content[language].greeting}</p>
            <h1 className="name">{content[language].name}</h1>
            <h2 className="title">{content[language].title}</h2>
            <p className="description">{content[language].description}</p>
            <div className="home-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                <FaEnvelope /> {content[language].getInTouch}
              </button>
              <button className="btn btn-secondary" onClick={handleDownloadResume}>
                <FaDownload /> {content[language].downloadResume}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// About Us Component
const AboutUs = ({ language }) => {
  const content = {
    en: {
      title: "About Me",
      description: "I am a passionate Full Stack Developer with expertise in modern web technologies. I love creating efficient, scalable solutions and staying updated with the latest industry trends.",
      location: "Mumbai, India",
      experience: "2+ Years Experience",
      projects: "5+ Projects Completed"
    },
    hi: {
      title: "मेरे बारे में",
      description: "मैं आधुनिक वेब तकनीकों में विशेषज्ञता रखने वाला एक जुनूनी फुल स्टैक डेवलपर हूं। मुझे कुशल, स्केलेबल समाधान बनाना और नवीनतम उद्योग रुझानों के साथ अपडेट रहना पसंद है।",
      location: "मुंबई, भारत",
      experience: "2+ वर्ष का अनुभव",
      projects: "5+ प्रोजेक्ट पूर्ण"
    },
    mr: {
      title: "माझ्याबद्दल",
      description: "मी आधुनिक वेब तंत्रज्ञानात तज्ञता असलेला एक उत्साही फुल स्टॅक डेव्हलपर आहे. मला कार्यक्षम, स्केलेबल सोल्यूशन्स तयार करणे आणि नवीनतम उद्योग ट्रेंड्सबरोबर अपडेट राहणे आवडते.",
      location: "मुंबई, भारत",
      experience: "2+ वर्षांचा अनुभव",
      projects: "5+ प्रकल्प पूर्ण"
    }
  };

  return (
    <section id="aboutus" className="about-section">
      <div className="container">
        <h2 className="section-title">{content[language].title}</h2>
        <div className="about-content">
          <div className="about-text">
            <p>{content[language].description}</p>
            <div className="about-stats">
              <div className="stat">
                <h3>📍</h3>
                <p>{content[language].location}</p>
              </div>
              <div className="stat">
                <h3>💼</h3>
                <p>{content[language].experience}</p>
              </div>
              <div className="stat">
                <h3>🚀</h3>
                <p>{content[language].projects}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Component
const Skills = ({ language }) => {
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
  );
};

// Education Component
const Education = ({ language }) => {
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
  );
};

// Experience Component
const Experience = ({ language }) => {
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
      technologies: ["React JS", "Spring Boot", "Hibernate", "MSSQL", "REST APIs", "Tailwind CSS"]
    },
    {
      title: "Software Engineer",
      company: "Nucsoft Ltd",
      duration: "July 2023 – July 2024",
      location: "Mumbai, India",
      description: "Full Stack Developer for Ambit LMS, a loan management system.",
      technologies: ["Java", "Spring Boot", "Hibernate", "REST API", "Angular 14", "MSSQL", "Bootstrap"]
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
  );
};

// Projects Component
const Projects = ({ language }) => {
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
      image: "https://via.placeholder.com/300x200/2563eb/FFFFFF?text=E-KYC"
    },
    {
      title: "Ambit LMS",
      description: "Comprehensive loan management system with audit logs and admin dashboards.",
      technologies: ["Angular 14", "Spring Boot", "MSSQL"],
      image: "https://via.placeholder.com/300x200/2563eb/FFFFFF?text=LMS"
    },
    {
      title: "Student Portal",
      description: "Student registration and inquiry management system with enhanced UI.",
      technologies: ["React JS", "Bootstrap", "CSS"],
      image: "https://via.placeholder.com/300x200/2563eb/FFFFFF?text=Portal"
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
  );
};

// Contact Component
const Contact = ({ language }) => {
  const content = {
    en: {
      title: "Get In Touch",
      subtitle: "Let's work together on your next project",
      email: "Email",
      phone: "Phone",
      location: "Location"
    },
    hi: {
      title: "संपर्क करें",
      subtitle: "आइए आपके अगले प्रोजेक्ट पर मिलकर काम करें",
      email: "ईमेल",
      phone: "फोन",
      location: "स्थान"
    },
    mr: {
      title: "संपर्क साधा",
      subtitle: "चला तुमच्या पुढच्या प्रकल्पावर एकत्र काम करूया",
      email: "ईमेल",
      phone: "फोन",
      location: "स्थान"
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">{content[language].title}</h2>
        <p className="section-subtitle">{content[language].subtitle}</p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <div>
                <h3>{content[language].email}</h3>
                <p>bhondave.rupesh.1681@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <div>
                <h3>{content[language].phone}</h3>
                <p>+91-9359886138</p>
              </div>
            </div>
            <div className="contact-item">
              <FaGlobe className="contact-icon" />
              <div>
                <h3>{content[language].location}</h3>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com/in/rupeshbhondave" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/rupeshbhondave1681" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};



const Footer = ({ language }) => {
  const currentYear = new Date().getFullYear();

  const content = {
    en: `© ${currentYear} Developed by Rupesh Bhondave`,
    hi: `© ${currentYear} रूपेश भोंडवे द्वारा विकसित`,
    mr: `© ${currentYear} रुपेश भोंडवे यांनी विकसित केले`
  };

  return (
    <footer className="footer-section">
      <div className="footer-container">
        <p className="footer-text">{content[language]}</p>
      </div>
    </footer>
  );
};


const FAQ = ({ language }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const qaData = {
    en: [
      {
        id: 1,
        question: "What are your 5-year career goals?",
        answer: "In the next 5 years, I aim to become a senior full-stack developer with expertise in modern technologies like React, Node.js, and cloud platforms. I want to lead development teams, contribute to open-source projects, and mentor junior developers while building scalable applications that make a real impact."
      },
      {
        id: 2,
        question: "What have you actually found in your development journey?",
        answer: "Through my development journey, I've discovered that continuous learning is crucial in tech. I've found immense satisfaction in solving complex problems, building user-friendly applications, and seeing how code can transform ideas into reality. The collaborative nature of development and the supportive developer community have been particularly rewarding."
      },
      {
        id: 3,
        question: "What motivates you as a developer?",
        answer: "I'm motivated by the challenge of creating elegant solutions to complex problems. The ability to build applications that can positively impact users' lives drives me forward. I also find inspiration in staying updated with emerging technologies and contributing to innovative projects that push boundaries."
      },
      {
        id: 4,
        question: "How do you handle challenging projects?",
        answer: "I approach challenging projects by breaking them down into smaller, manageable tasks. I research thoroughly, collaborate with team members, and aren't afraid to ask questions. I believe in iterative development, regular testing, and maintaining clean, documented code to ensure project success."
      },
      {
        id: 5,
        question: "What's your preferred development stack?",
        answer: "I prefer working with modern JavaScript frameworks like React for frontend development, paired with Node.js for backend services. I'm comfortable with databases like MongoDB and PostgreSQL, and I enjoy working with cloud platforms like AWS and Azure for deployment and scaling."
      }
    ],
    hi: [
      {
        id: 1,
        question: "आपके 5-साल के करियर लक्ष्य क्या हैं?",
        answer: "अगले 5 वर्षों में, मैं React, Node.js और क्लाउड प्लेटफॉर्म जैसी आधुनिक तकनीकों में विशेषज्ञता के साथ एक सीनियर फुल-स्टैक डेवलपर बनने का लक्ष्य रखता हूं। मैं डेवलपमेंट टीमों का नेतृत्व करना, ओपन-सोर्स प्रोजेक्ट्स में योगदान देना चाहता हूं।"
      },
      {
        id: 2,
        question: "आपको अपनी डेवलपमेंट यात्रा में वास्तव में क्या मिला है?",
        answer: "अपनी डेवलपमेंट यात्रा के दौरान, मैंने पाया है कि तकनीक में निरंतर सीखना महत्वपूर्ण है। जटिल समस्याओं को हल करने, उपयोगकर्ता-अनुकूल एप्लिकेशन बनाने में मुझे अपार संतुष्टि मिली है।"
      },
      {
        id: 3,
        question: "एक डेवलपर के रूप में आपको क्या प्रेरित करता है?",
        answer: "मुझे जटिल समस्याओं के लिए सुंदर समाधान बनाने की चुनौती प्रेरित करती है। उपयोगकर्ताओं के जीवन को सकारात्मक रूप से प्रभावित करने वाले एप्लिकेशन बनाने की क्षमता मुझे आगे बढ़ाती है।"
      },
      {
        id: 4,
        question: "आप चुनौतीपूर्ण परियोजनाओं को कैसे संभालते हैं?",
        answer: "मैं चुनौतीपूर्ण परियोजनाओं को छोटे, प्रबंधनीय कार्यों में विभाजित करके देखता हूं। मैं गहन अनुसंधान करता हूं, टीम के सदस्यों के साथ सहयोग करता हूं।"
      },
      {
        id: 5,
        question: "आपका पसंदीदा डेवलपमेंट स्टैक क्या है?",
        answer: "मैं फ्रंटएंड डेवलपमेंट के लिए React जैसे आधुनिक JavaScript फ्रेमवर्क के साथ काम करना पसंद करता हूं, बैकएंड सेवाओं के लिए Node.js के साथ।"
      }
    ],
    mr: [
      {
        id: 1,
        question: "तुमची 5-वर्षाची करिअर उद्दिष्टे काय आहेत?",
        answer: "पुढील 5 वर्षांत, मी React, Node.js आणि क्लाउड प्लॅटफॉर्म सारख्या आधुनिक तंत्रज्ञानामध्ये तज्ञता असलेला सीनियर फुल-स्टॅक डेव्हलपर बनण्याचे उद्दिष्ट ठेवले आहे।"
      },
      {
        id: 2,
        question: "तुम्हाला तुमच्या डेव्हलपमेंट प्रवासात खरोखर काय सापडले आहे?",
        answer: "माझ्या डेव्हलपमेंट प्रवासाद्वारे, मी शोधून काढले आहे की तंत्रज्ञानामध्ये सतत शिकणे महत्त्वाचे आहे. जटिल समस्या सोडवण्यात, वापरकर्ता-अनुकूल अनुप्रयोग तयार करण्यात मला अपार समाधान मिळाले आहे."
      },
      {
        id: 3,
        question: "डेव्हलपर म्हणून तुम्हाला काय प्रेरणा देते?",
        answer: "जटिल समस्यांसाठी सुंदर उपाय तयार करण्याची आव्हान मला प्रेरित करते. वापरकर्त्यांच्या जीवनावर सकारात्मक परिणाम करू शकणारे अनुप्रयोग तयार करण्याची क्षमता मला पुढे नेते."
      },
      {
        id: 4,
        question: "तुम्ही आव्हानात्मक प्रकल्प कसे हाताळता?",
        answer: "मी आव्हानात्मक प्रकल्पांना लहान, व्यवस्थापित करता येणाऱ्या कामांमध्ये विभागून पाहतो. मी सखोल संशोधन करतो, टीमच्या सदस्यांसोबत सहकार्य करतो."
      },
      {
        id: 5,
        question: "तुमचा पसंतीचा डेव्हलपमेंट स्टॅक कोणता आहे?",
        answer: "मी फ्रंटएंड डेव्हलपमेंटसाठी React सारख्या आधुनिक JavaScript फ्रेमवर्कसोबत काम करणे पसंत करतो, बॅकएंड सेवांसाठी Node.js सोबत."
      }
    ]
  };

  const toggleQuestion = (questionId) => {
    setActiveQuestion(activeQuestion === questionId ? null : questionId);
  };

  return (
    <section id="FAQ" className="qa-section">
      <div className="qa-container">
        <div className="qa-header">
          <h2 className="qa-title">
            {language === 'en' ? 'Frequently Asked Questions' : 
             language === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 
             'वारंवार विचारले जाणारे प्रश्न'}
          </h2>
          <p className="qa-subtitle">
            {language === 'en' ? 'Get to know more about my journey and aspirations' : 
             language === 'hi' ? 'मेरी यात्रा और आकांक्षाओं के बारे में और जानें' : 
             'माझ्या प्रवास आणि आकांक्षांबद्दल अधिक जाणून घ्या'}
          </p>
        </div>
        
        <div className="qa-list">
          {qaData[language].map((item) => (
            <div 
              key={item.id} 
              className={`qa-item ${activeQuestion === item.id ? 'active' : ''}`}
            >
              <button 
                className="qa-question"
                onClick={() => toggleQuestion(item.id)}
                aria-expanded={activeQuestion === item.id}
              >
                <span className="question-text">{item.question}</span>
                <span className="question-icon">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    className={`chevron ${activeQuestion === item.id ? 'rotated' : ''}`}
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </span>
              </button>
              
              <div className={`qa-answer ${activeQuestion === item.id ? 'expanded' : ''}`}>
                <div className="answer-content">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default App;