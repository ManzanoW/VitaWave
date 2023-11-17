import "./Agendamentos.css";

export default function Agendamentos({ agendamentos }) {
  return (
    <div>
      <div className="agendamentos">
        <h1>Agendamentos</h1>
        {agendamentos.length > 0 ? (
          agendamentos.map((agendamento) => (
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
      </div>
    </div>
  );
}
