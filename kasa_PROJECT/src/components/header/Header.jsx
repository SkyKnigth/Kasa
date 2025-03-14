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

