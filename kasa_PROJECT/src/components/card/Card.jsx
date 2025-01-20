import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";

const Card = ({ id, title, cover }) => (
  <Link to={`/logement/${id}`} className="card">
    <img src={cover} alt={title} className="card-image" />
    <h3 className="card-title">{title}</h3>
  </Link>
);

Card.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default Card;
