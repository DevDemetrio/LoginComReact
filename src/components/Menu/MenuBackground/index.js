import MenuLinks from "../MenuLinks";
import { useState } from "react";
import "./MenuBackground.css";

const MenuBackground = () => {
  return (
    <header className="menu__background">
      <div className="menu__container">
        <a className="menu__logo">Logo</a>
        <MenuLinks />
      </div>
    </header>
  );
};

export default MenuBackground;
