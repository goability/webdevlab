import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2024 WebDevLab. All rights reserved.</p>
          <p>Built with React & Vite</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
