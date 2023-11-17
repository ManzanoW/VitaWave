import "./Reviews.css";

export function Reviews() {
  return (
    <div className="reviews">
      <h1>Reviews</h1>
      <div className="reviews-container">
        <Review
          name="Laura M."
          text={`"O monitoramento contínuo da minha saúde com a VitaWave tem sido uma experiência transformadora. Os dispositivos portáteis e os aplicativos fornecem informações em tempo real, permitindo que eu tome medidas proativas para melhorar minha saúde. Recomendo totalmente!"`}
        />
        <Review
          name="Maria S."
          text={`"Com a VitaWave, tive acesso rápido a um médico competente por meio da telemedicina. Foi incrível poder receber orientações médicas sem sair de casa. Recomendo a todos que buscam conveniência e cuidados de saúde de qualidade."`}
        />
        <Review
          name="João L."
          text={`"Graças ao diagnóstico avançado da VitaWave, descobri uma condição médica precocemente, o que permitiu um tratamento eficiente. Estou impressionado com a precisão e a rapidez do serviço. Excelente equipe!"`}
        />
      </div>
    </div>
  );

  function Review({ text, name }) {
    return (
      <div className="review">
        <p className="review-text">{text}</p>
        <h3 className="review-name">{name}</h3>
      </div>
    );
  }
}
