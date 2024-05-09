import React from "react";
import "./style.css";

const Header = () => {
  return (
    <section className="container">
      <div className="header-items">
        <img
          className="header-vektor_img"
          src={require("../../assets/imgs/header-vektor.png")}
          alt="vektor"
        />
        <p className="header-item header-info">Консультация от врачей</p>
        <h1 className="header-item header-title">
          Получайте бесплатную консультацию от <br /> лучших специалистов
        </h1>
        <div className="header-item header-menu_items">
          <div className="header-menu_item">
            <img src={require("../../assets/imgs/star.png")} alt="star" />
            <span>Лучшие консультанты</span>
          </div>
          <div className="header-menu_item">
            <img
              src={require("../../assets/imgs/question-circle.png")}
              alt="star"
            />
            <span>Задать вопрос</span>
          </div>
          <div className="header-menu_item">
            <img
              src={require("../../assets/imgs/files-landscapes-alt.png")}
              alt="star"
            />
            <span>Популярные вопросы</span>
          </div>
        </div>
        <div className="header-item header-result_items">
          <div className="header-result_item">
            <span>+1 000</span>
            <p>Врачей различных специализаций</p>
          </div>
          <div className="header-result_item">
            <span>24/7</span>
            <p>Доступ к медицинской помощи</p>
          </div>
          <div className="header-result_item">
            <span>+95%</span>
            <p>Положительных отзывов</p>
          </div>
          <div className="header-result_item">
            <span>+20 000</span>
            <p>Анкет пользователей</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
