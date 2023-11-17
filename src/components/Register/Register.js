import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import eye_closed from "./eye_closed_icon.png";
import eye_opened from "./eye_looking_icon.png";

export function Register() {
  const passwordRef = useRef();
  const togglePasswordRef = useRef();

  // Funcao que da alterna a visibilidade da senha
  useEffect(() => {
    const togglePassword = togglePasswordRef.current;
    const password = passwordRef.current;

    if (togglePassword && password) {
      const handleClick = function (e) {
        const type =
          password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
        this.setAttribute("src", type === "password" ? eye_opened : eye_closed);
      };

      togglePassword.addEventListener("click", handleClick);

      // Funcao que remove o event listener quando o componente é desmontado
      return () => {
        togglePassword.removeEventListener("click", handleClick);
      };
    }
  }, []);

  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  console.log(selectedOption);

  function handleSubmit(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("input");
    const values = [...inputs].map((input) => input.value);

    if (selectedOption === "") {
      setError("Por favor, selecione um tipo de conta");
    } else if (values.includes("")) {
      setError("Por favor, preencha todos os campos");
    } else {
      inputs.forEach((input) => {
        localStorage.setItem(input.id, input.value);
      });

      window.location.href = "/";
    }
  }

  return (
    <div className="register">
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telefone</label>
            <input type="tel" id="tel" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input ref={passwordRef} type="password" id="password" required />
            <span toggle="password">
              <img
                ref={togglePasswordRef}
                src={eye_opened}
                alt="eye toggle password view"
                className="toggle-password"
              />
            </span>
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo de Conta</label>
            <select
              id="type"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="">Selecione</option>
              <option value="user">Usuário</option>
              <option value="medico">Médico</option>
              <option value="psicologo">Psicólogo</option>
            </select>
            {selectedOption === "medico" && (
              <div className="form-group">
                <label htmlFor="crm">CRM</label>
                <input type="text" id="crm" required />
              </div>
            )}
            {selectedOption === "psicologo" && (
              <div className="form-group">
                <label htmlFor="crp">CRP</label>
                <input type="text" id="crp" required />
              </div>
            )}
            {error && <p className="error">{error}</p>}
          </div>
          <button type="submit" onClick={handleSubmit}>
            Cadastre-se
          </button>
        </form>
      </div>
    </div>
  );
}
