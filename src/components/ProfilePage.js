//src/components/ProfilePage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import avatar from '../assets/avatar.png';
import './ProfilePage.css';
import Footer from './Footer';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const formula = "E = mc^2";
  useEffect(() => {
    // Загружаем данные пользователя из localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (!storedUser) {
      navigate('/login'); // Если пользователь не авторизован, перенаправляем на страницу входа
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-page">
      {/* Обертка для всего содержимого */}
      <div className="app-container">
        {/* Навигационное меню */}
        <nav className="navbar">
          <ul>
            <li><a href="#completed-courses">Пройденные курсы</a></li>
            <li><a href="#available-courses">Доступные курсы</a></li>
            <li>
              <a href="#created-courses">Созданные курсы</a>
              <span className="admin-only">Только для админов</span>
            </li>
          </ul>
        </nav>
        <p>
            Одна из самых известных формул в физике: <InlineMath math={formula} />
          </p>
        {/* Главная секция с аватаром и профилем */}
        <div className="main-section">
          {/* Левая часть: аватар */}
          <div className="avatar-section">
            <img
              src={user.avatar || avatar}
              alt="User Avatar"
              className="profile-avatar"
            />
            {user.email}
          </div>
        </div>
      </div>

      {/* Футер */}
      <Footer />
    </div>
  );
};

export default ProfilePage;