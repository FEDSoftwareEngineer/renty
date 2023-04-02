import React, { useEffect, useState } from "react";
import style from "../styles/Featured.module.css";
import data from "../data";

const Featured = () => {
  const [featured, setFeatured] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const newData = data.filter((item) => {
      return item.featured === true;
    });
    setFeatured(newData);
  }, []);

  if (featured === undefined) {
    return <h1>Loading</h1>;
  }
  return (
    <>
      <h1 className={style.title}>Featured Houses</h1>
      <div className={style.featured}>
        <div className={style.box}>
          <div className={style.card}>
            {
              <img
                src={featured[count].images[1]}
                alt={featured[count].title}
                className={style.image}
              />
            }
          </div>

          <div className={style.dots}>
            {featured.map((item, index) => {
              return (
                <img
                  onClick={() => {
                    setCount(index);
                  }}
                  key={item.title}
                  src={item.images[1]}
                  alt={item.title}
                  className={`${style.dot} ${
                    item.title === featured[count].title ? style.active : ""
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
