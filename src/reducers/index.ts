import { combineReducers } from 'redux';
import GameReducer from 'reducers/game';
import PlayersInfoReducer from 'reducers/players-info';
import QuestionReducer from 'reducers/question';

export default combineReducers({
  GameReducer,
  PlayersInfoReducer,
  QuestionReducer
});
