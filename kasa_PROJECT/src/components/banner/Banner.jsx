import PropTypes from "prop-types";
import "./banner.scss";

export default function Banner({image,title}) {
  return (
    <div className="banner">
        <img src={image} alt="image de la bannière"/>
      <h1>{title}</h1>
    </div>
  )
  
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
