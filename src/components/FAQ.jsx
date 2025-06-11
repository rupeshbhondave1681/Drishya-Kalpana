import React, { useState} from 'react';

export default function FAQ({language}) {
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
  )
}
