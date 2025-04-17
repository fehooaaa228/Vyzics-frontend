// src/context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Флаг загрузки

  useEffect(() => {
    // Загружаем данные пользователя из localStorage при загрузке приложения
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedToken = localStorage.getItem('token');
    console.log('Stored User:', storedUser);
    console.log('Stored Token:', storedToken);
    if (storedUser && storedToken) {
      setUser(storedUser);
      setToken(storedToken);
    }
    setIsLoading(false); // Загрузка завершена
  }, []);

  const login = (userData, accessToken) => {
    setUser(userData);
    setToken(accessToken);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', accessToken);
    console.log('Login successful. User and token saved to localStorage.');
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    console.log('Logout successful. User and token removed from localStorage.');
  };

  return (
    <UserContext.Provider value={{ user, token, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};