// src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyUsSection from './components/WhyUsSection';
import SubjectsSection from './components/SubjectsSection';
import CustomCarousel from './components/CustomCarousel';
import Footer from './components/Footer';
import RegistrationPage from './components/RegistrationPage';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import TopicSelectionPage from './components/TopicSelectionPage';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider> {/* Оборачиваем приложение в UserProvider */}
      <Router>
        <div className="app">
          <Header />
          <Routes>
            {/* Главная страница */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <WhyUsSection />
                  <SubjectsSection />
                  <h2 style={{ textAlign: 'center', marginTop: '4rem', marginBottom: '2rem' }}>
                    Что включают в себя наши курсы
                  </h2>
                  <CustomCarousel />
                  <Footer />
                </>
              }
            />

            {/* Страница регистрации */}
            <Route path="/registration" element={<RegistrationPage />} />

            {/* Страница входа */}
            <Route path="/login" element={<LoginPage />} />

            {/* Защищенные маршруты */}
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <ProfilePage />
                </PrivateRoute>
              }
            />
            <Route
              path="/topics/"
              element={
                <PrivateRoute>
                  <TopicSelectionPage />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;