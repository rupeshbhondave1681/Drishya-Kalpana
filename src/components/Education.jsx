import React from 'react'

export default function Education({ language }) {
    const content = {
        en: { title: "Education" },
        hi: { title: "शिक्षा" },
        mr: { title: "शिक्षण" }
      };
    
      const education = {
        en:[
        {
          degree: "BE in Computer Science Engineering",
          institution: "Shah and Anchor Kutchhi Engineering College, Chembur, Mumbai, Maharashtra 400088",
          year: "2019 - 2023",
          cgpa: "CGPA: 8.2/10",
          location: "Mumbai, India"
        },
        {
          degree: "HSC - Maharashtra State Board",
          institution: "Pemraj Sarda College. Ahmednagar, Maharashtra 414001",
          year: "2018 - 2019",
          cgpa:"Grade: First Class",
          location: "Ahmednagar, India"
        },
        {
          degree: "SSC - Maharashtra State Board",
          institution: "AES Bhausaheb Firodiya High School, Ahmednagar, Maharashtra 414001 ",
          year: "2016 - 2017",
          cgpa:"Grade: First Class",
          location: "Maharashtra, India"
        }
      ],
      hi: [
        {
          degree: "कंप्यूटर साइंस इंजीनियरिंग में बीई",
          institution: "शाह एंड एंकर कच्छी इंजीनियरिंग कॉलेज, चेंबूर, मुंबई, महाराष्ट्र 400088",
          year: "2019 - 2023",
          cgpa: "सीजीपीए: 8.2/10",
          location: "मुंबई, भारत"
        },
        {
          degree: "एचएससी - महाराष्ट्र राज्य बोर्ड",
          institution: "पेमराज सरडा कॉलेज, अहमदनगर, महाराष्ट्र 414001",
          year: "2018 - 2019",
          cgpa: "ग्रेड: प्रथम श्रेणी",
          location: "अहमदनगर, भारत"
        },
        {
          degree: "एसएससी - महाराष्ट्र राज्य बोर्ड",
          institution: "एईएस भाऊसाहेब फिरोदिया हाई स्कूल, अहमदनगर, महाराष्ट्र 414001",
          year: "2016 - 2017",
          cgpa: "ग्रेड: प्रथम श्रेणी",
          location: "अहमदनगर, भारत"
        }
      ],
      mr: [
        {
          degree: "कंप्युटर सायन्स अभियांत्रिकी मध्ये बीई",
          institution: "शाह अँड अँकर कच्छी इंजिनिअरिंग कॉलेज, चेंबूर, मुंबई, महाराष्ट्र 400088",
          year: "2019 - 2023",
          cgpa: "सीजीपीए: 8.2/10",
          location: "मुंबई, भारत"
        },
        {
          degree: "एचएससी - महाराष्ट्र राज्य मंडळ",
          institution: "पेमराज सरडा कॉलेज, अहमदनगर, महाराष्ट्र 414001",
          year: "2018 - 2019",
          cgpa: "ग्रेड: फर्स्ट क्लास",
          location: "अहमदनगर, भारत"
        },
        {
          degree: "एसएससी - महाराष्ट्र राज्य मंडळ",
          institution: "एईएस भाऊसाहेब फिरोदिया हायस्कूल, अहमदनगर, महाराष्ट्र 414001",
          year: "2016 - 2017",
          cgpa: "ग्रेड: फर्स्ट क्लास",
          location: "अहमदनगर, भारत"
        }
      ]
            
    }
    
  return (
  //   <section id="education" className="education-section">
  //   <div className="container">
  //     <h2 className="section-title">{content[language].title}</h2>
  //     <div className="timeline">
  //       {education.map((edu, index) => (
  //         <div key={index} className="timeline-item">
  //           <div className="timeline-marker"></div>
  //           <div className="timeline-content">
  //             <h3>{edu.degree}</h3>
  //             <h4>{edu.institution}</h4>
  //             <p className="timeline-year">{edu.year}</p>
  //             {edu.cgpa && <p className="timeline-cgpa">{edu.cgpa}</p>}
  //             <p className="timeline-location">{edu.location}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // </section>
  <section id="education" className="education-section">
  <div className="container">
    <h2 className="section-title">{content[language].title}</h2>
    <div className="timeline">
      {(education[language] || []).map((edu, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{edu.degree}</h3>
            <h4>{edu.institution}</h4>
            <p className="timeline-year">{edu.year}</p>
            {edu.cgpa && <p className="timeline-cgpa">{edu.cgpa}</p>}
            <p className="timeline-location">{edu.location}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  )
}
