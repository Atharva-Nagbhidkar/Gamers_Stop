import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>Gamers Stop is your one-stop shop for all things gaming. We offer the latest games, consoles, and accessories to enhance your gaming experience.</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@gamersstop.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Gaming Street, Gamertown, GT 12345</p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i> Facebook</a></li>
            <li><a href="#"><i className="fab fa-twitter"></i> Twitter</a></li>
            <li><a href="#"><i className="fab fa-instagram"></i> Instagram</a></li>
            <li><a href="#"><i className="fab fa-youtube"></i> YouTube</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Gamers Stop. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
