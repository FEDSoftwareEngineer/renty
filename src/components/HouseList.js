import React, { useEffect, useState } from "react";
import style from "../styles/HouseList.module.css";
import data from "../data";
const SingleHouse = React.lazy(() => import("./SingleHouse"));

const HouseList = () => {
  const [currentData, setCurrentData] = useState(data);
  const [garden, setGarden] = useState(false);
  const [garadge, setGaradge] = useState(false);
  const [price, setPrice] = useState(10000);
  const [rooms, setRooms] = useState(0);

  useEffect(() => {
    const newData = data.filter((item) => {
      return (
        (!garden || item.garden === garden) &&
        (!garadge || item.garadge === garadge) &&
        (!rooms ||
          rooms === item.rooms ||
          (rooms === 4 && item.rooms >= rooms)) &&
        item.price < price
      );
    });
    setCurrentData(newData);
  }, [garadge, garden, price, rooms]);

  return (
    <div className={style.find} id="find">
      <div className={style.options}>
        <h1>
          <span className={style.price}>{price}$</span> Maximum Monthly Rent
        </h1>
        <input
          type="range"
          id="price"
          name="price"
          min="0"
          max="10000"
          value={price}
          className={style.slider}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <div className={style.row}>
          <div className="span">
            <label htmlFor="rooms">Rooms:</label>
            <select
              onChange={(e) => {
                setRooms(Number(e.target.value));
              }}
              name="rooms"
              id="rooms"
            >
              <option value="0">Any</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <span>
            <label htmlFor="garden">Garden:</label>
            <input
              type="checkbox"
              id="garden"
              name="garden"
              onChange={(e) => {
                setGarden(Boolean(e.target.checked));
              }}
            />
          </span>
          <span>
            <label htmlFor="garadge">Garadge:</label>
            <input
              type="checkbox"
              id="garadge"
              name="garadge"
              onChange={(e) => {
                setGaradge(Boolean(e.target.checked));
              }}
            />
          </span>
        </div>
      </div>
      <div className={style.houses}>
        {currentData.map((item) => {
          return <SingleHouse data={item} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default HouseList;
