import { useState } from "react";
import "./assets/reset.css";
import LoginContainer from "./components/Logion/LoginContainer";
import MenuBackground from "./components/Menu/MenuBackground";

function App() {
  const [color, setColor] = useState("#D9D9D9");
  return (
    <div className="App">
      <MenuBackground />
      <LoginContainer color={color} setColor={setColor} />
    </div>
  );
}

export default App;
