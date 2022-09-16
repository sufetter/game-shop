import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {GameBuy} from "../../components/game-buy";
import {GameCover} from "../../components/game-cover/game-cover";
import {GameGenre} from "../../components/game-genre";
import {useParams} from "react-router-dom";
import {setCurrentGame} from "../../store/games/reducer";
import data from "../../data/games.json";
import "./game-page.css";

export const GamePage = () => {
  const dispatch = useDispatch();
  const searchGame = useParams();
  let game = useSelector((state) => state.games.currentGame);

  if (!game) {
    game = data.games.find((item) => item.title === searchGame.title);
    if (game === undefined) {
      return <div className="err-not-found">Игра не найдена</div>;
    }
    dispatch(setCurrentGame(game));
  }
  return (
    <div className="game-page">
      <h1 className="game-page__title">{game.title}</h1>
      <div className="game-page__content">
        <div className="game-page__info">
          <GameCover image={game.image} />
          <p>{game.description}</p>
          <p className="secondary-text">Популярные метки для этого продукта:</p>
          <div className="game-genres">
            {game.genres.map((genre) => (
              <GameGenre genre={genre} key={genre} />
            ))}
          </div>

          <div className="game-page__buy-game">
            <GameBuy game={game} />
          </div>
        </div>
        <div className="game-page__trailer">
          <iframe
            width="90%"
            height="400px"
            src={game.video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
