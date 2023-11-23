import React from 'react'
import './MainPage.css'
import expositionLine from '../../assets/exposition-line.png'
import reserveLine from "../../assets/reserve-line.png"
import menuLine from "../../assets/menu-line.png"
import guestLine from "../../assets/guest-line.png"
import contactsLine from "../../assets/contacts-line.png"
import wineLine from "../../assets/wine-line.png"


import menuIco from "../../assets/menu-ico.png"
import glassIco from "../../assets/glass-ico.png"
import menuSeparatorIco from "../../assets/menu-separator.png"
import aboutImg from "../../assets/main-about-img.png"
import { useNavigate } from 'react-router-dom'

import mainBackground from "../../assets/main-background.png"

type ModalProps = {
  onOpenModal: () => void;
};

export const MainPage: React.FC<ModalProps> = ({
  onOpenModal,
}) => {

  const navigate = useNavigate();

  // return (
  //   <div className='main__page'>
  //     <div id="main-page__exposition_container">
  //       <p id="main-page__exposition_container-name" onClick={() => navigate("/pictures")}>Экспозиция</p>
  //       <p id="main-page__exposition_container-content">C 23 марта у нас проходит выставка трех художников – @ivan_fedotov_art @oksanazarova, @pechenevskayalili</p>
  //     </div>
  //     <img id="main-page__exposition-line" src={expositionLine} alt="" />

  //     <div id="main-page__reserve-container" onClick={onOpenModal}>Забронировать столик</div>
  //     <img id="main-page__reserve-line" src={reserveLine} alt="" />

  //     <div id="main-page__menu_container">
  //       <p id="main-page__menu_container-name" onClick={() => navigate("/menu")}>Меню</p>
  //       <p id="main-page__menu_container-content">
  //         <div id="main__page_menu-content">
  //           <img src={menuIco} alt="" />
  //           <p>устрицы из Нормандии<p>приходите к нам на закрытие сезона</p></p>
  //         </div>
  //         <img src={menuSeparatorIco} alt="" />
  //         <div id="main__page_menu-content">
  //           <img src={glassIco} alt="" />
  //           <p>начни день правильно<p>с 6 до 10 утра – бокал Prosecco в подарок при заказе кофе
  //           </p></p>
  //         </div>
  //       </p>
  //     </div>
  //     <img id="main-page__menu-line" src={menuLine} alt="" />

  //     <div id="main-page__guest-container">Оформить карту гостя</div>
  //     <img id="main-page__guest-line" src={guestLine} alt="" />

  //     <div id="main-page__about_container">
  //       <p id="main-page__about_container-name" onClick={() => navigate("/about")}>О нас</p>
  //       <p id="main-page__about_container-content">
  //         Наш ресторан Signature Art транслирует уникальную концепцию арт-пространства. Мы дарим гостям новый опыт, возможность прожить новый экспириенс – стать ценителем искусства и дегустатором.
  //         <a href="">Подробности...</a>
  //       </p>
  //     </div>

  //     <div id="main-page__contacts-container" onClick={() => navigate("/contacts")}>Контакты</div>
  //     <img id="main-page__contacts-line" src={contactsLine} alt="" />

  //     <div id="main-page__wine-container" onClick={() => navigate("/wine")}>Винная галерея</div>
  //     <img id="main-page__wine-line" src={wineLine} alt="" />
  //   </div>
  // )

  return (
    <div className='main__page'>
      <img className='main-background-img' src={mainBackground} alt="" />
      <div className='main__page-container'>

      </div>
    </div>
  )
}
