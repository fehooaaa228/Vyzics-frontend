// src/components/WhyUsSection.js
import React from 'react';
import './WhyUsSection.css';

const WhyUsSection = () => {
  return (
    <section className="why-us-section">
      <div className="content">
        <h2>Почему именно мы?</h2>
        <p>
          Потому что наш проект самый крутой вы
          <br />
          выфлицв вм выфывы. Волвы сджмс м
          <br />
          выжфв мвжы с вфыджв , лвдфывф
        </p>
      </div>
      <div className="graphic-element">
        {/* SVG-цилиндр */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 240"
          width="200"
          height="240"
        >
          {/* Верхняя часть цилиндра (эллипс) */}
          <ellipse
            cx="100"
            cy="40"
            rx="80"
            ry="20"
            fill="url(#gradient)"
          ></ellipse>

          {/* Боковая часть цилиндра (прямоугольник с градиентом) */}
          <rect
            x="20"
            y="40"
            width="160"
            height="160"
            fill="url(#gradient)"
          ></rect>

          {/* Нижняя часть цилиндра (эллипс) */}
          <ellipse
            cx="100"
            cy="200"
            rx="80"
            ry="20"
            fill="url(#gradient)"
          ></ellipse>

          {/* Градиент для цилиндра */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4a90e2" stopOpacity="0.8"></stop>
              <stop offset="50%" stopColor="#4a90e2" stopOpacity="1"></stop>
              <stop offset="100%" stopColor="#4a90e2" stopOpacity="0.8"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default WhyUsSection;