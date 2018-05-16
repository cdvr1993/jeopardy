import { FetchPlayersInfoSuccessAction, FETCH_PLAYERS_INFO_SUCCESS_ACTION } from 'actions';
import { BaseAction, PlayersInfo } from 'types';

const initialGame = <PlayersInfo>{
  currentPlayer: 0,
  numberOfPlayers: 0
}

export default (state: PlayersInfo = initialGame, action: BaseAction) => {
  switch (action.type) {
    case FETCH_PLAYERS_INFO_SUCCESS_ACTION:
      return (<FetchPlayersInfoSuccessAction>action).playersInfo;
    default:
      return state;
  }
}