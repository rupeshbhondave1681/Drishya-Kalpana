// import React, { useState, useEffect } from 'react';
// import './App.css';
// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';
// // Main App Component
// const App = () => {
//   const [language, setLanguage] = useState('en');
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     document.body.className = darkMode ? 'dark-theme' : 'light-theme';
//   }, [darkMode]);

//   const translations = {
//     en: {
//       nav: {
//         Home: 'Home',
//         about: 'About',
//         skills: 'Skills',
//         education: 'Education',
//         experience: 'Experience',
//         projects: 'Projects',
//         FAQ :"FAQ",
//         contact: 'Contact'
//       }
//     },
//     hi: {
//       nav: {
//         Home: 'होम',
//         about: 'परिचय',
//         skills: 'कौशल',
//         education: 'शिक्षा',
//         experience: 'अनुभव',
//         projects: 'प्रोजेक्ट्स',
//         FAQ: 'अक्सर पूछे जाने वाले सवाल',
//         contact: 'संपर्क'
//       }
//     },
//     mr: {
//       nav: {
//         Home: 'होम',
//         about: 'माहिती',
//         skills: 'कौशल्ये',
//         education: 'शिक्षण',
//         experience: 'अनुभव',
//         projects: 'प्रकल्प',
//          FAQ: 'नेहमी विचारले जाणारे प्रश्न',
//         contact: 'संपर्क'
//       }
//     }
//   };

//   return (
//     <div className={`app ${darkMode ? 'dark' : 'light'}`}>
//       <Navbar
//         language={language}
//         setLanguage={setLanguage}
//         darkMode={darkMode}
//         setDarkMode={setDarkMode}
//         isMenuOpen={isMenuOpen}
//         setIsMenuOpen={setIsMenuOpen}
//         scrollToSection={scrollToSection}
//         translations={translations}
//       />

//       <Home language={language} scrollToSection={scrollToSection} />
//       <AboutUs language={language} />
//       <Skills language={language} />
//       <Education language={language} />
//       <Experience language={language} />
//       <Projects language={language} />
//       <FAQ  language={language}/>
//       <Contact language={language} />
//       <Footer language={language}/>
//     </div>
//   );
// };


// export default App;



// import React, { useState, useEffect } from 'react';
// import { Helmet } from 'react-helmet-async';
// import './App.css';

// import Home from './components/Home';
// import AboutUs from './components/AboutUs';
// import Skills from './components/Skills';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import FAQ from './components/FAQ';
// import Footer from './components/Footer';
// import Navbar from './components/Navbar';

// const App = () => {
//   const [language, setLanguage] = useState('en');
//   const [darkMode, setDarkMode] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsMenuOpen(false);
//   };

//   useEffect(() => {
//     document.body.className = darkMode ? 'dark-theme' : 'light-theme';
//   }, [darkMode]);

//   const translations = {
//     en: {
//       nav: {
//         Home: 'Home',
//         about: 'About',
//         skills: 'Skills',
//         education: 'Education',
//         experience: 'Experience',
//         projects: 'Projects',
//         FAQ: 'FAQ',
//         contact: 'Contact'
//       }
//     },
//     hi: {
//       nav: {
//         Home: 'होम',
//         about: 'परिचय',
//         skills: 'कौशल',
//         education: 'शिक्षा',
//         experience: 'अनुभव',
//         projects: 'प्रोजेक्ट्स',
//         FAQ: 'अक्सर पूछे जाने वाले सवाल',
//         contact: 'संपर्क'
//       }
//     },
//     mr: {
//       nav: {
//         Home: 'होम',
//         about: 'माहिती',
//         skills: 'कौशल्ये',
//         education: 'शिक्षण',
//         experience: 'अनुभव',
//         projects: 'प्रकल्प',
//         FAQ: 'नेहमी विचारले जाणारे प्रश्न',
//         contact: 'संपर्क'
//       }
//     }
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Rupesh Bhondave | Full Stack Software Developer</title>
//         <meta name="description" content="Rupesh Bhondave is a Full Stack Software Developer experienced in building scalable and secure enterprise applications using Java, Spring Boot, ReactJS, Angular, and REST APIs." />
//         <meta name="keywords" content="Rupesh Bhondave, Full Stack Developer, Java, Spring Boot, React, Angular, REST APIs, Software Engineer, Web Developer, Portfolio" />
//         <meta name="author" content="Rupesh Bhondave" />
//         <meta name="robots" content="index, follow" />

