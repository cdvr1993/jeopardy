import { Game } from "../../src/services/game-service";

export class GameServiceMock {
  getGame(): Game {
    return {
      categories: ['Science', 'Literature', 'History', 'Sports'],
      currentPlayer: 0,
      numberOfPlayers: 4,
      possibleScores: [50, 100, 150, 200],
      scores: [0, 100, 50, 200]
    };
  }
}