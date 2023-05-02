import "./LoginContainer.css";
import LoginCampos from "../LoginCampos";
import ButtoChangeColor from "../../ButtoChangeColor";

const LoginContainer = (props) => {
  return (
    <div>
      <div
        style={{ backgroundColor: props.color }}
        className="container__login"
      >
        <LoginCampos />
        <ButtoChangeColor color={props.color} setColor={props.setColor} />
      </div>
    </div>
  );
};

export default LoginContainer;
