import { useEffect, useState } from "react";
import Card from "../components/card/Card";
import "../styles/Home.scss";

const Home = () => {
  const [logements, setLogements] = useState([])
  useEffect(() => {
      fetch("/datas/logements.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          setLogements(data);
        });
    }, []);
  
  <div className="home">
    <div className="banner">
      <h2>Chez vous, partout et ailleurs</h2>
    </div>
    <div className="cards-container">
      {logements?.map((logement) => (
        <Card key={logement.id} id={logement.id} title={logement.title} cover={logement.cover} />
      ))}
    </div>
  </div>

return (
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
)
};

export default Home;
