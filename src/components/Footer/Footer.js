import React from 'react';
import './Footer.style.css'; // Importujemy plik CSS ze stylami
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#4e4ffa' }}>
      <div className="footer-content">
        <div className="footer-info">
          <p>Email: example@example.com</p>
          <p>Address: 123 Example Street, City, Country</p>
          <p>Phone: +1234567890</p>
        </div>
        <ul className="footer-links">
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <div className="social-icons">
          <a href="#"><FacebookIcon /></a>
          <a href="#"><XIcon /></a>
          <a href="#"><InstagramIcon /></a>
        </div>
      </div>
    </footer>
  );
}
