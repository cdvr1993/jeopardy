export interface Game {
  categories: Array<string>
  currentPlayer: number
  numberOfPlayers: number
  possibleScores: Array<number>
  scores: Array<number>
}

export interface IGameService {
  getGame(): Game
}

// TODO: Implement game service class
