import * as React from 'react';
import { Button, Col, ColProps, Row } from 'react-materialize';
import { connect, DispatchProp } from 'react-redux';
import { fetchGame } from 'actions';
import { Game } from 'types';

interface GameDashboardProps {
  game: Game
}

const COLUMNS = 12;

class _GameDashboard extends React.Component<DispatchProp & GameDashboardProps> {
  componentDidMount() {
    fetchGame(this.props.dispatch);
  }

  onCategoryClick(category: string, score: number) {
    console.log(category, score);
  }

  render(): React.ReactNode {
    let board;

    if (this.props.game) {
      const { categories } = this.props.game;
      const possibleScores = this.props.game.possibleScores.slice();
      possibleScores.sort((a: number, b: number) => b - a);
      const colSize = Math.floor(COLUMNS / categories.length);
      const sizeProp: ColProps = {s: 12};
      if (categories.length <= 4) sizeProp.m = colSize;
      else Object.assign(sizeProp, {m: colSize * 2, l: colSize});

      board = (
        <Row>
          {categories.map(category => (
            <Col key={category} {...sizeProp}>
              <Row>
                <Col s={12}>
                  <h5 className="center-align">{category}</h5>
                </Col>
              </Row>
              <Row>
                {possibleScores.map(score => (
                  <Row key={score}>
                    <Col s={12}>
                      <Button waves='light' onClick={this.onCategoryClick.bind(this, category, score)} style={{width: "100%"}}>
                        <h6 className="center-align">{score}</h6>
                      </Button>
                    </Col>
                  </Row>
                ))}
              </Row>
            </Col>
          ))}
        </Row>
      );
    }


    return (
      <div>
        <Row>
          <Col s={12}>
            <h3 className="center-align">Jeopardy!</h3>
          </Col>
        </Row>

        {board}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { game: state.GameReducer };
};


export const GameDashboard = connect(mapStateToProps)(_GameDashboard);