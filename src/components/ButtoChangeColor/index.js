import { useState } from "react";

const ButtoChangeColor = (props) => {
  const [color, setColor] = useState(props.color); // <--- inicializa com a prop recebida
  const monitora = (evento) => {
    setColor(evento.target.value);
    props.setColor(evento.target.value); // <--- atualiza a cor no pai
  };
  return (
    <div>
      <input type="color" value={color} onChange={monitora} />
    </div>
  );
};

export default ButtoChangeColor;
