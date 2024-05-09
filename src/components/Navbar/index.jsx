import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar-one">
        <div className="navbar-one_city">
          <img src={require("../../assets/imgs/map.png")} alt="map" />
          <select name="city" id="city">
            <option value="1">Ташкент</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="navbar-one_lang">
          <select name="city" id="city">
            <img src={require("../../assets/imgs/map.png")} alt="map" />
            <option value="1">Ташкент</option>
            <option value="2">
              <img src={require("../../assets/imgs/map.png")} alt="map" />2
            </option>
            <option value="3">
              <img src={require("../../assets/imgs/map.png")} alt="map" />3
            </option>
            <option value="4">
              <img src={require("../../assets/imgs/map.png")} alt="map" />4
            </option>
          </select>
        </div>
      </div>
      <div className="navbar-two">
        <div className="navbar-two_logo">
          <img src={require("../../assets/imgs/Logo.png")} alt="Logo" />
          <span>
            Консультация <br /> от врачей
          </span>
        </div>
        <div className="navbar-two_catalog">
          <img src={require("../../assets/imgs/apps.png")} alt="apps" />
          Каталог услуг
        </div>
        <ul className="navbar-two_nav">
          <li>
            <a href="#/">О проекте</a>
          </li>
          <li>
            <a href="#/">Партнерство</a>
          </li>
          <li>
            <a href="#/">Контакты</a>
          </li>
        </ul>
        <div className="navbar-two_login">
          <a href="#/">Вход</a>/<a href="#/">Регистрация</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
