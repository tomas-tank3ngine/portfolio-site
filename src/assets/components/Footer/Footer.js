import "./Footer.scss";
import Icons from "../IconHolder/IconHolder";
import { Link } from "react-router-dom";

export default function Footer({ handleEmailAddress }) {
  return (
    <footer className="footer" id="footer">
      <h1 className="footer__title">Contact</h1>
      <section className="footer__link-holder">
        <Link
          to="https://github.com/tomas-tank3ngine"
          target="_blank"
          className="footer__links-container"
        >
          <img
            src={Icons().GithubIconWhite}
            alt="Github Icon"
            className="footer__links-container--icon"
          />
          <p className="footer__links-container--text">GitHub</p>
        </Link>
        <Link
          to="https://www.linkedin.com/in/tomasemartinez/"
          className="footer__links-container"
          target="_blank"
        >
          <img
            src={Icons().LinkedInIconWhite}
            alt="Github Icon"
            className="footer__links-container--icon"
          />
          <p className="footer__links-container--text">LinkedIn</p>
        </Link>
        <button
          onClick={() => handleEmailAddress("footerPopup")}
          className="footer__links-container"
          target="_blank"
        >
          <img
            src={Icons().MailIconWhite}
            alt="Github Icon"
            className="footer__links-container--icon"
          />
          <p className="footer__links-container--text">Email</p>
          <div className="footer__links-container--notification popup">
            <p className="popuptext" id="footerPopup">
              Copied to clipboard
            </p>
          </div>
        </button>
      </section>
      <p className="footer__copyright">
        ©TomasMartinez2024 |{" "}
        <Link
          to="https://github.com/tomas-tank3ngine/portfolio-site"
          className="footer__copyright--link"
        >
          View this site on Github
        </Link>
      </p>
    </footer>
  );
}
