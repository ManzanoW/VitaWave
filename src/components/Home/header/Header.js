import React from "react";
import { useState } from "react";
import logo from "./img/vitawave_logo-full.png";
import doctor1 from "./img/doctor_1.png";
import doctor2 from "./img/doctor_3.png";
import doctor3 from "./img/doctor_4.png";
import "./Header.css";

export function Header() {
  //funcao que scrolla para a div sobre
  function scrollToSobre() {
    const sobreDiv = document.querySelector(".sobre");
    sobreDiv.scrollIntoView({ behavior: "smooth" });
  }

  // funcao que muda a imagem do header
  const [imgIndex, setImgIndex] = useState(0);
  const imgs = [doctor1, doctor2, doctor3];

  function changeImg() {
    setImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
  }

  if (window.location.pathname === "/") {
    setInterval(changeImg, 4000);
  }

  // funcao que abre o modal de login
  const [isModalOpen, setIsModalOpen] = useState(false);

  // funcao de login usando informacoes do localStorage
  function handleLogin(e) {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    if (email === storedEmail && password === storedPassword) {
      window.location.pathname = "/dashboard";
    } else {
      alert("Email ou senha incorretos");
    }
  }

  return (
    <header className="App-header">
      <div className="header-text">
        <img src={logo} alt="logo" />
        <h1 className="header-title animate-character">
          Descubra a revolução em saúde e bem-estar com a VitaWave
        </h1>
        <h2>
          Transformando vidas por meio do acesso, diagnóstico avançado e cuidado
          integral
        </h2>
        <button onClick={scrollToSobre}>Veja Mais</button>
      </div>
      <div className="header-login">
        <button onClick={() => setIsModalOpen(true)}>Login</button>
        {isModalOpen && (
          <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
            <div className="modal-content">
              <span className="close" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <h1>Login</h1>
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Senha</label>
                  <input type="password" id="password" />
                </div>
                <button type="submit">Entrar</button>
              </form>
            </div>
          </div>
        )}

        <p>Ainda não tem uma conta?</p>
        <a href="register">Cadastre-se</a>
        {imgs.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`doctor ${index + 1}`}
            className={`header-img ${index === imgIndex ? "visible" : ""}`}
          />
        ))}
      </div>
    </header>
  );
}
