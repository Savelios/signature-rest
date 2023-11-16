import React from "react";
import whiteLogo from "../../assets/white-logo.svg";
import goldLogo from "../../assets/gold-logo.svg";
import "./logo.css";

interface LogoProps {
  route: string;
  className?: string;
}
const Logo: React.FC<LogoProps> = ({ route, className }) => {
  let logoImagePath: string;

  switch (route) {
    case "/about":
      logoImagePath = whiteLogo;
      break;

    case "/contacts":
      logoImagePath = whiteLogo;
      break;

    default:
      logoImagePath = goldLogo;
  }
  return (
    <img
      className={`header-logo ${className}`}
      src={logoImagePath}
      alt="Logo"
    />
  );
};

export default Logo;
