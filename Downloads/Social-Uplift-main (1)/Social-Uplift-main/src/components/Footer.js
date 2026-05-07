import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo">Social <span>Uplift</span></div>
          <p>We're not just making content — we're telling your story in a way people can't scroll past.</p>
          <div className="social-links">
            {/* Added target="_blank" to open in new tab */}
            <a href="https://www.instagram.com/socialuplift.in/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/socialuplift-in/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Social Media Management</a></li>
              <li><a href="#services">Influencer Marketing</a></li>
              <li><a href="#services">Content Creation</a></li>
              <li><a href="#services">Event Planning</a></li>
            </ul>
          </div>
          
          <div className="footer-quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#why-us">Why Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2026 Social Uplift. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;