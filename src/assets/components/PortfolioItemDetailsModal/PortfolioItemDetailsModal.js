import "./PortfolioItemDetailsModal.scss";
import { Link } from "react-router-dom";

export default function PortfolioItemDetailsModal({ item, handleModal }) {
  return (
    <>
      <section className="modal">
        <button className="modal__exit" onClick={handleModal}>
          X
        </button>
        <img
          src={require(`../../images/${item.site_screenshot}`)}
          alt="Site splash art"
          className="modal__image"
        />
        <section className="site-details">
          <h1 className="site-details__client-name">{item.site_name}</h1>
          <h2 className="site-details__tech-stack">{item.tech_stack}</h2>
          <hr className="site-details__break" />
          <p className="site-details__description">{item.description}</p>
        </section>
        <section className="modal__buttons">
          <Link
            to={item.site_link}
            target="_blank"
            className="modal__buttons--site"
          >
            Visit Website
          </Link>
          <Link
            to={item.repo_link}
            target="_blank"
            className="modal__buttons--repo"
          >
            Github Repo
          </Link>
        </section>
      </section>
      <div onClick={handleModal} className="background"></div>
    </>
  );
}
