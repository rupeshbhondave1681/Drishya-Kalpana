import React from 'react'

export default function AboutUs({ language }) {
    const content = {
        en: {
          title: "About Me",
          description: "I am a passionate Full Stack Developer with expertise in modern web technologies. I love creating efficient, scalable solutions and staying updated with the latest industry trends.",
          location: "Mumbai, India",
          experience: "2+ Years Experience",
          projects: "5+ Projects Completed"
        },
        hi: {
          title: "मेरे बारे में",
          description: "मैं आधुनिक वेब तकनीकों में विशेषज्ञता रखने वाला एक जुनूनी फुल स्टैक डेवलपर हूं। मुझे कुशल, स्केलेबल समाधान बनाना और नवीनतम उद्योग रुझानों के साथ अपडेट रहना पसंद है।",
          location: "मुंबई, भारत",
          experience: "2+ वर्ष का अनुभव",
          projects: "5+ प्रोजेक्ट पूर्ण"
        },
        mr: {
          title: "माझ्याबद्दल",
          description: "मी आधुनिक वेब तंत्रज्ञानात तज्ञता असलेला एक उत्साही फुल स्टॅक डेव्हलपर आहे. मला कार्यक्षम, स्केलेबल सोल्यूशन्स तयार करणे आणि नवीनतम उद्योग ट्रेंड्सबरोबर अपडेट राहणे आवडते.",
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
