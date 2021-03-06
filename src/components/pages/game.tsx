import * as React from 'react';
import { Button, Col, ColProps, Row } from 'react-materialize';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchGame } from 'actions';
import { ColorDashboard } from 'components/color-dashboard';
import { ColorConfig, Game, ReducerManager } from 'types';
import { GameBoard, GameDashboardProps } from 'components/game-board';

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

        <GameBoard game={this.props.game} playersInfo={this.props.playersInfo} />
      </div>
    );
  }
}

const mapStateToProps = (state: ReducerManager): GameDashboardProps => {
  return { game: state.GameReducer, playersInfo: state.PlayersInfoReducer };
};


export const GameDashboard = connect(mapStateToProps)(_GameDashboard);