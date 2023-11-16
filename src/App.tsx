import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/Main/MainPage';
import MainPage from './pages/Main/MainPage';
import AboutPage from './pages/About/AboutPage';
import PicturePage from './pages/Picture/PicturePage';
import MenuPage from './pages/Menu/MenuPage';
import WinePage from './pages/Wine/WinePage';
import ContactsPage from './pages/Contacts/ContactsPage';
import { Footer } from './ui/footer/Footer';
import './Reset.css'
import { Header } from './ui/header/Header';

function App() {
  const windowSize = useRef<number[]>([window.innerWidth, window.innerHeight]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenModalMenu = () => {
    setIsModalMenuOpen(true);
  };
  const handleCloseModalMenu = () => {
    setIsModalMenuOpen(false);
  };

  const location = useLocation();

  let className = '';

  switch (location.pathname) {
    case '/':
      className = 'main-background';
      break;
    case '/about':
      className = 'gold-background';
      break;
    case '/exposition':
      className = 'primary-background';
      break;
    case '/wine-gallery':
      className = 'primary-background';
      break;
    case '/menu':
      className = 'primary-background';
      break;
    case '/contacts':
      className = 'gold-background';
      break;
    default:
      className = 'default-class';
      break;
  }

  return (
    <div className="App">
      <img className={className} />
      <Header
        onOpenModalMenu={handleOpenModalMenu}
        route={window.location.pathname}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/picture" element={<PicturePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/wine" element={<WinePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
