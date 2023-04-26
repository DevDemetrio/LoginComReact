import "./LoginCamposTexto.css";

const LoginCamposTextos = (props) => {
  return (
    <div className="login__container">
      <label htmlFor="nome">{props.nome}</label>
      <input type="text" id="nome" placeholder={props.nome}></input>
    </div>
  );
};

export default LoginCamposTextos;
