import React from 'react'

export default function Footer({ language }) {
    const currentYear = new Date().getFullYear();

  const content = {
    en: `© ${currentYear} Developed by Rupesh Bhondave`,
    hi: `© ${currentYear} रूपेश भोंडवे द्वारा विकसित`,
    mr: `© ${currentYear} रुपेश भोंडवे यांनी विकसित केले`
  };

  return (
    <footer className="footer-section">
    <div className="footer-container">
      <p className="footer-text">{content[language]}</p>
    </div>
  </footer>
  )
}
