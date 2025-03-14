import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Collapse from "../components/collapse/Collapse";
import "../styles/Logement.scss";
import NotFound from "./NotFound";

const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("/datas/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const foundLogement = data.find((logement) => logement.id === id);
        setLogement(foundLogement);
      })
      .catch((error) => console.error("Erreur lors du chargement du JSON :", error));
  }, [id]);

  if (!logement) return <NotFound/>;

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1 className="logement-title">{logement.title}</h1>
          <h2 className="logement-location">{logement.location}</h2>

          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="logement-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement-host-container">
          <div className="logement-host">
            <p className="logement-host-name">
              <span>{logement.host.name.split(" ")[0]}</span>
              <span>{logement.host.name.split(" ")[1]}</span>
            </p>
            <img
              src={logement.host.picture}
              alt={logement.host.name}
              className="logement-host-img"/>
          </div>

          <div className="logement-rating">
            {[...Array(5)].map((_, i) => (
              <i
                key={i}
                className={
                  i < parseInt(logement.rating, 10)
                    ? "fas fa-star star active"
                    : "fas fa-star star"
                }
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="information">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
};

export default Logement;