//         {/* Open Graph / Facebook */}
//         <meta property="og:title" content="Rupesh Bhondave | Full Stack Developer Portfolio" />
//         <meta property="og:description" content="Portfolio of Rupesh Bhondave, a Full Stack Software Developer." />
//         <meta property="og:image" content="/Rupesh.jpg" />
//         <meta property="og:url" content="https://your-website-url.com" />
//         <meta property="og:type" content="website" />

//         {/* Twitter */}
//         <meta name="twitter:title" content="Rupesh Bhondave | Full Stack Developer" />
//         <meta name="twitter:description" content="Full Stack Developer Portfolio of Rupesh Bhondave." />
//         <meta name="twitter:image" content="/Rupesh.jpg" />
//         <meta name="twitter:card" content="summary_large_image" />
//       </Helmet>

//       <div className={`app ${darkMode ? 'dark' : 'light'}`}>
//         <Navbar
//           language={language}
//           setLanguage={setLanguage}
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           isMenuOpen={isMenuOpen}
//           setIsMenuOpen={setIsMenuOpen}
//           scrollToSection={scrollToSection}
//           translations={translations}
//         />

//         <Home language={language} scrollToSection={scrollToSection} />
//         <AboutUs language={language} />
//         <Skills language={language} />
//         <Education language={language} />
//         <Experience language={language} />
//         <Projects language={language} />
//         <FAQ language={language} />
//         <Contact language={language} />
//         <Footer language={language} />
//       </div>
//     </>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './App.css';

import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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
        Home: 'Home',
        about: 'About',
        skills: 'Skills',
        education: 'Education',
        experience: 'Experience',
        projects: 'Projects',
        FAQ: 'FAQ',
        contact: 'Contact',
      },
    },
    hi: {
      nav: {
        Home: 'होम',
        about: 'परिचय',
        skills: 'कौशल',
        education: 'शिक्षा',
        experience: 'अनुभव',
        projects: 'प्रोजेक्ट्स',
        FAQ: 'अक्सर पूछे जाने वाले सवाल',
        contact: 'संपर्क',
      },
    },
    mr: {
      nav: {
        Home: 'होम',
        about: 'माहिती',
        skills: 'कौशल्ये',
        education: 'शिक्षण',
        experience: 'अनुभव',
        projects: 'प्रकल्प',
        FAQ: 'नेहमी विचारले जाणारे प्रश्न',
        contact: 'संपर्क',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Rupesh Bhondave | Java Spring Boot React Developer Portfolio</title>
        <meta
          name="description"
          content="Official portfolio of Rupesh Bhondave, a Full Stack Software Developer specializing in Java, Spring Boot, ReactJS, Angular, and REST APIs. Explore my experience in BFSI, eKYC, and enterprise web development."
        />
        <meta
          name="keywords"
          content="Rupesh Bhondave, Java Developer, Spring Boot Developer, React Developer, Full Stack Developer, Angular Developer, REST API Developer, Software Engineer, Web Developer, Portfolio Website, Developer in India, eKYC Developer, BFSI Software, Loan Management Developer"
        />
        <meta name="author" content="Rupesh Bhondave" />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://rupeshbhondave.in" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Rupesh Bhondave | Java Spring Boot React Full Stack Developer" />
        <meta
          property="og:description"
          content="Explore the professional portfolio of Rupesh Bhondave, Full Stack Developer with 2+ years of experience in Java, Spring Boot, React, and REST APIs."
        />
        <meta property="og:image" content="https://rupeshbhondave.in/Rupesh.jpg" />
        <meta property="og:url" content="https://rupeshbhondave.in" />
        <meta property="og:type" content="website" />

        {/* Twitter SEO */}
        <meta name="twitter:title" content="Rupesh Bhondave | Full Stack Developer Portfolio" />
        <meta
          name="twitter:description"
          content="Full Stack Developer skilled in Java, Spring Boot, ReactJS, Angular. 2+ years of experience delivering scalable web applications."
        />
        <meta name="twitter:image" content="https://rupeshbhondave.in/Rupesh.jpg" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Favicon (optional) */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

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
        <FAQ language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </>
  );
};

export default App;

