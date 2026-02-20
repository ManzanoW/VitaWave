import React, { useEffect, useRef, useState } from "react";
import "./Register.css";
import eye_closed from "./eye_closed_icon.png";
import eye_opened from "./eye_looking_icon.png";

export function Register() {
  const passwordRef = useRef();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    type: "",
    crm: "",
    crp: "",
  });

  // Toggle senha corrigido (state + onClick simples)
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Função que simula cadastro (localStorage)
  function handleSubmit(e) {
    e.preventDefault();
    setError("");

    // Validações
    if (selectedOption === "") {
      setError("Por favor, selecione um tipo de conta");
      return;
    }
    if (!user.name || !user.email || !user.password) {
      setError("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    if (selectedOption === "medico" && !user.crm) {
      setError("Por favor, informe o CRM");
      return;
    }
    if (selectedOption === "psicologo" && !user.crp) {
      setError("Por favor, informe o CRP");
      return;
    }

    // Email básico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      setError("Email inválido");
      return;
    }

    // Simula "salvar" no localStorage
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    usuarios.push({ ...user, id: Date.now() });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    console.log("Usuário cadastrado:", user);
    setSuccess(true);
    setUser({ name: "", email: "", password: "", type: "", crm: "", crp: "" });
    setSelectedOption("");
  }

  return (
    <div className="register">
      <div className="register-form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
            <img
              onClick={togglePassword}
              src={showPassword ? eye_opened : eye_closed}
              alt="Toggle senha"
              className="toggle-password"
              style={{ cursor: "pointer" }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Tipo de Conta</label>
            <select
              id="type"
              value={selectedOption}
              onChange={(e) => {
                setUser({ ...user, type: e.target.value });
                setSelectedOption(e.target.value);
              }}
            >
              <option value="">Selecione</option>
              <option value="user">Usuário</option>
              <option value="medico">Médico</option>
              <option value="psicologo">Psicólogo</option>
            </select>
          </div>

          {selectedOption === "medico" && (
            <div className="form-group">
              <label htmlFor="crm">CRM</label>
              <input
                type="text"
                id="crm"
                value={user.crm}
                onChange={(e) => setUser({ ...user, crm: e.target.value })}
                required
              />
            </div>
          )}

          {selectedOption === "psicologo" && (
            <div className="form-group">
              <label htmlFor="crp">CRP</label>
              <input
                type="text"
                id="crp"
                value={user.crp}
                onChange={(e) => setUser({ ...user, crp: e.target.value })}
                required
              />
            </div>
          )}

          {error && <p className="error">{error}</p>}
          {success && (
            <p className="success">Cadastro realizado com sucesso!</p>
          )}

          <button type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
  );
}
