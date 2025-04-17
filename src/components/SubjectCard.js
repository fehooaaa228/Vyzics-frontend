// src/components/SubjectCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SubjectCard.css';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const SubjectCard = ({ icon, title, description }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleButtonClick = () => {
    if(!user){
      navigate('/login');
    }
    else{
      navigate('/topics');
    }
  };

  
  return (
    <div className="subject-card">
      <div className="icon-container">
        <img src={icon} alt={`${title} Icon`} /> {/* Отображаем иконку */}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleButtonClick}>Перейти к изучению</button>
    </div>
  );
};

export default SubjectCard;