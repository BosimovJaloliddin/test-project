import React from "react";
import "./style.css";
import FaqCard from "../ui/FaqCard";

const Faq = () => {
  return (
    <section className="faq">
      <div className="faq-header">
        <h3 className="faq-title">
          Список последних ответов на вопросы <span>(12 493)</span>
        </h3>
        <div className="faq-filter">
          <div className="faq-filter_item">
            <img src={require("../../assets/imgs/bar-faq.png")} alt="Bar" />
            <span>Сортировать по</span>
          </div>
        </div>
      </div>
      <div className="faq-search">
        <input type="text" placeholder="Искать по тексту в вопросе" />
        <button>
          <img src={require("../../assets/imgs/search-faq.png")} alt="search" />
          Поиск
        </button>
      </div>
      <FaqCard />
    </section>
  );
};

export default Faq;
