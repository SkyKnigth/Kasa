import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Collapse from "../components/collapse/Collapse";
import "../styles/Logement.scss";


const Logement = () => {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);

  useEffect(() => {
    fetch("../datas/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const foundLogement = data.find((logement) => logement.id === id);
        setLogement(foundLogement);
      });
  }, [id]);

  
  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <div className="logement">
      <Carousel pictures={logement.pictures} />
      <h1>{logement.title}</h1>
      <p>{logement.location}</p>
      <Collapse title="Description" content={logement.description} />
      <Collapse
        title="Équipements"
        content={<ul>{logement.equipments.map((item, index) => <li key={index}>{item}</li>)}</ul>}
      />
    </div>
  );
};

export default Logement;
