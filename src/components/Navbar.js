import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import style from "../styles/Navbar.module.css";

export default function Navbar() {
  const location = useLocation();
  const [isPhonebar, setIsPhonebar] = useState(false);
  const [position, setPosition] = useState("absolute");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setPosition("fixed");
      } else {
        setPosition("absolute");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${style.navbar} ${position === "fixed" ? style.slide : ""}`}
      style={{
        position: position,
      }}
    >
      <div className={style.navbarLogo}>
        <Link to="/">
          <h1>Renty</h1>
        </Link>
      </div>
      <FaBars
        onClick={() => setIsPhonebar(!isPhonebar)}
        className={style.navbarPhone}
      />
      <div
        className={`${style.navbarItems} ${
          isPhonebar ? style.active : style.inactive
        }`}
      >
        <FaTimes className={style.close} onClick={() => setIsPhonebar(false)} />
        <Link to="/">
          <h1
            onClick={() => {
              setIsPhonebar(false);
              if (location.pathname === "/") {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Home
          </h1>
        </Link>
        <Link to="/about" onClick={() => setIsPhonebar(false)}>
          <h1>About</h1>
        </Link>

        <Link to="/">
          <h1
            onClick={() => {
              setIsPhonebar(false);
              if (location.pathname === "/") {
                document
                  .getElementById("find")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Houses
          </h1>
        </Link>
        <Link to="/">
          <h1
            onClick={() => {
              setIsPhonebar(false);
              if (location.pathname === "/") {
                document
                  .getElementById("footer")
                  .scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
          >
            Contact
          </h1>
        </Link>
      </div>
    </div>
  );
}
