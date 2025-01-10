import logements from "../datas/logements.json";
import Card from "../components/Card";
import "../styles/Home.css";

const Home = () => (
  <div className="home">
    <div className="banner">
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
    <div className="cards-container">
      {logements.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  </div>
);

export default Home;
