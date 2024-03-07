import "./Homepage.scss";
import portrait from "../../images/Tomas Portrait.png";
import { Link } from "react-router-dom";
import Icons from "../../components/IconHolder/IconHolder";
import { portfolioItems } from "../../utils/portfolio-items-utils";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

export default function Homepage() {

    const handleEmailAddress = async () => {
        try {
            await navigator.clipboard.writeText("tomasmartinez1424@gmail.com");
            alert(" Email copied to clipboard!");
        } catch (error) {
            console.error("Error copying to clipboard: ", error);
        }
    };
  return (
    <main className="main">
      <section className="about">

        <img src={portrait} alt="portrait" className="about__headshot" />

        <div className="about-container">
            <h2 className="about-container__header">
            <span className="about-container__header--line line-1">Hi there 👋 I'm Tomas </span>
            <span className="about-container__header--line line-2">
                A Full-Stack Software Developer
            </span>
            </h2>
            <p className="about-container__bio">
            I'm also a self-taught programmer, bootcamp grad, entrepreneur, and
            former escape room designer. I've always been someone who enjoys
            finding creative solutions to complex problems especially when it
            comes to creating compelling, high quality digital experiences.
            </p>
            <nav className="about-container__socials">
                <Link to="https://github.com/tomas-tank3ngine" target="_blank" className="social">
                    <img src={Icons().GithubIcon} alt="Github Icon" className="social__image" />
                </Link>
                <Link to="https://www.linkedin.com/in/tomasemartinez/" className="social" target="_blank">
                    <img src={Icons().LinkedInIcon} alt="Github Icon" className="social__image" />
                </Link>
                <button onClick={handleEmailAddress} className="social" target="_blank">
                    <img src={Icons().MailIcon} alt="Github Icon" className="social__image" />
                </button>
            </nav>
        </div>
      </section>
      <section className="pitch">
        <h2 className="pitch__header">I love working with Small Businesses</h2>
        <p className="pitch__bio">
          I specialize in creating sites for individuals and small businesses.
          You shouldn't have to settle for cheap solutions or generic templates.
          I provide custom designs at affordable prices. Frequently your website
          is the first impression your customers will get, so make sure it's a
          good one. Take a look at my portfolio below, if you think I'd be a
          good match send me an email.
        </p>
      </section>

      <section className="card">
        <h2 className="card__header">I'm a Full-Stack Web Developer</h2>
        <p className="card__description">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <section className="card-info">
          <h3 className="card-info__header">Languages I speak</h3>
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
      <section className="recent-work">
        <h2 className="recent-work__header">My Recent Work</h2>
        <p className="recent-work__tagline">
          Here are a few past designs I've worked on. Want more info? Email me
        </p>
        <ul className="recent-work__list">
            {
                portfolioItems.map((item) => {
                    return <PortfolioItem key={item.id} item={item} />
                })
            }
        </ul>
      </section>
    </main>
  );
}
