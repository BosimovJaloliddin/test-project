import React from "react";
import "./style.css";

const FaqCard = () => {
  return (
    <div className="faq-card">
      <div className="faq-card_info">
        <p>Вопрос: 21408</p>
        <span>Январь 27, 2024 9:41 pm</span>
      </div>
      <div className="faq-card_item">
        <div className="faq-card_question faq-card_question-color">
          <div className="faq-question_info">
            <p className="question">Получено ответов (3)</p>
            <p className="question-user">Lorri Warf (26 лет)</p>
          </div>
          <p className="faq-question">
            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
            быстро уставать и появилась постоянная усталость, несмотря на
            полноценный сон. К тому же, у меня снизился аппетит, и я замечаю
            периодические головные боли. Могли бы вы подсказать, что это может
            быть и какие обследования мне стоит пройти для уточнения...
            <span>Читать полностью</span>
          </p>
        </div>
        <div className="faq-card_status">
          <div className="faq-status_img">
            <img src={require("../../../assets/imgs/faq-img1.png")} alt="img" />
          </div>
        </div>
      </div>
      <div className="faq-card_answer">
        <div className="faq-card_question faq-card_answer-color">
          <div className="faq-question_info">
            <p className="answer">Получено ответов (3)</p>
            <p className="answer-user question-user">Lorri Warf (26 лет)</p>
          </div>
          <p className="faq-question faq-answer">
            "Здравствуйте, доктор. В последнее время я заметил(а), что стал(а)
            быстро уставать и появилась постоянная усталость, несмотря на
            полноценный сон. К тому же, у меня снизился аппетит, и я замечаю
            периодические головные боли. Могли бы вы подсказать, что это может
            быть и какие обследования мне стоит пройти для уточнения...
            <span>Читать полностью</span>
          </p>
        </div>
        <div className="faq-card_status">
          <img src={require("../../../assets/imgs/faq-doc.png")} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default FaqCard;
