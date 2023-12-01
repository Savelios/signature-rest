import React from "react";
import footerLogo from "../../assets/white-logo.svg";
import phoneIco from "../../assets/phone-ico.png";
import "./Footer.css";

type FooterProps = {
  route: string;
  onOpenModal: () => void;
  className?: string;
};

export const Footer: React.FC<FooterProps> = ({
  route,
  onOpenModal,
  className,
}) => {
  const footerClassName =
    route === "/contacts" ? `footer ${className || "hide-footer"}` : "footer";
  return (
    <div className="footer">
      <img src={footerLogo} alt="" className="footer__logo" />
      <div className="footer_top_container">
        <p className="footer__admin-text">
          Администратор
          <p>+7 989 077 70 07</p>
        </p>
        <img className="phone-ico" src={phoneIco} alt="" />
      </div>
      <div className="footer_bottom_container">
        <span>Котельническая наб., 1/15, к.В, Москва</span>
      </div>

      <p className="footer__address-text">
        Котельническая наб., 1/15, к.В, Москва <br />
        <p>+7 495 915 35 00</p>
      </p>
      <button className="footer__button" onClick={onOpenModal}>
        Забронировать столик
      </button>
    </div>
  );
};
