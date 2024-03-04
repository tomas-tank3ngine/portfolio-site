import "./Header.scss";
import Icons from "../IconHolder/IconHolder";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      {isOpen ? (
        <menu className="menu">
          <button className="menu-button" onClick={handleMenu}>
            <img
              src={Icons().CloseIcon}
              alt="close menu"
              className="menu-button__icon"
            />
          </button>
          <ul className="nav">
            <li className="nav__link">About</li>
            <li className="nav__link">Portfolio</li>
            <li className="nav__link">Contact</li>
          </ul>
        </menu>
      ) : (
        <menu className="menu">
            <button className="menu-button" onClick={handleMenu}>
            <img
                src={Icons().MenuIcon}
                alt="hamburger menu"
                className="menu-button__icon"
            />
            </button>
        </menu>
      )}
    </header>
  );
}
