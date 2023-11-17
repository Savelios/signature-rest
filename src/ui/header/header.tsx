/* eslint-disable jsx-a11y/anchor-is-valid */
import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "../logo/logo";
import Burger from "../burger/burger";

interface HeaderProps {
    route: string;
    onOpenModalMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModalMenu }) => {
    const navigate = useNavigate();
    const location = useLocation();

    type Button = {
        type: string;
        id: number;
        className?: string;
        onClick: () => void;
    };

    const headerItems: Button[] = [
        {
            type: "О НАС",
            id: 1,
            className: location.pathname === "/about" ? "active-header__nav-item" : "",

            onClick: () => {
                navigate("/about");
            },
        },
        {
            type: "ЭКСПОЗИЦИЯ",
            id: 2,
            className:
                location.pathname === "/pictures" ? "active-header__nav-item" : "",
            onClick: () => {
                navigate("/pictures");
            },
        },
        {
            type: "ВИННАЯ ГАЛЕРЕЯ",
            id: 3,
            className:
                location.pathname === "/wine-gallery" ? "active-header__nav-item" : "",
            onClick: () => {
                navigate("/wine-gallery");
            },
        },
        {
            type: "МЕНЮ",
            id: 4,
            className: location.pathname === "/menu" ? "active-header__nav-item" : "",
            onClick: () => {
                navigate("/menu");
            },
        },
        {
            type: "КОНТАКТЫ",
            id: 5,
            className: location.pathname === "/contacts" ? "active-header__nav-item" : "",
            onClick: () => {
                navigate("/contacts");
            },
        },
    ];

    const logoItem: Button[] = [
        {
            type: "logo",
            id: 0,
            onClick: () => {
                navigate("/");
            },
        },
    ];

    let headerColor: string;

    if (location.pathname === "/contacts") {
        headerColor = "#FFFFFF";
    } else if (location.pathname === "/about") {
        headerColor = "#FFFFFF";
    } else {
        headerColor = "#91793A";
    }

    const headerStyle = {
        color: headerColor,
    };

    return (
        <div className="header">
            <Burger
                route={window.location.pathname}
                onOpenModalMenu={onOpenModalMenu}
            />
            {logoItem.map((logoImg) => {
                return (
                    <div onClick={logoImg.onClick}>
                        <Logo route={window.location.pathname} />
                    </div>
                );
            })}
            <div className="header__nav-container">
                {headerItems.map((item) => {
                    return (
                        <a
                            className={`header__nav-item ${item.className}`}
                            onClick={item.onClick}
                            style={headerStyle}
                            key={item.id}
                        >
                            {item.type}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};