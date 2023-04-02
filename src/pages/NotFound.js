import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/NotFound.module.css";

const Notfound = () => {
  return (
    <div className={style.notFound}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, we couldn't find the page you were looking for.</p>
      <Link to="/">Go back to home</Link>
    </div>
  );
};

export default Notfound;
