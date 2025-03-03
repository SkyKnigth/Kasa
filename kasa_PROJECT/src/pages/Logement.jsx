import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Collapse from "../components/collapse/Collapse";
import "../styles/Logement.scss";

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

  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <div className="">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
            <span key={index} className="logement-tag">{tag}</span>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p>{logement.host.name}</p>
            <img src={logement.host.picture}/>
          </div>
          {logement.rating && (
        <div className="logement-rating">
          {[...Array(5)].map((_, i) => (
            <i
              key={i}
              className={i < parseInt(logement.rating, 10) ? "fas fa-star star active" : "fas fa-star star"}
            ></i>
          ))}
        </div>
      )}
        </div>
      </div>
      

      



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
  );
};

export default Logement;

