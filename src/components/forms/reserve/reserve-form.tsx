import React, { ReactNode } from "react";
import "./reserve-form.css";
// import closeFormBtn from "../../../assets/close-form-btn.png"
// import closeFormBtnMob from "../../../assets/close-modal-btn.png"
// import layoutImg from '../../../assets/reserve-form-layout.png'
// import reserveLogo from "../../../assets/gold-logo.png"
import { CheckBox } from "../../../ui/checkbox/checkbox";


type ModalProps = {
  onCloseModal: () => void;
};

const ReserveForm: React.FC<ModalProps> = ({ onCloseModal }) => {
  return (
    <>
      <div className="main-reserve-container"  >
        <div className="reserve-container">
          {/* <div className="reserve-vertical-line"></div> */}
          <div className="close-from-container">
            <img className="reserve-close-form-button" src={"closeFormBtn"} alt="" onClick={onCloseModal} />
            <img className="reserve-close-form-button-mob" src={"closeFormBtnMob"} alt="" onClick={onCloseModal} />
          </div>
          <img className="reserve-logo" src={"reserveLogo"} alt="" />
          <h2 className="reserve-title">ЗАБРОНИРОВАТЬ<p className="reserve-title-last-word">СТОЛИК </p></h2>
          <div className="input-items-main-container">
            <div className="input-items-container">
              <label className="name-prefix-label" htmlFor="uname">
                ПРЕДСТАВЬТЕСЬ ПОЖАЛУЙСТА
              </label>
              <input
                type="text"
                id="uname"
                placeholder="Виктория"
                className="name-input"
                required
                minLength={2}
                maxLength={18}
              ></input>
              <label className="phone-prefix-label" htmlFor="phone">
                ТЕЛЕФОН
              </label>
              <input
                type="text"
                id="phone"
                placeholder="+7 ( - - - ) - - -  - -  - -"
                className="phone-input"
                required
                minLength={11}
                maxLength={11}
              ></input>
              <label className="date-prefix-label" htmlFor="date">
                ДАТА
              </label>
              <input
                type="datetime-local"
                id="date"
                className="date-input"
                placeholder="18 апреля 2023  18:00"
                required
              ></input>
              <label className="guest-prefix-label" htmlFor="guest">
                НАС БУДЕТ
              </label>
              <input
                type="guest"
                id="guest"
                className="guest-input"
                placeholder="4 гостя"
                required
              ></input>

              <button className="reserve-button">Забронировать столик</button>
              <div className="bottom-container">
                <div className="reminder-container">
                  <p className="reminder-text">Напомнить мне о бронировании</p>
                  <CheckBox />
                </div>
                <p className="reminder-info-text">
                  Вам придет пуш-уведомление о бронировании, чтобы мы с вами точно
                  встретились :)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ReserveForm;
