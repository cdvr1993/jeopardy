import { AxiosResponse } from 'axios';

interface _JSONResponse<P> {
  data?: P
  errors?: Array<string>
  meta?: any // It is for non-standard info
}
export type JSONResponse<P> = AxiosResponse<_JSONResponse<P>>

export interface BaseAction { readonly type: string }

export type Dispatcher = (action: BaseAction) => void

export interface Game {
  categories: Array<string>
  currentPlayer: number
  numberOfPlayers: number
  possibleScores: Array<number>
  scores: Array<number>
}