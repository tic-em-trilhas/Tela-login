import { useState } from 'react';
import logoimg from './imagens/logotipo.png';
import './styles.css';

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Função chamada quando o botão de login é clicado
  const handleLoginClick = () => {
    // Exemplo: Imprimir os dados no console
    console.log("Email:", email);
    console.log("Senha:", password);

    // Aqui você pode adicionar a lógica para validar o login ou redirecionar o usuário
    // Exemplo de redirecionamento
    if (email && password) {
      window.location.href = "https://tic-em-trilhas.github.io/EtecHub-final/"; // Redireciona para uma página após login
    } else {
      alert("Preencha os campos de email e senha.");
    }
  };
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              <img src={logoimg} alt="logotipo" />
            </span>
            <div className="wrap-input">
              <input 
                className={email !== "" ? 'has-val input' : 'input'} 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email:"></span>
            </div>

            <div className="wrap-input">
              <input 
                className={password !== "" ? 'has-val input' : 'input'} 
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Senha:"></span>
            </div>

            <div className="container-login-form-btn">
              <button 
                className="login-form-btn" 
                type="button" 
                onClick={handleLoginClick}
              >
                Login
              </button>
            </div>

            <div className="text-center">
              <span className="txt1">Não possui conta?</span>
              <a className="txt2" href="https://tic-em-trilhas.github.io/Tela-Cadastro/">
                Cadastre-se.
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
