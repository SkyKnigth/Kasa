import "./Footer.scss";
import LogoFooter from "../../assets/logo-footer.png"

const Footer = () => (
  <footer className="footer">
<img src={LogoFooter} alt="logo-footer"/> 
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
