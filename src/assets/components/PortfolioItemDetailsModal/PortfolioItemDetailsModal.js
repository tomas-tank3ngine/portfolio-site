import "./PortfolioItemDetailsModal.scss";
import { Link } from "react-router-dom";

export default function PortfolioItemDetailsModal({ item, handleModal }) {
  return (
    <div className="background">
      <section className="modal">
        <button className="modal__exit" onClick={handleModal}>X</button>
        <img src={require(`../../images/${item.site_screenshot}`)} alt="Site splash art" className="modal__image" />
        <section className="site-details">
          <h1 className="site-details__client-name">{item.site_name}</h1>
          <h2 className="site-details__tech-stack">{item.tech_stack}</h2>
          <p className="site-details__description">{item.description}</p>
        </section>
        <Link to={item.site_link} target="_blank" className="modal__site-link">Visit Website</Link>
      </section>
    </div>
  );
}
