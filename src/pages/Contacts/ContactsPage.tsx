import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import instaIco from "../../assets/insta-social-ico.png";
import vkIco from "../../assets/vk-social-ico.png";
import ytIco from "../../assets/yt-social-ico.png";
import phoneIco from "../../assets/phone-ico.png";
import "./ContcatsPage.css";

const ContactsPage = () => {
  const defaultState = {
    center: [55.747951, 37.643821],
    zoom: 16,
  };

  const mapWidthClass = "map-width";
  const mapHeightClass = "map-height";

  return (
    <React.Fragment>
      <h1 className="contacts__title">КОНТАКТЫ</h1>
      <div className="contacts__page">
        <div className="contacts__map-container">
          <div className={`${mapWidthClass} ${mapHeightClass}`}>
            <YMaps>
              <Map
                defaultState={defaultState}
                className={mapWidthClass}
                style={{ height: "100%" }}
              >
                <Placemark geometry={[55.747951, 37.643821]} />
              </Map>
            </YMaps>
          </div>
          <div className="contacts_top_container">
            <p className="contacts__mobile_admin-text">
              Администратор
              <p>+7 989 077 70 07</p>
            </p>
            <img className="contacts__phone-ico" src={phoneIco} alt="" />
          </div>
          <div className="contacts_bottom_container">
            <p className="contacts__address-text">
              Москва, Котельническая набережная,<p>дом 1/15, корпус В</p>
            </p>
            <p className="contacts__admin-text">
              Администратор
              <p className="contacts__phone-text">+7 989 077 70 07</p>
            </p>
            <div className="contacts__social-media-container">
              <img src={vkIco} alt="vk" />
              <img src={ytIco} alt="yt" />
              <img src={instaIco} alt="insta" />
            </div>
            <p className="contacts__copy-right-text">
              © 2022 – 2023 ООО «Сигнатура арт ресторан рус». Все права
              защищены.
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactsPage;
