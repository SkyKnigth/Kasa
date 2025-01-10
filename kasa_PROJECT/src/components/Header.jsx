import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = () => (
  <header className="header">
    <h1 className="logo">Kasa</h1>
    <nav className="nav">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/about" className="nav-link">À propos</Link>
    </nav>
  </header>
);

export default Header;