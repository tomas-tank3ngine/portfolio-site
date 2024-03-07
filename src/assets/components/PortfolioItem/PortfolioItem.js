import "./PortfolioItem.scss";
import { useState } from "react";
import PortfolioItemDetailsModal from "../PortfolioItemDetailsModal/PortfolioItemDetailsModal";

export default function PortfolioItem({ item }) {
  const [modalActive, setModalActive] = useState(false);

  const handleModal = () => {
    setModalActive(!modalActive);
  };

  return (
    <>
      {modalActive && <PortfolioItemDetailsModal item={item} handleModal={handleModal}/>}
      <li onClick={handleModal} className="item">
        {item.thumbnail && (
          <img
            src={require(`../../images/${item.thumbnail}`)}
            alt="item thumbnail"
            className="item__thumbnail"
          />
        )}
      </li>
    </>
  );
}
