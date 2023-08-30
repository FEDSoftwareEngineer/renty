import { useEffect, useState } from "react";
import style from "../styles/Slider.module.css";

//hook to update the index
const useSlider = (initialIndex) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const updateIndex = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  return [currentIndex, updateIndex];
};

//slider component
const Slider = ({ title, images, LQimages }) => {
  const [currentIndex, updateIndex] = useSlider(0);
  const [blur, setBlur] = useState(true);

  useEffect(() => {
    const timerId = setInterval(() => {
      updateIndex(
        (prevIndex) => (prevIndex + 1 + images.length) % images.length
      );
    }, 5000);
    return () => clearInterval(timerId);
  }, [images.length, updateIndex]);

  return (
    <>
      <div className={style.slider}>
        <div className={style.box}>
          <div
            className={style.card}
            style={{
              backgroundImage: `url(${LQimages[currentIndex]})`,
              backgroundSize: "cover",
            }}
          >
            {
              <img
                style={{
                  filter: blur ? "blur(10px)" : "",
                  transition: "0.25s",
                }}
                onLoad={() => setBlur(false)}
                src={images[currentIndex]}
                alt={title}
                className={style.image}
              />
            }
          </div>

          <div className={style.dots}>
            {images.map((item, index) => {
              return (
                <div
                  className={`${style.dot} ${
                    item === images[currentIndex] ? style.active : ""
                  }`}
                  style={{
                    backgroundImage: `url(${LQimages[index]})`,
                    backgroundSize: "cover",
                  }}
                  key={item + index}
                  onClick={() => updateIndex(index)}
                >
                  <img src={item} alt={item + index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
