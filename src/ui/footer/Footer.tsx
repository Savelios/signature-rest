import React from 'react'
import footerLogo from "../../assets/white-logo.svg"
import './Footer.css'

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
    <div className='footer'>
      <img src={footerLogo} alt="" className='footer__logo' />
      <p className='footer__address-text'>Котельническая наб., 1/15, к.В, Москва <br />
        +7 495 915 35 00</p>
      <button className='footer__button' onClick={onOpenModal}>Забронировать столик</button>
    </div>
  )
}
