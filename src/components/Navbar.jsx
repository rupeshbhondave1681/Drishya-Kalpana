import React from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';


export default function Navbar({ language, setLanguage, darkMode, setDarkMode, isMenuOpen, setIsMenuOpen, scrollToSection, translations }) {
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
  )
}
