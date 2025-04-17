import React from 'react';
import './TopicSelectionPage.css';
import Footer from './Footer';

const topicsData = {
  electricity: {
    title: 'Электричество',
    topics: [
      { id: 1, title: 'Электрический ток', completed: true },
      { id: 2, title: 'Источники электрического тока', completed: true },
      { id: 3, title: 'Параметры и характеристики электрического тока' },
      { id: 4, title: 'Поведение электрического тока в различных средах' },
    ],
  },
  thermodynamics: {
    title: 'Термодинамика',
    topics: [
      { id: 1, title: 'Электрический ток' },
      { id: 2, title: 'Источники электрического тока' },
      { id: 3, title: 'Параметры и характеристики электрического тока' },
      { id: 4, title: 'Поведение электрического тока в различных средах' },
    ],
  },
  optics: {
    title: 'Оптика',
    topics: [
      { id: 1, title: 'Электрический ток' },
      { id: 2, title: 'Источники электрического тока' },
      { id: 3, title: 'Параметры и характеристики электрического тока' },
      { id: 4, title: 'Поведение электрического тока в различных средах' },
    ],
  },
  mechanics: {
    title: 'Механика',
    topics: [
      { id: 1, title: 'Прямолинейное равномерное движение' },
      { id: 2, title: 'Источники электрического тока' },
      { id: 3, title: 'Параметры и характеристики электрического тока' },
      { id: 4, title: 'Поведение электрического тока в различных средах' },
    ],
  },
};

const TopicSelectionPage = () => {
  return (
    <div className="topic-selection-page">
      <div className='content'>
        <h1>Физика</h1>
        <div className="topics-grid">
          {/* Первый столбец */}
          <div className="column">
            <h2>{topicsData.electricity.title}</h2>
            <ul>
              {topicsData.electricity.topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.title}`}>{topic.title}</a> {/* Ссылка для синего текста */}
                  {topic.completed && <span className="completed">✓</span>}
                </li>
              ))}
            </ul>

            <h2>{topicsData.optics.title}</h2>
            <ul>
              {topicsData.optics.topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.title}`}>{topic.title}</a> {/* Ссылка для синего текста */}
                </li>
              ))}
            </ul>
          </div>

          {/* Второй столбец */}
          <div className="column">
            <h2>{topicsData.thermodynamics.title}</h2>
            <ul>
              {topicsData.thermodynamics.topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.title}`}>{topic.title}</a> {/* Ссылка для синего текста */}
                </li>
              ))}
            </ul>

            <h2>{topicsData.mechanics.title}</h2>
            <ul>
              {topicsData.mechanics.topics.map((topic) => (
                <li key={topic.id}>
                  <a href={`#${topic.title}`}>{topic.title}</a> {/* Ссылка для синего текста */}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
        </div>
    </div>
  );
};

export default TopicSelectionPage;