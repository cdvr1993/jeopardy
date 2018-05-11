import * as React from 'react';
import { Button, Col, ColProps, Row } from 'react-materialize';
import { Link } from 'react-router-dom';
import { ColorDashboard } from 'components/color-dashboard';
import { ColorConfig, Game } from 'types';

export interface GameDashboardProps {
  game: Game
};

const COLUMNS = 12;

const colorConfig: ColorConfig = {
  defaultColor: 'white',
  possibleColors: ['blue', 'purple', 'brown', 'orange', 'amber']
};

const getColor = (answered: any, category: string, score: number) => (
  answered[category][score] == null
    ? colorConfig.defaultColor
    : colorConfig.possibleColors[answered[category][score]]
);

export const GameBoard = (props: GameDashboardProps) => {
  if (!props.game) return null;

  const { answered, categories, numberOfPlayers } = props.game;
  const possibleScores = props.game.possibleScores.slice();
  possibleScores.sort((a: number, b: number) => b - a);
  const colSize = Math.floor(COLUMNS / categories.length);
  const sizeProp: ColProps = {s: 12};
  if (categories.length <= 4) sizeProp.m = colSize;
  else Object.assign(sizeProp, {m: colSize * 2, l: colSize});

  return (
    <div>
      <Row>
        {categories.map((category: string) => (
          <Col key={category} {...sizeProp}>
            <Row>
              <Col s={12}>
                <h5 className="center-align">{category}</h5>
              </Col>
            </Row>
            <Row>
              {possibleScores.map((score: number) => (
                <Row key={score}>
                  <Col s={12}>
                    <Button
                      waves='light'
                      style={{width: "100%"}}
                      disabled={answered[category][score] != null}
                    >
                      <Link to={`/question/${category}/${score}`} style={{color: getColor(answered, category, score)}}>
                        <h6 className="center-align" style={{ fontWeight: 'bold' }}>{score}</h6>
                      </Link>
                    </Button>
                  </Col>
                </Row>
              ))}
            </Row>
          </Col>
        ))}
      </Row>
      <Row>
        <ColorDashboard colors={colorConfig.possibleColors.slice(0, numberOfPlayers)} />
      </Row>
    </div>
  );
}
