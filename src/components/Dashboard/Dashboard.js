import React, { useState } from "react";
import Menu from "./pages/Menu/Menu.js";
import Agendamentos from "./pages/Agendamentos/Agendamentos.js";
import Profissionais from "./pages/Profissionais/Profissionais";
import Perfil from "./pages/Perfil/Perfil";
import "./Dashboard.css";

export function Dashboard() {
  const [activePage, setActivePage] = useState("Menu");
  const agendamentos = [
    {
      id: 1,
      tipo: "Psiquiatra",
      dia: "07/11/2023",
    },
    {
      id: 2,
      tipo: "Médico",
      dia: "12/11/2023",
    },
    {
      id: 3,
      tipo: "Psiquiatra",
      dia: "12/11/2023",
    },
  ];

  function handleLogout() {
    // localStorage.clear();
    // window.location.reload();
    window.location.href = "/";
  }

  return (
    <div className="dashboard">
      <header>
        <nav className="header">
          <ul>
            <li onClick={() => setActivePage("Menu")}>Menu</li>
            <li onClick={() => setActivePage("Agendamentos")}>Agendamentos</li>
            <li onClick={() => setActivePage("Profissionais")}>
              Profissionais
            </li>
            <li onClick={() => setActivePage("Perfil")}>Perfil</li>
          </ul>
          <button onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <div className="content">
        {activePage === "Menu" && (
          // ✅ CORRIGIDO: passa setActivePage e agendamentos como props separadas
          <Menu setActivePage={setActivePage} agendamentos={agendamentos} />
        )}
        {activePage === "Agendamentos" && (
          <Agendamentos agendamentos={agendamentos} />
        )}
        {activePage === "Profissionais" && <Profissionais />}
        {activePage === "Perfil" && <Perfil />}
      </div>
    </div>
  );
}
