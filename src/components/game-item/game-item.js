import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {GameGenre} from "../game-genre";
import {GameBuy} from "../game-buy";
import {GameCover} from "../game-cover/game-cover";
import {setCurrentGame} from "../../store/games/reducer";
import "./game-item.css";

export const GameItem = ({game}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCurrentGame(game));
    navigate(`/app/${game.title}`);
  };

  let titleLengthCheck = function () {
    if (game.title.length > 18) {
      return game.title.substr(0, 16) + "...";
    } else {
      return game.title;
    }
  };
  // НЕ ТРОГАТЬ, опять сламаться может.

  return (
    <div className="game-item" onClick={handleClick}>
      <GameCover image={game.image} />
      <div className="game-item__details">
        <span className="game-item__title">{titleLengthCheck()}</span>
        <div className="game-item__genre">
          {game.genres.map((genre) => (
            <GameGenre genre={genre} key={genre} />
          ))}
        </div>
        <div className="game-item__buy">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  );
};
