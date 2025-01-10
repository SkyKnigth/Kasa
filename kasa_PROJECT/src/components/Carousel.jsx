import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Carousel.css";

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel">
      {pictures.length > 1 && (
        <button className="carousel-button prev" onClick={handlePrev}>
          ❮
        </button>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      {pictures.length > 1 && (
        <button className="carousel-button next" onClick={handleNext}>
          ❯
        </button>
      )}
      <div className="carousel-indicator">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
