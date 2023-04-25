import "./LoginCamposTexto.css";

const LoginCamposTextos = (props) => {
  return (
    <div>
      <div className="login__nome">
        <label for="nome">{props.nome}</label>
        <input type="text" id="nome" placeholder={props.nome}></input>
      </div>
      <div>
        <label for="login__senha">{props.senha}</label>
        <input
          type="password"
          id="senha"
          placeholder={props.placeholder}
        ></input>
      </div>
    </div>
  );
};

export default LoginCamposTextos;
