import * as React from 'react';
import { Button, Col, ColProps, Row } from 'react-materialize';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchGame } from 'actions';
import { ColorDashboard } from 'components/color-dashboard';
import { ColorConfig, Game } from 'types';
import { GameBoard } from 'components/game-board';

interface GameDashboardProps {
  game: Game
}

const COLUMNS = 12;

const colorConfig: ColorConfig = {
  defaultColor: 'white',
  possibleColors: ['blue', 'purple', 'brown', 'orange', 'amber']
};

class _GameDashboard extends React.Component<DispatchProp & RouteComponentProps<{}> & GameDashboardProps> {
  componentDidMount() {
    fetchGame(this.props.dispatch);
  }

  render(): React.ReactNode {
    return (
      <div>
        <Row>
          <Col s={12}>
            <h3 className="center-align">Jeopardy!</h3>
          </Col>
        </Row>

        <GameBoard game={this.props.game} />
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { game: state.GameReducer };
};


export const GameDashboard = connect(mapStateToProps)(_GameDashboard);