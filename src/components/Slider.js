import { useEffect, useState } from "react";
import style from "../styles/Slider.module.css";

const useSlider = (initialIndex) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  return [currentIndex, updateIndex];
};

const Slider = ({ title, images }) => {
  const [currentIndex, updateIndex] = useSlider(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      updateIndex(
        (prevIndex) => (prevIndex + 1 + images.length) % images.length
      );
    }, 5000);
    return () => clearInterval(timerId);
  }, [images.length]);

  return (
    <>
      <div className={style.slider}>
        <div className={style.box}>
          <div className={style.card}>
            {
              <img
                src={images[currentIndex]}
                alt={title}
                className={style.image}
              />
            }
          </div>

          <div className={style.dots}>
            {images.map((item, index) => {
              return (
                <img
                  key={item + index}
                  onClick={() => updateIndex(index)}
                  src={item}
                  alt={item + index}
                  className={`${style.dot} ${
                    item === images[currentIndex] ? style.active : ""
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

export default Slider;
