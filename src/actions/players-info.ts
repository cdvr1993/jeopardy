
import {  BaseAction, Dispatcher, JSONResponse, PlayersInfo } from 'types';

export interface FetchPlayersInfoSuccessAction extends BaseAction{ playersInfo: PlayersInfo }
export const FETCH_PLAYERS_INFO_SUCCESS_ACTION = 'FPISA';
export function fetchPlayersInfoSuccessAction(playersInfo: PlayersInfo): FetchPlayersInfoSuccessAction {
  return { type: FETCH_PLAYERS_INFO_SUCCESS_ACTION, playersInfo };
}

const PlayersInfoMock: JSONResponse<PlayersInfo> = {
  data: {
    data: <PlayersInfo>{
      currentPlayer: 0,
      numberOfPlayers: 4,
    },
  },
  status: 200,
  statusText: null,
  config: null,
  headers: null
}

export function fetchPlayersInfo(dispatch: Dispatcher): any {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(PlayersInfoMock), 100)
  }).then((response: JSONResponse<PlayersInfo>) => {
    dispatch(fetchPlayersInfoSuccessAction(response.data.data));
  });
}