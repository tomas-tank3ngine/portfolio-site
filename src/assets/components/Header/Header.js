import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Header() {
  return (
    <>
      <HamburgerMenu />

      <header className="header">
        <ul className="header__nav">
          <li className="header__nav--link">
            <a href="#about">About</a>
          </li>
          <li className="header__nav--link">
            <a href="#recent-work">Recent Work</a>
          </li>
          <li className="header__nav--link">
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div className="header__background"></div>
      </header>
    </>
  );
}
