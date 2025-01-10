import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel";
import Collapse from "../components/Collapse";
import "../styles/Logement.css";

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

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
