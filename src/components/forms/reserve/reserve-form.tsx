import React, { ReactNode } from "react";
import closeFormBtn from "../../../assets/close-form-btn.png"
import closeFormBtnMob from "../../../assets/close-modal-btn.png"
import reserveLogo from "../../../assets/gold-logo.png"
import { CheckBox } from "../../../ui/checkbox/checkbox";

import "./reserve-form.css";

type ModalProps = {
  onCloseModal: () => void;
};

const ReserveForm: React.FC<ModalProps> = ({ onCloseModal }) => {
  return (
    <>
      <div className="reserve__container"  >
        <div className="reserve__form">
          <img className="reserve-form__close-btn" src={closeFormBtn} alt="" onClick={onCloseModal} />
          {/* <img className="reserve-close-form-button-mob" src={"closeFormBtnMob"} alt="" onClick={onCloseModal} /> */}
          <img className="reserve-form__logo" src={"reserveLogo"} alt="" />
          <h2 className="reserve-form__title">ЗАБРОНИРОВАТЬ<span>СТОЛИК</span></h2>
          <div className="reserve-form__input-container">
            {/* <div className="reserve-form__separator"></div> */}

            <label className="reserve__from_prefix-label" htmlFor="reserve_uname-id">
              ПРЕДСТАВЬТЕСЬ ПОЖАЛУЙСТА
            </label>
            <input
              type="text"
              id="reserve_uname-id"
              placeholder="Виктория"
              className="reserve__form_input-value"
              required
              minLength={2}
              maxLength={18}
            ></input>
            <label className="reserve__from_prefix-label" htmlFor="reserve_phone-id">
              ТЕЛЕФОН
            </label>
            <input
              type="text"
              id="reserve_phone-id"
              placeholder="+7 ( - - - ) - - -  - -  - -"
              className="reserve__form_input-value"
              required
              minLength={11}
              maxLength={11}
            ></input>
            <label className="reserve__from_prefix-label" htmlFor="reserve__date-id">
              ДАТА
            </label>
            <input
              type="datetime-local"
              id="reserve__date-id"
              className="reserve__form_input-value"
              placeholder="18 апреля 2023  18:00"
              required
            ></input>
            <label className="reserve__from_prefix-label" htmlFor="reserve__guest-id">
              НАС БУДЕТ
            </label>
            <input
              type="guest"
              id="reserve__guest-id"
              className="reserve__form_input-value"
              placeholder="4 гостя"
              required
            ></input>
          </div>
          <button className="reserve__form-button">Забронировать столик</button>
          <div className="reserve__form_reminder-container">
            <p>Напомнить мне о бронировании</p>
            <CheckBox />
          </div>
          <p className="reserve__form_reminder-text">
            Вам придет пуш-уведомление о бронировании, чтобы мы с вами точно
            встретились :)
          </p>
        </div>
      </div>
    </>
  );
}
export default ReserveForm;
