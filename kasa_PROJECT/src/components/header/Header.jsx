import { NavLink } from "react-router-dom";
import "./Header.scss";
import LOGO from "./../../assets/LOGO.png"; 



const Header = () => (
  <header className="header">
     <img className="logo" src={LOGO} alt="Logo de Kasa" />
    <nav className="nav">
      <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
        Accueil
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}>
        A propos
      </NavLink>
    </nav>
  </header>
);

export default Header;

/*import { Link } from "react-router-dom";
import "./Header.scss";
import LOGO from "./assets/LOGO.png"; 

const Header = () => (
  <header className="header">
    <div className="logo">
      <img src={LOGO} alt="Logo de Kasa" />
    </div>
    <nav className="nav">
      <Link to="/" className="nav-link">Accueil</Link>
      <Link to="/about" className="nav-link">À propos</Link>
    </nav>
  </header>
);

export default Header; */
