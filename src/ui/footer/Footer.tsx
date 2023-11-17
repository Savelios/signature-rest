import React from 'react'
import footerLogo from "../../assets/white-logo.svg"
import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <img src={footerLogo} alt="" className='footer__logo' />
      <p className='footer__address-text'>Котельническая наб., 1/15, к.В, Москва <br />
        +7 495 915 35 00</p>
      <button className='footer__button'>Забронировать столик</button>
    </div>
  )
}
