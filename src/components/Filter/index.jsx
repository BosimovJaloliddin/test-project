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
        <div className="filter-item">
          <input type="text" />
          <img src="" alt="" />
        </div>
        <div className="filter-item">1</div>
        <div className="filter-item">1</div>
        <div className="filter-item">1</div>
        <div className="filter-item">1</div>
      </div>
    </section>
  );
};

export default Filter;
