import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import style from "../styles/Details.module.css";
import Loading from "../components/Loading";
//data
import data from "../data";
import Slider from "../components/Slider";

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const newProduct = data.find((item) => item.title === id);
    if (newProduct) {
      setProduct(newProduct);
      setLoaded(true);
      document.getElementById("details").scrollIntoView({ block: "start" });
    } else {
      navigate("/404");
    }
  }, []);

  return (
    <div className={style.details} id="details">
      {loaded ? (
        <>
          <Slider title={product.title} images={product.images} />
          <div className={style.row}>
            <div className={style.description}>
              <h2>
                <b>DETAILS</b>
              </h2>
              <p>{product.description}</p>
            </div>

            <div className={style.info}>
              <h2>
                <b>INFO</b>
              </h2>

              <h3> Price: {product.price}$</h3>
              <h3> Rooms: {product.rooms}</h3>
              <h3>Garden: {product.garden ? "Included" : "Not Included"}</h3>
              <h3>Garadge: {product.garadge ? "Included" : "Not Included"}</h3>
              <h3>Max Acceptable Capacity: {product.capacity} People</h3>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Details;
