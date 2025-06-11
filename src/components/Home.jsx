import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon, FaGlobe, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaDownload, FaEye } from 'react-icons/fa';
import rupeshImg from '../assets/Rupesh.jpg';

export default function Home({ language, scrollToSection }) {

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
    
      const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/Rupesh_Bhondave_Java_Fullstack_Resume_2_YOE.pdf';
        link.download = 'Rupesh_Bhondave_Resume.pdf'; // This is the file name for download
        link.click();
      };

  return (
     <section id="Home" className="home-section">
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
  )
}
