import "./ButtoChangeColor.css";
import { useState } from "react";

const ButtoChangeColor = (props) => {
  const [color, setColor] = useState(props.color);

  const monitora = (evento) => {
    setColor(evento.target.value);
    props.setColor(evento.target.value);
  };
  return (
    <div className="button__changeColor">
      <input type="color" value={color} onChange={monitora} />
      <label>Mude cor de fundo</label>
    </div>
  );
};

export default ButtoChangeColor;
