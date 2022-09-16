import React from "react";
import infoBg from "../../images/main.gif";
import "./info.css";

export const Info = () => {
  function desc() {
    if (window.screen.width <= 576) {
      return "Лучший магазин";
    } else {
      return "Все игры по наилучшим ценам";
    }
  }

  return (
    <div className="info">
      <img src={infoBg} className="info-bg" />
      <div className="info-content">
        <div className="info-text">
          <div className="info-title">Hiks Store</div>
          <div className="info-description" align="center">
            {desc()}
          </div>
        </div>
      </div>
    </div>
  );
};
