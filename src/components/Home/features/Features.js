import iconTech from "./img/technology_icon.png";
import iconHealth from "./img/health_icon.png";
import iconHeart from "./img/heart_icon.png";
import "./Features.css";

export function Features() {
  return (
    <div className="features">
      <h1>Key Features</h1>
      <div className="features-container">
        <Feature
          icon={iconTech}
          text="Conecte-se a médicos experientes onde quer que esteja, garantindo acesso imediato aos cuidados de saúde necessários."
        />
        <Feature
          icon={iconHealth}
          text="Receba diagnósticos precisos e rápidos, graças a soluções inovadoras que aumentam suas chances de recuperação."
        />
        <Feature
          icon={iconHeart}
          text="Acompanhamento em tempo real de seus sinais vitais, promovendo uma vida saudável e proativa."
        />
      </div>
    </div>
  );

  function Feature({ icon, text }) {
    return (
      <div className="feature">
        <div className="feature-icon">
          <img src={icon} alt={icon} />
        </div>
        <div className="feature-text">
          <h3>{text}</h3>
        </div>
      </div>
    );
  }
}
