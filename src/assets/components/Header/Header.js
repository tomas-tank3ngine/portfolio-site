import "./Header.scss";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

export default function Header() {
  return (
    <>
      <HamburgerMenu />

      <header className="header">
        <ul className="header__nav">
          <li className="header__nav--link">About</li>
          <li className="header__nav--link">Portfolio</li>
          <li className="header__nav--link">Contact</li>
        </ul>
      </header>
    </>
  );
}
