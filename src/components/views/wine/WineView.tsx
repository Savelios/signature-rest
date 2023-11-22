import React, { useEffect, useState } from "react";
import "./WineView.css";
import { WineService } from "../../../services/WineService";
import WineData from "../../../dto/data/wine-data";
interface WineViewProps {
  wines: WineData[];
  selectedWineIndex: number;
  onImageChange: (index: number) => void;
}

export function WineView(props: WineViewProps) {
  const { wines, selectedWineIndex, onImageChange } = props;
  const selectedWine = wines[selectedWineIndex];

  if (!selectedWine) {
    return null;
  }

  return (
    <React.Fragment key={selectedWine.id}>
      <div className="wine-view__container">
        <div className="wine-view__separator"></div>
        <div className="wine-view__content">
          <h1 className="wine-view__title">
            Поль Роже Брют Резерв
            <h3 className="wine-view__title-2"> Pol Roger, Brut Reserve. France,</h3>
          </h1>
          <div className="wine-view__section-container">
            <div id="wine-view__section-1">
              <label className="label-title" >ИГРИСТОЕ ВИНО/ШАМПАНСКОЕ</label>
              <p className="wine__value-style" id="wine__type-value">{selectedWine.wineType}</p>
            </div>
            <div id="wine-view__section-2">
              <label className="label-title" >КРЕПОСТЬ</label>
              <p className="wine__value-style" id="wine__strength-value">{selectedWine.strength}</p>
            </div>
            <div id="wine-view__section-3">
              <label className="label-title" >ОБЪЕМ</label>
              <p className="wine__value-style" id="wine__volume-value">{selectedWine.volume}</p>
            </div>
          </div>
          <div className="wine-view__section-container">
            <div>
              <label className="label-title" >РЕГИОН</label>
              <p className="wine__value-style" id="wine__region-value">{selectedWine.region}</p>
            </div>
            <div className="manufacter__container">
              <label className="label-title" >ПРОИЗВОДИТЕЛЬ</label>
              <p className="wine__value-style" id="wine__manufacter-value">{selectedWine.manufacter}</p>
            </div>
          </div>
          <div className="wine-view__section-container">
            <div>
              <label className="label-title" >ВИНОГРАД</label>
              <p className="wine__value-style" id="wine__grape-value">{selectedWine.grapeType}</p>
            </div>
          </div>
          <div className="wine-view__section-container">
            <div>
              <label className="label-title" >ИДЕАЛЬНО ПОДХОДИТ К</label>
              <p className="wine__value-style" id="wine__idealFor-value">{selectedWine.additionally}</p>
            </div>
          </div>
          <div className="wine-view__section-container">
            <div>
              <label className="label-title" >А ЕЩЕ...</label>
              <p className="wine__value-style" id="wine__additionally-value">{selectedWine.additionally}</p>
            </div>
          </div>
          <button className="wine-view__btn">Записаться на дегустацию
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}