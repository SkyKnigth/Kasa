import "../styles/About.scss";
import bannerAbout from "../assets/bannerAbout.png";
import Collapse from "../components/collapse/Collapse"; 

export default function About() {
    return (
        <div className="about-page">
            <div className="banner">
                <img src={bannerAbout} alt="Bannière À Propos" />
            </div>
            <div className="content">
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."/>
            </div>
        </div>
    );
}

  