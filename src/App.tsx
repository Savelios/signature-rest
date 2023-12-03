import React, { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import PicturePage from "./pages/Picture/PicturePage";
import WinePage from "./pages/Wine/WinePage";
import ContactsPage from "./pages/Contacts/ContactsPage";
import { Footer } from "./ui/footer/Footer";
import { Header } from "./ui/header/header";

import "./assets/fonts/FuturaNewLight-Reg.woff";
import "./assets/fonts/FuturaNewLight-Reg.ttf";

import "./Reset.css";
import "./App.css";
import "./assets/fonts/fonts.css";

import ReserveForm from "./components/forms/reserve/reserve-form";

import mainBackground from "../src/assets/main-background.png";
import goldBackground from "../src/assets/gold-background.png";
import primaryBackground from "../src/assets/primary-background.png";

import wineBackground from "../src/assets/primary-background.png";

import pictureBackground from "../src/assets/picture-page-background.png";
import { DishPage } from "./pages/Dish/DishPage";
import { MainPage } from "./pages/Main/MainPage";

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

  let className = "";
  let srcUrl;

  switch (location.pathname) {
    case "/":
      className = "main-background";
      srcUrl = mainBackground;
      break;
    case "/about":
      className = "gold-background";
      srcUrl = goldBackground;
      break;
    case "/pictures":
      className = "picture-page-background";
      srcUrl = pictureBackground;
      break;
    case "/wine-gallery":
      className = "wine-background";
      srcUrl = wineBackground;
      break;
    case "/menu":
      className = "primary-background";
      srcUrl = primaryBackground;
      break;
    case "/contacts":
      className = "gold-background";
      srcUrl = goldBackground;
      break;
    default:
      className = "default-class";
      break;
  }

  useEffect(() => {
    const footer = document.getElementsByClassName("footer");
    if (location.pathname === "/pictures" && windowSize.current[0] > 0) {
      footer[0].setAttribute("style", "display:none;");
    } else {
      footer[0].setAttribute("style", "display:flex;  height:unset; ");
    }

    if (location.pathname === "/pictures" && windowSize.current[0] <= 715) {
      footer[0].setAttribute("style", "display:none;");
    } else {
      footer[0].setAttribute("style", "display:flex;  height:unset; ");
    }
  }, [location]);

  useEffect(() => {
    const footer = document.getElementsByClassName("footer");
    if (
      location.pathname === "/wine-gallery" ||
      (location.pathname === "/menu" && windowSize.current[0] <= 715)
    ) {
      footer[0].setAttribute("style", "display:none;");
    } else {
      footer[0].setAttribute("style", "display:flex;");
    }

    if (location.pathname === "/contacts" && windowSize.current[0] <= 715) {
      footer[0].setAttribute("style", "display:none;");
    } else {
      footer[0].setAttribute("style", "display:flex;");
    }
  }, [location]);

  return (
    <div className="App">
      {/* <img className={className} src={srcUrl} /> */}
      <div className="container">
        <div
          className={className}
          style={{ backgroundImage: `url(${srcUrl})`, zIndex: "-1" }}
        >
          <Header
            onOpenModalMenu={handleOpenModalMenu}
            route={window.location.pathname}
          />
          <Routes>
            <Route
              path="/"
              element={<MainPage onOpenModal={handleOpenModal} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/pictures"
              element={<PicturePage onOpenModal={handleOpenModal} />}
            />
            <Route path="/menu" element={<DishPage />} />
            <Route path="/wine-gallery" element={<WinePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
          </Routes>
        </div>
      </div>
      <Footer onOpenModal={handleOpenModal} route={""} />
      {isModalOpen && <ReserveForm onCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
