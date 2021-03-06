import {  BaseAction, Dispatcher, Game, JSONResponse } from 'types';

export interface FetchGameSuccessAction extends BaseAction{ game: Game }

export const FETCH_GAME_SUCCESS_ACTION = 'FGSA';
export function fetchGameSuccessAction(game: Game): FetchGameSuccessAction {
  return { type: FETCH_GAME_SUCCESS_ACTION, game };
}

const FetchGameMock: JSONResponse<Game> = {
  data: {
    data: <Game>{
      answered: {
        science: {100: 0},
        literature: {50: 1, 100: 3, 150: 2, 200: 1},
        history: {},
        sports: {100: 0, 150: 0, 200: 2}
      },
      categories: ['science', 'literature', 'history', 'sports'],
      possibleScores: [50, 100, 150, 200],
      scores: [0, 100, 50, 200]
    }
  },
  status: 200,
  statusText: null,
  config: null,
  headers: null
};

export function fetchGame(dispatch: Dispatcher): any {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(FetchGameMock), 100)
  }).then((response: JSONResponse<Game>) => {
    dispatch(fetchGameSuccessAction(response.data.data));
  });
}