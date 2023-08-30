import React from "react";
import style from "../styles/Hero.module.css";
//icons
import { FaSearch } from "react-icons/fa";
//hooks
import useProgressive from "../Hooks/useProgressive";

//resources
import bg from "../images/bg.webp";
import LQbg from "../images/LQ/LQbg.webp";
const Hero = () => {
  const [src, { blur }] = useProgressive(LQbg, bg);
  return (
    <div className={style.hero}>
      <img
        src={src}
        alt=""
        className={style.bg}
        style={{ filter: blur ? "blur(20px)" : "", transition: "0.25s" }}
      />
      <div className={style.card}>
        <h1 className={style.title}>Find your dream house</h1>

        <div
          className={style.btn}
          onClick={() => {
            document
              .getElementById("find")
              .scrollIntoView({ behavior: "smooth", block: "start" });
          }}
        >
          <FaSearch /> Search for houses
        </div>
      </div>
    </div>
  );
};

export default Hero;
