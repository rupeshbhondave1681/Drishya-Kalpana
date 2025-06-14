import React, { useState, useEffect } from 'react';
import {  FaEnvelope,  FaDownload } from 'react-icons/fa';
import rupeshImg from '../assets/Rupesh.jpg';

export default function Home({ language, scrollToSection }) {

    const content = {
        en: {
          greeting: "Hello, I'm",
          name: "Rupesh Bhondave",
          title: "Full Stack Software Developer",
          description: "I’m a Full Stack Developer with 2+ years of experience in building scalable web and enterprise applications. I specialize in Java, Spring Boot, React JS, Angular, and REST APIs. I’ve worked on platforms like E-KYC and Loan Management, focusing on clean architecture, secure integration, and agile teamwork to deliver efficient solutions.",
          getInTouch: "Get In Touch",
          downloadResume: "Download Resume"
        },
        hi: {
          greeting: "नमस्ते, मैं हूं",
          name: "रुपेश भोंडवे",
          title: "फुल स्टैक सॉफ्टवेयर डेवलपर",
          description: "मैं एक फुल स्टैक डेवलपर हूं, जिसके पास Java, Spring Boot, React JS, Angular और REST API के साथ 2+ वर्षों का अनुभव है। मैंने ई-केवाईसी और लोन मैनेजमेंट जैसे प्लेटफॉर्म पर काम किया है, जिसमें सुरक्षित इंटीग्रेशन और कुशल विकास शामिल हैं।",
          getInTouch: "संपर्क करें",
          downloadResume: "रिज्यूमे डाउनलोड करें"
        },
        mr: {
          greeting: "नमस्कार, मी आहे",
          name: "रुपेश भोंडवे",
          title: "फुल स्टॅक सॉफ्टवेअर डेव्हलपर",
          description: "मी फुल स्टॅक डेव्हलपर असून, Java, Spring Boot, React JS, Angular आणि REST API मध्ये 2+ वर्षांचा अनुभव आहे. मी ई-केवायसी व लोन मॅनेजमेंट सिस्टीम्सवर काम केले असून, सुरक्षित आणि कार्यक्षम सोल्यूशन्स देण्यावर भर दिला आहे.",
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

      const fieldUrl = {
        mailId: "mailto:bhondave.rupesh.1681@gmail.com",
        XtremSoftUrl: "https://xtremsoftindia.com",
        linkdinUrl: "https://in.linkedin.com/company/xtremsoft-technologies-pvt-ltd",
        whatsappUrl: "https://wa.me/919892728310?text=Hello Vipin Bokariya!'"
      };
      
      const GoToEmailId = () => {
        window.location.href = `${fieldUrl.mailId}`;
      };

      // const GoToEmailId = () => {
      //   window.location.href = `mailto:bhondave.rupesh.1681@gmail.com?cc=yoursecondary@example.com&subject=Contacting You&body=Hi Rupesh,`;
      // };

//       const GoToEmailId = () => {
//   window.open(
//     'https://mail.google.com/mail/?view=cm&fs=1&to=bhondave.rupesh.1681@gmail.com&su=Contacting%20You&body=Hi%20Rupesh,',
//     '_blank'
//   );
// };

      
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
                  <button className="btn btn-primary" onClick={GoToEmailId}>
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
