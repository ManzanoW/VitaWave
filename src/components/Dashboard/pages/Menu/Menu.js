import "./Menu.css";

export default function Menu({ setActivePage, agendamentos }) {
  const name = localStorage.getItem("name");
  const nameShort = name.split(" ")[0];

  return (
    <div>
      <h1>Bem vindo/a, {nameShort}</h1>
      <div className="menu">
        <div className="menu-item"></div>
        <Agendamentos
          setActivePage={setActivePage}
          agendamentos={agendamentos}
        />
      </div>
    </div>
  );
}

function Agendamentos({ setActivePage, agendamentos }) {
  return (
    <div className="menu-item">
      <h1>Últimos Agendamentos</h1>
      {agendamentos.length > 0 ? (
        agendamentos
          .sort(
            (a, b) =>
              Math.abs(new Date() - new Date(a.dia)) -
              Math.abs(new Date() - new Date(b.dia))
          )
          .slice(0, 3)
          .map((agendamento) => (
            <div className="agendamento" key={agendamento.id}>
              <h2>
                {agendamento.tipo === "Psiquiatra" ? "💊" : "🩺"}
                {agendamento.tipo}
              </h2>
              <section className="agendamento-info">
                <p>📅 {agendamento.dia}</p>
              </section>
            </div>
          ))
      ) : (
        <p>Nenhum agendamento encontrado</p>
      )}
      {
        <button onClick={() => setActivePage("Agendamentos")}>
          {agendamentos.length > 0 ? "Ver Mais" : "Agendar Consulta"}
        </button>
      }
    </div>
  );
}
