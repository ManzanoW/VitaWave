import "./Profissionais.css";
import { useState, useEffect } from "react";

export default function Perfil() {
  const [profissionais, setProfissionais] = useState([]);

  useEffect(() => {
    const fetchProfissionais = async () => {
      try {
        const response = await fetch("https://api.example.com/profissionais");
        const data = await response.json();
        setProfissionais(data);
      } catch (error) {
        // console.error("Error:", error);
      }
    };

    fetchProfissionais();
  }, []);

  return (
    <div>
      <div className="profissionais">
        <h1>Profissionais</h1>
        {profissionais.length > 0 ? (
          profissionais.map((profissional) => (
            <div className="profissional" key={profissional.id}>
              <section className="profissional-name">
                <h2>{profissional.name}</h2>
                <h2 className="cargo">{profissional.type}</h2>
              </section>
              <section className="profissional-info">
                <p>
                  {profissional.type === "Médico"
                    ? "CRM: " + profissional.crm
                    : "CRP: " + profissional.crp}
                </p>
                <p>{profissional.email}</p>
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
