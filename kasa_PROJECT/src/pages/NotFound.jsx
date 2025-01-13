import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => (
  <div className="not-found">
    <h1>404</h1>
    <p>Oups ! La page que vous recherchez n existe pas.</p>
    <Link to="/">Retourner sur la page d accueil</Link>
  </div>
);

export default NotFound;
