import React, { useState} from 'react';

export default function FAQ({language}) {
     const [activeQuestion, setActiveQuestion] = useState(null);
    
     const qaData = {
      en: [
        {
          id: 1,
          question: "What is your vision for your software career?",
          answer: "With over 2 years of experience in both product-based and service-based companies, my goal is to become a software developer who designs clean, scalable, and easy-to-understand systems. I want to build solutions that are efficient, handle high traffic smoothly, and can be easily understood and maintained by any team member. I'm focused on improving my understanding of architecture and exploring areas like cloud, performance optimization, and Gen AI."
        },
        {
          id: 2,
          question: "How do you approach projects that grow in complexity?",
          answer: "I break down complex projects into smaller parts and plan things step by step. I focus on keeping the structure of the code clean and organized so that it becomes easy to manage, test, and scale later. I believe good planning and communication within the team play a major role in managing complex projects."
        },
        {
          id: 3,
          question: "What challenges have you faced while working with databases, and how did you handle them?",
          answer: "I've come across slow data access, unnecessary data duplication, and difficult relationships between tables. To solve this, I made sure the structure of the database was well-designed, used efficient queries, and handled data updates carefully to keep everything consistent and reliable."
        },
        {
          id: 4,
          question: "What motivates you to keep learning?",
          answer: "I’m excited by the idea of building better systems and understanding how things work at a deeper level. I enjoy learning from people around me, staying updated with current trends, and improving the way I write and organize my code. My curiosity and the desire to build long-lasting solutions keep me going."
        },
        {
          id: 5,
          question: "How do you ensure that your code is easy for others to understand and work with?",
          answer: "I write code that follows a consistent structure, add clear comments, and name things in a way that explains their purpose. I avoid making things overly complex and try to keep everything straightforward so that any developer joining the project can understand it easily."
        }
      ],
    
      hi: [
        {
          id: 1,
          question: "आपका सॉफ्टवेयर करियर के लिए विज़न क्या है?",
          answer: "2+ वर्षों के अनुभव के साथ मेरा लक्ष्य ऐसा डेवलपर बनना है जो साफ, स्केलेबल और आसानी से समझे जाने वाले सिस्टम डिज़ाइन करे। मैं ऐसी चीजें बनाना चाहता हूँ जो कुशलता से काम करें, ज़्यादा ट्रैफिक को संभाल सकें और टीम में कोई भी व्यक्ति उन्हें आसानी से समझ और मेंटेन कर सके।"
        },
        {
          id: 2,
          question: "जब कोई प्रोजेक्ट जटिल होता जाता है तो आप उसे कैसे संभालते हैं?",
          answer: "मैं बड़े प्रोजेक्ट्स को छोटे-छोटे हिस्सों में बाँटता हूँ और हर स्टेप को अच्छे से प्लान करता हूँ। मैं कोड को साफ और अच्छी संरचना में रखने पर ध्यान देता हूँ ताकि आगे जाकर उसे स्केल और मेंटेन करना आसान हो।"
        },
        {
          id: 3,
          question: "डेटाबेस के साथ काम करते समय आपने किन चुनौतियों का सामना किया है और उन्हें कैसे हल किया?",
          answer: "कभी-कभी डेटा धीमा आता है, डेटा डुप्लिकेट हो जाता है या टेबल्स के बीच संबंध ठीक से नहीं बनते। इसे सुधारने के लिए मैंने डेटाबेस की डिज़ाइन को बेहतर किया, सही तरीके से डेटा को हैंडल किया और ज़रूरी जगहों पर बदलाव किए।"
        },
        {
          id: 4,
          question: "आपको सीखते रहने के लिए क्या प्रेरित करता है?",
          answer: "मैं हमेशा जानना चाहता हूँ कि चीजें बेहतर तरीके से कैसे की जा सकती हैं। नए टेक्नोलॉजी सीखना, टीम से कुछ नया सीखना और अपने कोड को लगातार बेहतर बनाना मुझे प्रेरित करता है।"
        },
        {
          id: 5,
          question: "आप कैसे सुनिश्चित करते हैं कि आपका कोड दूसरों के लिए समझने योग्य हो?",
          answer: "मैं हमेशा कोड को एक तय स्ट्रक्चर में लिखता हूँ, सही नाम देता हूँ और ज़रूरत पड़ने पर कमेंट्स भी जोड़ता हूँ। मैं कोशिश करता हूँ कि कोड सीधा और स्पष्ट हो ताकि कोई भी नया डेवलपर उसे आसानी से समझ सके।"
        }
      ],
    
      mr: [
        {
          id: 1,
          question: "तुमचं सॉफ्टवेअर करिअरसाठी लक्ष्य काय आहे?",
          answer: "2+ वर्षांच्या अनुभवासह, मी एक असा डेव्हलपर बनण्याचा प्रयत्न करतो जो स्पष्ट, स्केलेबल आणि कोणालाही समजणारे सोल्यूशन्स तयार करतो. मी अशी प्रणाली बनवू इच्छितो जी अधिक ट्रॅफिक हाताळू शकेल आणि ज्या कोडवर कोणताही डेव्हलपर सहज काम करू शकेल."
        },
        {
          id: 2,
          question: "जेव्हा प्रोजेक्ट जटिल होतो तेव्हा तुम्ही ते कसे हाताळता?",
          answer: "मी प्रोजेक्टचे छोटे भाग करतो आणि प्रत्येक टप्पा नीट प्लॅन करतो. कोड व्यवस्थित ठेवण्यावर आणि त्याला समजण्यास सुलभ ठेवण्यावर लक्ष केंद्रित करतो. त्यामुळे तो सहज मेंटेन आणि स्केल करता येतो."
        },
        {
          id: 3,
          question: "डेटाबेससह काम करताना तुम्ही कोणत्या अडचणींना सामोरे गेला आणि कशा प्रकारे त्याचे निराकरण केले?",
          answer: "कधी कधी डेटा हळू मिळतो, टेबल्समध्ये चुकीचे संबंध असतात किंवा डेटा डुप्लिकेट होतो. मी डेटाबेस स्ट्रक्चर सुधारले, योग्य क्वेरीज वापरल्या आणि डेटा नीट हँडल केला जेणेकरून तो अचूक आणि कार्यक्षम राहील."
        },
        {
          id: 4,
          question: "तुम्हाला सतत शिकण्यासाठी काय प्रेरणा देते?",
          answer: "मी नवीन गोष्टी जाणून घेण्यात आनंद घेतो, विशेषतः ज्या गोष्टी मला अधिक चांगले सोल्यूशन्स तयार करण्यात मदत करतात. टीमकडून शिकणे आणि स्वतःचा कोड सुधारत राहणे ही माझी प्रेरणा आहे."
        },
        {
          id: 5,
          question: "तुमचा कोड इतरांना समजावा यासाठी तुम्ही काय करता?",
          answer: "मी कोडला व्यवस्थित ठेवतो, स्पष्ट नावं वापरतो आणि आवश्यक तेथे कमेंट्स लिहितो. मी कोड शक्य तितका सोपा आणि समजण्यासारखा ठेवतो जेणेकरून कोणीही सहजपणे तो समजू शकेल."
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
