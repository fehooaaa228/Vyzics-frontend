// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Если у вас есть вопросы/предложения, свяжитесь с нами:
        </p>
        <p>Email: asponyatov@mail.ru</p>
        <p>
          Telegram: <a href="https://t.me/yeafonya">@yeafonya</a>
        </p>
      </div>
      <div className="copyright">
        © 2025 - Vyzics
      </div>
    </footer>
  );
};

export default Footer;