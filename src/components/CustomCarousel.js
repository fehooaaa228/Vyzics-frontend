// src/components/CustomCarousel.js
import React, { useState, useEffect } from 'react';
import './CustomCarousel.css';
import ArrowLeft from '../assets/ArrowLeft'; // Импорт стрелки влево
import ArrowRight from '../assets/ArrowRight'; // Импорт стрелки вправо

const CustomCarousel = () => {
  const slides = [
    {
      title: 'Конспекты к урокам',
      description: 'Наличие информации в виде конспекта, для закрепления или повторения пройденного материала.',
    },
    {
      title: 'Создание тестов',
      description: 'Возможность для пользователей создавать тесты и делиться ими с друзьями при произведении дополнительной оплаты.',
    },
    {
      title: 'Тесты',
      description: 'По пройденной теории, с возможностью повторного прохождения при неудачной попытке.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  let intervalId; 

  useEffect(() => {
    intervalId = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="custom-carousel">
      {/* Стрелка влево */}
      <button onClick={goToPrevSlide} className="external-arrow-left">
        <ArrowLeft />
      </button>

      {/* Контейнер для слайдов */}
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Стрелка вправо */}
      <button onClick={goToNextSlide} className="external-arrow-right">
        <ArrowRight />
      </button>
    </div>
  );
};

export default CustomCarousel;