/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import basketImg from "../../../assets/basket-img.png";
import DishData from "../../../dto/data/dish-data";
import "./dish-view.css";

interface DishViewProps {
  dish: DishData;
  isActive: boolean;
  selectedCategory: number;
}

export function DishView(props: DishViewProps) {
  const { dish, isActive, selectedCategory } = props;

  const dishViewClass = isActive ? "dish-view active" : "main__dish-view_container";

  return (
    <div id={String(selectedCategory)} className={dishViewClass}>
      <React.Fragment>
        <div className="dish-view__pecularity-container">
          <p className="pecularity__name">особенности</p>
          <div className="pecularity__calories_container">
            <label className="label-text">калорийность</label>
            <p className="calories__value">300 Ккал / 100 г.</p>
          </div>
          <div className="pecularity__fats_container">
            <label className="label-text">белки
              <p className="label-text-value" id="protein-value">12% 120г.</p>
            </label>
            <label className="label-text">жиры
              <p className="label-text-value" id="fat-value">12% 8г.</p>
            </label>
            <label className="label-text">углеводы
              <p className="label-text-value" id="carbohydrates-value">12% 8г.</p>
            </label>
          </div>
          <p className="alergic-reaction_title">аллергические реакции </p>
          <div className="alergic-reaction_list">
            <p className="alergic-reaction-type">Octopus regularis</p>
            <p className="alergic-reaction-type">Tomatus</p>
          </div>
        </div>
        <div className="dish-view__dish-name-container">
          <h1 className="dish-view__dish-name">{dish.name}</h1>
        </div>
        <div className="dish-view__dish-plate_container">
          <img className="dish-view__dish-img" src={dish.image} alt="" />
        </div>

        <div className="dish-view__ingredients-container">
          <div className="dish-view__price-container">
            <p className="dish-view__price-title">2180₽</p>
            <img className="dish-view__basket-img" src={basketImg} alt="" />
          </div>
          <p className="dish-view__ingredients-title">Ингредиенты</p>
          <div className="dish-view__ingredients_list">
            <p className="dish-view__ingredient-type">Octopus regularis</p>
            <p className="dish-view__ingredient-type">Tomatus</p>
            <p className="dish-view__ingredient-type">Sousus</p>
            <p className="dish-view__ingredient-type">Chesnokus</p>
          </div>
          <p className="dish-view__recomendation-title">вкус лучше всего раскроется с</p>
          <div className="dish-view__recomendation_list">
            <p className="dish-view__recomendation-type">Поль Роже Брют Резерв</p>
            <p className="dish-view__recomendation-type">Бласон Руж" Креман Брют</p>
            <p className="dish-view__recomendation-type">Лансон Блэк Лейбл Брют</p>

          </div>
        </div>
      </React.Fragment>
    </div>
  );
}
