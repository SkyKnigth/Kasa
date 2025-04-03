import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/NotFound.scss";

const NotFound = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="not-found">
      <h1>404</h1>
      <p>
        {isMobile ? (
          <>
            Oups! La page que <br /> vous demandez n'existe pas.
          </>
        ) : (
          "Oups! La page que vous demandez n'existe pas."
        )}
      </p>
      <Link to="/" className="not-found-link">
        Retourner sur la page d'accueil
      </Link>
    </main>
  );
};

export default NotFound;