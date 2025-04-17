//src/components/LoginPage.js
import React, { useContext, useState } from 'react';
import './LoginPage.css'; // Импортируем CSS для стилизации
import logo from '../assets/vvv.png'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => `%${c.charCodeAt(0).toString(16).padStart(2, '0')}`)
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Ошибка при декодировании токена:', error);
      return null;
    }
  };

  const handleClick = async() =>{
    if(!email || !password){
      setError('Все поля должны быть заполнены');
      return;
    }

    try{
      const request = await axios.post('https://vyzics-api.onrender.com/login', { email, password });

      const accessToken = request.data.accessToken;
      if(!accessToken){
        throw new Error('Ну типа нет токена');
      }

      // Декодируем токен
      const decodedToken = parseJwt(accessToken);

      const userData = { 
        email: decodedToken.email || email,
      };
      
      login(userData, accessToken);
      navigate('/');
    } catch(error){
      console.log('LEZHAT`', error);
      setError('Неправильная почта или пароль');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <header>
          <img src={logo} alt="Vyzics Logo" className="logo" />
          <h2>Войти</h2>
        </header>

        {/* Форма входа */}
        <div className="form">
          {error && <p className="error-message">{error}</p>} {/* Отображение ошибки */}

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
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Пароль"
            required
          />

          <button type="submit" className="next-button" onClick={handleClick}>
            Далее
          </button>

          {/* Разделитель */}
          <hr />

          {/* Ссылка для создания аккаунта */}
          <p className="create-account-link">
            У вас нет аккаунта?{' '}
            <a href="/registration">Создать аккаунт</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;