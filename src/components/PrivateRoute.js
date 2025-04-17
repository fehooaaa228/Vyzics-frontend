//src/components/PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = React.useContext(UserContext);
  const location = useLocation();

  console.log('PrivateRoute - User:', user);

  // Если данные еще загружаются, показываем заглушку
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Если пользователь залогинен, отображаем дочерние компоненты
  // Если нет, перенаправляем на страницу входа
  return user ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;