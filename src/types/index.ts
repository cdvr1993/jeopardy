import { AxiosResponse } from 'axios';

interface _JSONResponse<P> {
  data?: P
  errors?: Array<string>
  meta?: any // It is for non-standard info
}
export type JSONResponse<P> = AxiosResponse<_JSONResponse<P>>

export interface BaseAction { readonly type: string }

export type Dispatcher = (action: BaseAction) => void

export interface ColorConfig {
  defaultColor: string
  possibleColors: Array<string>
}

export interface Game {
  answered: { [key: string]: { [key: number]: number } }
  categories: Array<string>
  currentPlayer: number
  numberOfPlayers: number
  possibleScores: Array<number>
  scores: Array<number>
}

export interface Question {
  statement: string
  answer: string
}

export interface JeopardyQuestion extends Question {
  category: string
  score: number
}

export interface ReducerManager {
  GameReducer: Game
  QuestionReducer: JeopardyQuestion
}
