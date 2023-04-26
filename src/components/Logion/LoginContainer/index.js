import "./LoginContainer.css";
import { useState, useRef } from "react";
import LoginCampos from "../LoginCampos";

const LoginContainer = () => {
  const [addColor, setAddColor] = useState("#D9D9D9");
  const inputRef = useRef(null);
  const divRef = useRef(null);

  const changeColorDiv = () => {
    let valorColor = inputRef.current.value;
    setAddColor(valorColor);
    divRef.current.style.backgroundColor = valorColor;
    console.log(valorColor);
  };
  return (
    <div>
      <div
        ref={divRef}
        style={{ backgroundColor: addColor }}
        className="container__login"
      >
        <LoginCampos />
      </div>
      <label>Personalise o background do login</label>
      <input type="color" ref={inputRef} onChange={changeColorDiv}></input>
    </div>
  );
};

export default LoginContainer;
