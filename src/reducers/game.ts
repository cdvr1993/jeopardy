import { FetchGameSuccessAction, FETCH_GAME_SUCCESS_ACTION } from 'actions';
import { BaseAction, Game } from 'types';

const initialGame = <Game>{
  categories: [],
  currentPlayer: 0,
  numberOfPlayers: 0,
  possibleScores: [],
  scores: []
}

export default (state: Game = initialGame, action: BaseAction) => {
  switch (action.type) {
    case FETCH_GAME_SUCCESS_ACTION:
      return (<FetchGameSuccessAction>action).game;
    default:
      return initialGame;
  }
}