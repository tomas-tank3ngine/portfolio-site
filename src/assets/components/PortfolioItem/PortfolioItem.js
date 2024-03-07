import "./PortfolioItem.scss";
import { useEffect, useState } from "react";

export default function PortfolioItem({item}) {
    const [modalActive, setModalActive] = useState(false);
    // console.log(item)
    // const [test, setTest] = useState({})

    // useEffect(()=>{
    //     setTest(item)
    // },[item])

    const handleClick = ()=>{
        setModalActive(true);
    }

  return (
    <>
        {modalActive && <itemDetailsModal />}
        <li onClick={handleClick} className="item">
            {item.thumbnail && <img src={require(`../../images/${item.thumbnail}`)} alt="item thumbnail" className="item__thumbnail" />}
        </li>
    </>
  );
}
