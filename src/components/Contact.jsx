import React, { useState, useEffect } from 'react';
import {  FaGlobe, FaEnvelope, FaPhone, FaLinkedin, FaGithub,FaWhatsapp  } from 'react-icons/fa';

import { FaPhoneFlip } from "react-icons/fa6";

export default function Contact({ language }) {

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
               <a href="https://wa.me/919359886138?text=Hello Rupesh Bhondave !" target="_blank" rel="noopener noreferrer">
                 <FaWhatsapp  />
               </a>
               <a href="tel:+919359886138" target="_blank" rel="noopener noreferrer">
                 <FaPhoneFlip  />
               </a>
             </div>
           </div>
         </div>
       </section>
  ) 
}
   