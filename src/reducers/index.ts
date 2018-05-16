import { combineReducers } from 'redux';
import GameReducer from 'reducers/game';
import QuestionReducer from 'reducers/question';

export default combineReducers({
  GameReducer,
  QuestionReducer
});
