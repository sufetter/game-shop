import React from "react";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import "./slider.css";

export function Slider({children}) {
  function slide(side) {
    let slider = document.getElementById("slider");

    document.getElementsByClassName("game-item")[3].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    if (side === "left") {
      slider.scrollLeft = slider.scrollLeft - 280;
    } else {
      slider.scrollLeft = slider.scrollLeft + 280;
    }
  }

  return (
    <div className="game-wrapper">
      <MdChevronLeft
        className="slide-left"
        size={40}
        onClick={() => slide("left")}
      />
      <div className="slider" id="slider">
        {children}
      </div>
      <MdChevronRight
        size={40}
        className="slide-right"
        onClick={() => slide("right")}
      />
    </div>
  );
}
