import React, { useContext } from 'react';
import './Header.css';
import logo from '../assets/vvv.png';
import { Link, useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import { UserContext } from '../context/UserContext';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Очищаем данные пользователя и перенаправляем на главную страницу
    logout();
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Vyzics Logo" />
        <span>Vyzics</span>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              Главная
            </Link>
          </li>
          <li>
            <a href="#about" className="nav-link">
              О нас
            </a>
          </li>
          <li>
            <a href="#tests" className="nav-link">
              Все тесты
            </a>
          </li>
          <li>
            <a href="#create-test" className="nav-link">
              Создать тест
            </a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        {user ? (
          <>
            <img
              src={user.avatar || avatar}
              alt="Profile Avatar"
              className="profile-avatar"
              onClick={() => navigate('/profile')}
            />
            <button onClick={handleLogout}>Выйти</button>
          </>
        ) : (
          <>
            <Link to="/login" className="button primary">
              Войти
            </Link>
            <Link to="/registration" className="button">
              Регистрация
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;