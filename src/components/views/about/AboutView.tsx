import React from 'react'
import firstCard from "../../../assets/first-card.png"
import secondCard from "../../../assets/second-card.png"
import thirdCard from "../../../assets/third-card.png"
import cardMetals from "../../../assets/card-metals.png"

import './AboutView.css'

const AboutView = () => {
    return (
        <div className='about-view__container'>
            <div className='about-view__card' id='about-view__first-card' style={{ backgroundImage: `url(${firstCard})` }}>
                <h1>ОТ НАC<span>С ЛЮБОВЬЮ</span></h1>
                <p>В каждом нашем блюде есть секретный ингредиент – любовь. Любовь к еде и к нашим клиентам.</p>
                <button>Забронировать столик</button>
            </div>
            <div className='about-view__card' id='about-view__second-card' style={{ backgroundImage: `url(${secondCard})` }}>
                <h1>наша <span>нонцепция</span></h1>
                <p>Наш ресторан Signature Art транслирует уникальную концепцию арт-пространства. Мы дарим гостям новый опыт, возможность прожить новый экспириенс – стать ценителем искусства и дегустатором.
                    Высотка на Котельнической набережной - примечательное место Москвы, место притяжения, дом-эпоха, дом личностей, дом стиля. Уже это требует наполнения вкусом и искусством, эмоциями и красотой.Рады сообщить вам, что уже в марте мы откроем для вас двери арт ресторана, где вы сможете не просто вкусно поесть, а также ощутить новое особенное внимательное к вам пространство.</p>
            </div>
            <div className='about-view__card' id='about-view__third-card' style={{ backgroundImage: `url(${thirdCard})` }}>
                <h1>команда <span>профессионалов</span></h1>
                <img className="about-view__card-metals" src={cardMetals} alt="img" />
                <p>Наша команда оправдает ваши самые высокие ожидания</p>
            </div>
        </div>
    )
}

export default AboutView