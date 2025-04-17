import React, { useState } from 'react';
import './RegistrationPage.css'; // Импортируем CSS для стилизации
import logo from '../assets/vvv.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleTermsChange = (e) => {
    setTermsChecked(e.target.checked);
  };


  const navigate = useNavigate()
  const handleclick = async() =>{
    await axios.post('https://vyzics-api.onrender.com/register', {
      "email":email,
      "password":password,
    }, { headers: {
      "Content-Type": "application/json"
    }
    })
    .then((res) => {
      navigate("/login")
    })
    .catch((error) => {
      console.log(`lezhat ${error}`)
    })
  }


  return (
    <div className="registration-container">
      <div className="registration-card">
        <header>
          <img src={logo} alt="Vyzics Logo" className="logo" />
          <h2>Добро пожаловать на Vyzics</h2>
        </header>
        
        {/* Форма регистрации */}
        <div className='form'>
          <label htmlFor="email">Электронная почта</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Адрес электронной почты"
            required
          />

          <label htmlFor="password">Пароль</label>
          <div className="password-input-container">
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Пароль"
              required
            />
            <span className="eye-icon">👁️</span> {/* Иконка для показа/скрытия пароля */}
          </div>

          {/* Согласие с условиями */}
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={termsChecked}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms">
              Создавая учётную запись, я соглашаюсь с{' '}
              <a href="#" className="terms-link">
                Условиями использования
              </a>{' '}
              и{' '}
              <a href="#" className="terms-link">
                Политикой конфиденциальности.
              </a>
            </label>
          </div>

          {/* Кнопка "Далее" */}
          <button type="submit" className="next-button" onClick = {handleclick}>
            Далее
          </button>

          {/* Разделитель */}
          <hr />


          {/* Ссылка для входа */}
          <p className="login-link">
            Уже есть аккаунт?{' '}
            <a href="/login">Войти в систему</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;