import React from 'react'

export default function AboutUs({ language }) {
    const content = {
        en: {
          title: "About Me",
          description: "Beyond writing clean code, I believe in crafting solutions that are impactful and user-friendly. As a developer, I enjoy collaborating across teams, learning emerging technologies, and transforming complex challenges into simple, elegant software. I value clear communication, continuous improvement, and building products that scale with real-world needs.",
          location: "Mumbai, India",
          experience: "2+ Years Experience",
          projects: "5+ Projects Completed"
        },
        hi: {
          title: "मेरे बारे में",
          description: "सिर्फ कोड लिखने से अधिक, मैं ऐसे समाधान बनाने में विश्वास करता हूं जो उपयोगकर्ता के लिए प्रभावशाली और उपयोगी हों। मैं टीमों के साथ मिलकर काम करना, नई तकनीकों को सीखना और जटिल समस्याओं को सरल सॉफ्टवेयर में बदलना पसंद करता हूं। मेरे लिए स्पष्ट संचार, निरंतर सुधार और व्यावहारिक जरूरतों के अनुसार समाधान बनाना बहुत महत्वपूर्ण है।",
          location: "मुंबई, भारत",
          experience: "2+ वर्ष का अनुभव",
          projects: "5+ प्रोजेक्ट पूर्ण"
        },
        mr: {
          title: "माझ्याबद्दल",
          description: "फक्त कोड लिहिणे नव्हे, तर उपयुक्त आणि परिणामकारक सोल्यूशन्स तयार करणे हे माझे ध्येय आहे. मी टीमबरोबर सहकार्य करताना, नवीन तंत्रज्ञान शिकताना आणि गुंतागुंतीच्या समस्यांचे साध्या सॉफ्टवेअरमध्ये रूपांतर करताना आनंद घेतो. स्पष्ट संवाद, सातत्यपूर्ण प्रगती आणि वापरकर्त्याच्या गरजांनुसार सोल्यूशन्स तयार करणे मला महत्त्वाचे वाटते.",
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
  )
}
