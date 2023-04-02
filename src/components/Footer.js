import React from "react";
import style from "../styles/Footer.module.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className={style.footer} id="footer">
      <div className="container">
        <div className="row">
          <div className={`col-8 ${style.footerItems} `}>
            <h2 className={style.contactTitle}>Contact info</h2>
            <p className={style.phone}>📞 09917410906</p>
            <p className={style.gmail}>📧 webdegan@gmail.com</p>

            <a href="https://www.webdegan.com" className={style.website}>
              🌐 webdegan.com
            </a>
          </div>
          <div className={`col-4 ${style.footerItems2}`}>
            <a href="https://www.webdegan.com" className={style.projects}>
              More Projects
            </a>
            <Link
              to="/"
              onClick={() => {
                document.getElementById("home").scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className={style.projects}
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
