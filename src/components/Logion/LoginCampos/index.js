import LoginCamposTextos from "../LoginCamposText";
import "./LoginCampos.css";

const LoginCampos = () => {
  return (
    <form>
      <LoginCamposTextos nome="senha" placeholder="Digite sua senha" />
      <LoginCamposTextos senha="senha" placeholder="Digite sua senha" />
    </form>
  );
};

export default LoginCampos;
