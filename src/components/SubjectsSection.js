// src/components/SubjectsSection.js
import React, { useContext } from 'react';
import './SubjectsSection.css';
import SubjectCard from './SubjectCard';
import electricityIcon from '../assets/electricity.svg';
import thermodynamicsIcon from '../assets/thermodynamics.svg';
import opticsIcon from '../assets/optics.svg';
import mechanicsIcon from '../assets/mechanics.svg';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const subjectsData = [
  {
    id: 1,
    icon: electricityIcon,
    title: 'Электричество',
    description: 'Это поток заряженных частиц, которые могут перемещаться по проводнику.',
    link: '#electricity',
  },
  {
    id: 2,
    icon: thermodynamicsIcon,
    title: 'Термодинамика',
    description: 'Раздел физики, изучающий тепловые процессы без учёта молекулярного строения тел.',
    link: '#thermodynamics',
  },
  {
    id: 3,
    icon: opticsIcon,
    title: 'Оптика',
    description: 'Раздел физики, изучающий природу света, его свойства, закономерности распространения в различных средах.',
    link: '#optics',
  },
  {
    id: 4,
    icon: mechanicsIcon,
    title: 'Механика',
    description: 'Раздел физики, изучающий движение материальных тел и взаимодействие между ними.',
    link: '#mechanics',
  },
];

const SubjectsSection = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleButtonClick = (subject) => {
    console.log(`Переход к изучению "${subject.title}"`);
    if(!user){
      navigate('/login');
    }
  };

  return (
    <section className="subjects-section">
      <h2>Разделы физики которые вы изучите вместе с нами!</h2>
      <div className="cards-container">
        {subjectsData.map((subject) => (
          <SubjectCard
            key={subject.id}
            icon={subject.icon}
            title={subject.title}
            description={subject.description}
            onClick={() => handleButtonClick(subject)}
          />
        ))}
      </div>
    </section>
  );
};

export default SubjectsSection;