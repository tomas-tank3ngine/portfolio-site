import "./Homepage.scss";
import portrait from "../../images/Tomas Portrait.png";
import { Link } from "react-router-dom";
import Icons from "../../components/IconHolder/IconHolder";
import { portfolioItems } from "../../utils/portfolio-items-utils";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import Business from "../../images/Business.png";

export default function Homepage({ handleEmailAddress }) {
  return (
    <main className="main">
      <div className="page-background">
        <div className="page-background__layer-2"></div>
      </div>
      <section className="about" id="about">
        <img src={portrait} alt="portrait" className="about__headshot" />

        <div className="about-container">
          <h2 className="about-container__header">
            <span className="about-container__header--line line-1">
              Hi there <span className="wave">👋</span> I'm Tomas{" "}
            </span>
            <span className="about-container__header--line line-2">
              A Full-Stack Software Developer
            </span>
          </h2>
          <p className="about-container__bio">
            I'm also a self-taught programmer, bootcamp grad, entrepreneur
            (making games!), and former escape room designer. I've always been
            someone who enjoys finding creative solutions to complex problems
            especially when it comes to creating compelling, high quality
            digital experiences.
          </p>
          <nav className="about-container__socials">
            <Link
              to="https://github.com/tomas-tank3ngine"
              target="_blank"
              className="social"
            >
              <img
                src={Icons().GithubIcon}
                alt="Github"
                className="social__image"
              />
              <p className="social__text">Github</p>
            </Link>
            <Link
              to="https://www.linkedin.com/in/tomasemartinez/"
              className="social"
              target="_blank"
            >
              <img
                src={Icons().LinkedInIcon}
                alt="Linkedin"
                className="social__image"
              />
              <p className="social__text">LinkedIn</p>
            </Link>
            <button
              onClick={() => handleEmailAddress("aboutPopup")}
              className="social"
            >
              <img
                src={Icons().MailIcon}
                alt="Email"
                className="social__image"
              />
              <p className="social__text">Email</p>
              <div className="social__notification popup">
                <p className="popuptext" id="aboutPopup">
                  Copied to clipboard
                </p>
              </div>
            </button>
          </nav>
        </div>
      </section>
      <section className="pitch">
        <div className="pitch__text-container">
          <h2 className="pitch__text-container--header">
            I love working with Small Businesses
          </h2>
          <p className="pitch__text-container--bio">
            I specialize in creating engaging websites and interactive
            applications for individuals and small businesses. You shouldn't
            have to settle for cheap solutions or generic templates when a
            custom design could bring so much more value to your brand. I
            provide custom solutions at affordable prices, with a focus on quick
            turnaround and customer satisfaction. Your website is often the
            first impression your customers will get - let's make sure it checks
            all your boxes and more. Take a look at my portfolio below to see
            what I've made, and if you think I'd be a good match send me an
            email.
          </p>
        </div>
        <img
          src={Business}
          alt="small business"
          className="pitch__image"
        />
      </section>

      <section className="card">
        <h2 className="card__header">Full-Stack Web Development</h2>
        <p className="card__description">
          I like to code things from scratch and learning new ways to bring
          ideas to life in the browser. Be it a frontend application with fun
          animations, styles, and colours (like this website!) or a full-stack
          application with a handmade database, my wide range of skills is sure
          to meet your needs.
        </p>
        <section className="card-info">
          <h3 className="card-info__header">Languages</h3>
          <ul className="info-list">
            <li className="info-list__item">HTML</li>
            <li className="info-list__item">CSS</li>
            <li className="info-list__item">JavaScript</li>
            <li className="info-list__item">React</li>
            <li className="info-list__item">Sass</li>
            <li className="info-list__item">Git</li>
            <li className="info-list__item">SQL</li>
            <li className="info-list__item">TypeScript</li>
            <li className="info-list__item">Node.js</li>
            <li className="info-list__item">Jest</li>
          </ul>
        </section>
        <section className="card-info">
          <h3 className="card-info__header">Dev Tools</h3>
          <ul className="info-list">
            <li className="info-list__item">VSCode</li>
            <li className="info-list__item">Heroku</li>
            <li className="info-list__item">Netlify</li>
            <li className="info-list__item">Github</li>
          </ul>
        </section>
      </section>
      <section className="recent-work" id="recent-work">
        <h2 className="recent-work__header">My Recent Work</h2>

        <p className="recent-work__tagline">
          Here are a few past designs I've worked on:
        </p>

        <ul className="recent-work__list">
          {portfolioItems &&
            portfolioItems.map((item) => (
              <PortfolioItem key={item.id} item={item} />
            ))}
        </ul>
      </section>
    </main>
  );
}
