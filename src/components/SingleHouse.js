import React from "react";
import style from "../styles/SingleHouse.module.css";
import { Link } from "react-router-dom";
import loadingImg from "../images/loading.webp";
import useProgressiveImg from "../Hooks/useProgressive";

const SingleHouse = ({ data }) => {
  const [src] = useProgressiveImg(loadingImg, data.images[1]);
  return (
    <Link to={`/details/${data.title}`} className={style.card}>
      <img src={src} alt={data.title} className={style.cardBg} />
      <div className={style.title}>{data.title}</div>
      <div className={style.rent}>{data.price}$</div>
    </Link>
  );
};

export default SingleHouse;
