import { useState } from "react";
import PropTypes from "prop-types";
import "./Carousel.scss";
import FlecheD from "../../assets/flecheDroite.png";
import FlecheG from "../../assets/flecheGauche.png";

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
          <img src={FlecheG} alt="fleche gauche"/> 
        </button>
      )}
      <img
        src={pictures[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="carousel-image"
      />
      {pictures.length > 1 && (
        <button className="carousel-button next" onClick={handleNext}>
          <img src={FlecheD} alt="fleche droite"/> 
        </button>
      )}
     
      {pictures.length > 1 && (
        <div className="carousel-indicator">
        {currentIndex + 1}/{pictures.length}
      </div>
      )}
    </div>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carousel;
