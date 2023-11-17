import "./Profissionais.css";

export default function Perfil() {
  const profissionais = [
    {
      id: 1,
      name: "José da Silva",
      cargo: "Psicólogo",
      crp: "06/001011",
      tel: "(11) 99999-9999",
    },
    {
      id: 2,
      name: "Maria Antônia",
      cargo: "Médico",
      crm: "0123456/SP",
      tel: "(11) 99567-1234",
    },
    {
      id: 3,
      name: "João Carlos",
      cargo: "Psicólogo",
      crp: "08/006012",
      tel: "(11) 99245-6789",
    },
  ];

  return (
    <div>
      <div className="profissionais">
        <h1>Profissionais</h1>
        {profissionais.length > 0 ? (
          profissionais.map((profissional) => (
            <div className="profissional" key={profissional.id}>
              <section className="profissional-name">
                <h2>{profissional.name}</h2>
                <h2 className="cargo">{profissional.cargo}</h2>
              </section>
              <section className="profissional-info">
                <p>
                  {profissional.cargo === "Médico"
                    ? "CRM: " + profissional.crm
                    : "CRP: " + profissional.crp}
                </p>
                <p>{profissional.tel}</p>
              </section>
            </div>
          ))
        ) : (
          <p>Nenhum profissional encontrado</p>
        )}
      </div>
    </div>
  );
}
