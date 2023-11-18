import React from 'react'
import './MainPage.css'
import expositionLine from '../../assets/exposition-line.png'
import reserveLine from "../../assets/reserve-line.png"

const MainPage = () => {
  return (
    <div className='main__page'>
      <div id="main-page__exposition_container">
        <p id="main-page__exposition_container-name">Экспозиция</p>
        <p id="main-page__exposition_container-content">C 23 марта у нас проходит выставка трех художников – @ivan_fedotov_art @oksanazarova, @pechenevskayalili</p>
      </div>
      <img id="main-page__exposition-line" src={expositionLine} alt="" />

      <div id="main-page__reserve-container">Забронировать столик</div>
      <img id="main-page__reserve-line" src={reserveLine} alt="" />

      <div id="main-page__menu_container">
        <p id="main-page__menu_container-name">Экспозиция</p>
        <p id="main-page__menu_container-content">C 23 марта у нас проходит выставка трех художников – @ivan_fedotov_art @oksanazarova, @pechenevskayalili</p>
      </div>

      
    </div>
  )
}

export default MainPage