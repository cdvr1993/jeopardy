import * as React from 'react';
import { IGameService } from './game-service';
import { GameServiceMock } from '../../tests/stubs/game-service'; // TODO: Remove this stub

export interface ServiceManager {
  gameService: IGameService
}

const services: ServiceManager = {
  gameService: new GameServiceMock()
};

export function withServices<P>(handler: (manager: ServiceManager) => P): P {
  return handler(services);
}
