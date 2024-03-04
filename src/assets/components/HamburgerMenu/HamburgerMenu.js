import "./HamburgerMenu.scss";
import Icons from "../IconHolder/IconHolder";
import { useState } from "react";

export default function HamburgerMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <menu className="menu">
      {isOpen ? (
        <>
          <button className="menu__button" onClick={handleMenu}>
            <img
              src={Icons().CloseIcon}
              alt="close menu"
              className="menu__button--icon"
            />
          </button>
          <ul className="menu__nav">
            <li className="menu__nav--link">About</li>
            <li className="menu__nav--link">Portfolio</li>
            <li className="menu__nav--link">Contact</li>
          </ul>
        </>
      ) : (
          <button className="menu-button" onClick={handleMenu}>
            <img
              src={Icons().MenuIcon}
              alt="hamburger menu"
              className="menu-button__icon"
            />
          </button>
      )}
    </menu>
  );
}
