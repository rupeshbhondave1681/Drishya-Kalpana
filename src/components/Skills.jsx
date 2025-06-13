import React, { useState } from 'react';

export default function Skills({ language }) {
  const content = {
    en: { title: "Skills & Technologies" },
    hi: { title: "कौशल और तकनीकें" },
    mr: { title: "कौशल्ये आणि तंत्रज्ञान" }
  };

  const skills = {
    en: [
      {
        name: 'Java',
        icon: '☕',
        subtopics: ['Core Java', 'Collections', 'Multithreading', 'OOPs']
      },
      {
        name: 'Spring Boot',
        icon: '🍃',
        subtopics: ['Spring MVC', 'Spring Security', 'REST APIs', 'Microservices']
      },
      {
        name: 'React JS',
        icon: '⚛️',
        subtopics: ['Components', 'Hooks', 'State Management', 'Redux']
      },
      {
        name: 'Angular',
        icon: '🅰️',
        subtopics: ['Components', 'Services', 'TypeScript', 'RxJS']
      },
      {
        name: 'JavaScript',
        icon: '🟨',
        subtopics: ['ES6+', 'DOM Manipulation', 'Async/Await', 'Promises']
      },
      {
        name: 'MySQL',
        icon: '🗄️',
        subtopics: ['Database Design', 'Query Optimization', 'Joins', 'Indexing']
      },
      {
        name: 'REST API',
        icon: '🔗',
        subtopics: ['HTTP Methods', 'API Design', 'Authentication', 'JSON']
      },
      {
        name: 'Git',
        icon: '📦',
        subtopics: ['Version Control', 'Branching', 'GitHub', 'Collaboration']
      }
    ],
    hi: [
      {
        name: 'जावा',
        icon: '☕',
        subtopics: ['कोर जावा', 'कलेक्शंस', 'मल्टीथ्रेडिंग', 'ओओपीएस']
      },
      {
        name: 'स्प्रिंग बूट',
        icon: '🍃',
        subtopics: ['स्प्रिंग MVC', 'स्प्रिंग सिक्योरिटी', 'REST APIs', 'माइक्रोसर्विसेज']
      },
      {
        name: 'रिएक्ट JS',
        icon: '⚛️',
        subtopics: ['कंपोनेंट्स', 'हुक्स', 'स्टेट प्रबंधन', 'रिडक्स']
      },
      {
        name: 'एंगुलर',
        icon: '🅰️',
        subtopics: ['कंपोनेंट्स', 'सर्विसेज', 'टाइपस्क्रिप्ट', 'RxJS']
      },
      {
        name: 'जावास्क्रिप्ट',
        icon: '🟨',
        subtopics: ['ES6+', 'DOM मेनिपुलेशन', 'असिंक्रोनस / अवेट', 'प्रॉमिसेस']
      },
      {
        name: 'MySQL',
        icon: '🗄️',
        subtopics: ['डेटाबेस डिज़ाइन', 'क्वेरी ऑप्टिमाइजेशन', 'जोइंस', 'इंडेक्सिंग']
      },
      {
        name: 'REST API',
        icon: '🔗',
        subtopics: ['HTTP मेथड्स', 'API डिज़ाइन', 'प्रमाणीकरण', 'JSON']
      },
      {
        name: 'Git',
        icon: '📦',
        subtopics: ['वर्शन कंट्रोल', 'ब्रांचिंग', 'GitHub', 'कोलेबोरेशन']
      }
    ],
    mr: [
      {
        name: 'जावा',
        icon: '☕',
        subtopics: ['कोर जावा', 'कलेक्शन्स', 'मल्टीथ्रेडिंग', 'OOPs']
      },
      {
        name: 'स्प्रिंग बूट',
        icon: '🍃',
        subtopics: ['स्प्रिंग MVC', 'स्प्रिंग सिक्योरिटी', 'REST APIs', 'मायक्रोसर्व्हिसेस']
      },
      {
        name: 'React JS',
        icon: '⚛️',
        subtopics: ['कंपोनंट्स', 'हुक्स', 'स्टेट मॅनेजमेंट', 'रिडक्स']
      },
      {
        name: 'Angular',
        icon: '🅰️',
        subtopics: ['कंपोनंट्स', 'सर्व्हिसेस', 'TypeScript', 'RxJS']
      },
      {
        name: 'JavaScript',
        icon: '🟨',
        subtopics: ['ES6+', 'DOM मॅनिप्युलेशन', 'Async/Await', 'प्रॉमिसेस']
      },
      {
        name: 'MySQL',
        icon: '🗄️',
        subtopics: ['डेटाबेस डिझाइन', 'क्वेरी ऑप्टिमायझेशन', 'जॉइन्स', 'इंडेक्सिंग']
      },
      {
        name: 'REST API',
        icon: '🔗',
        subtopics: ['HTTP पद्धती', 'API डिझाइन', 'प्रमाणीकरण', 'JSON']
      },
      {
        name: 'Git',
        icon: '📦',
        subtopics: ['वर्जन कंट्रोल', 'ब्रँचिंग', 'GitHub', 'सहकार्य']
      }
    ]
  };

  return (
    <section id="skills" className="skill-section">
    <div className="skill-container">
      <h2 className="skill-title">{content[language].title}</h2>
      <div className="skill-grid">
        {skills[language].map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-header">
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
            <div className="skill-subtopics">
              <div className="skill-subtopic-container">
                {skill.subtopics.map((sub, i) => (
                  <div key={i} className="tech-tag">{sub}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}