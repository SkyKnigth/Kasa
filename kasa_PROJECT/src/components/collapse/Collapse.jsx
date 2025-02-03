import { useState } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";

const Collapse = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3 className="collapse-title">{title}</h3>
        <button className="collapse-button">
          <i className={`fas ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`} />
        </button>
      </div>
      {isOpen && <div className="collapse-content"> 
        {Array.isArray(content) ? content.map((text,index)=>(
          <p key={index}>{text}</p>
        )):content}
        </div>}
      
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default Collapse;
