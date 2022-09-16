import React from "react";
import {GameItem} from "../../components/game-item";
import {Slider} from "../../components/slider";
import {Info} from "../../components/info";
import "./home-page.css";
import data from "../../data/games.json";

export const HomePage = () => {
  console.log(data);
  return (
    <div className="home-page">
      <Info />
      <div className="category-item">
        <div className="category-title">Popular Games</div>
        <div className="games">
          <Slider>
            {data.games.map((game) => (
              <GameItem game={game} key={game.id} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
