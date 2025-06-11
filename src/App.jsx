import React, { useState, useEffect } from 'react';
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
        Home: 'Home',
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
        Home: 'होम',
        about: 'परिचय',
        skills: 'कौशल',
        education: 'शिक्षा',
        experience: 'अनुभव',
        projects: 'प्रोजेक्ट्स',
        contact: 'संपर्क',
        FAQ: 'अक्सर पूछे जाने वाले सवाल'
      }
    },
    mr: {
      nav: {
        Home: 'होम',
        about: 'माहिती',
        skills: 'कौशल्ये',
        education: 'शिक्षण',
        experience: 'अनुभव',
        projects: 'प्रकल्प',
        contact: 'संपर्क',
        FAQ: 'नेहमी विचारले जाणारे प्रश्न'
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


export default App;