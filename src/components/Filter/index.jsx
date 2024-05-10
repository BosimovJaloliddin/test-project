import React from "react";
import "./style.css";

const Filter = () => {
  return (
    <section className="filter">
      <div className="filter-items">
        <div className="filter-item">
          <h4 className="filter-item_title">Фильтрация по направлениям</h4>
          <div className="filter-item_remov">
            <img src={require("../../assets/imgs/del-x.png")} alt="del-x" />
            <span>Сбросить</span>
          </div>
        </div>
        <div className="filter-item filter-item_search">
          <input type="text" placeholder="Поиск направления" />
          <img src={require("../../assets/imgs/search.png")} alt="search" />
        </div>
        <div className="filter-item">
          <div className="filter-item_checkbox">
            <input type="checkbox" id="allergolog" />
            <label htmlFor="allergolog">Аллерголог</label>
          </div>
          <p className="filter-checkbox_nums">(12 009)</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_checkbox">
            <input type="checkbox" id="allergolog" />
            <label htmlFor="allergolog">Аллерголог</label>
          </div>
          <p className="filter-checkbox_nums">(12 009)</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_checkbox">
            <input type="checkbox" id="allergolog" />
            <label htmlFor="allergolog">Аллерголог</label>
          </div>
          <p className="filter-checkbox_nums">(12 009)</p>
        </div>
        <div className="filter-item">
          <div className="filter-item_checkbox">
            <input type="checkbox" id="allergolog" />
            <label htmlFor="allergolog">Аллерголог</label>
          </div>
          <p className="filter-checkbox_nums">(12 009)</p>
        </div>
      </div>
    </section>
  );
};

export default Filter;
