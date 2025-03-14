import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => (
  <main className="not-found">
    <h1>404</h1>
    <p>Oups! La page que vous demandez n'existe pas.</p>
    <Link to="/" className="not-found-link">
      Retourner sur la page d'accueil
    </Link>
  </main>
);

export default NotFound;