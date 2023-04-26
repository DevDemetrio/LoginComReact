import Butto from "../../Button";
import LoginCamposTextos from "../LoginCamposText";
import "./LoginCampos.css";

const LoginCampos = () => {
  return (
    <form className="form__container">
      <LoginCamposTextos
        nome="E-mail"
        placeholder="Digite seu e-mail"
        className="teste"
      />
      <LoginCamposTextos nome="senha" placeholder="Digite sua senha" />
      <section className="remember">
        <input type="checkbox" id="lembre__conectado" />
        <label htmlFor="lembre__conectado">Lembre-me</label>
      </section>
      <Butto nome="Entrar" className="to__enter demetrio" />
      <section className="remember__link">
        <a href="#">Esqueci mnha senha</a>
      </section>

      <Butto nome="Cadastro" />
    </form>
  );
};

export default LoginCampos;
