import { useState, useEffect } from "react";
import LinksText from "../LinksText";
import "./MenuLinks.css";

const MenuLinks = () => {
  const [active, setMode] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMode = () => {
    setMode(!active);
  };

  const isDesktop = windowWidth >= 768;

  return (
    <nav className={`menu ${active || isDesktop ? "menuOpen" : "menuClose"}`}>
      <button
        className={active ? "icon iconActive" : "icon"}
        onClick={toggleMode}
      >
        <span className="hamburguer hamburgerIcon"></span>
      </button>

      <ul className="navegation___link">
        <LinksText links={"Início"} />
        <LinksText links={"Sobre"} />
        <LinksText links={"Nossos Clientes"} />
        <LinksText links={"Atendimento"} />
      </ul>
    </nav>
  );
};

export default MenuLinks;
