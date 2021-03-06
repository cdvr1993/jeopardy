import * as React from 'react';
import { Button, Col, Input, Row } from 'react-materialize';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { fetchQuestion } from 'actions';
import { JeopardyQuestion, PlayersInfo, ReducerManager } from 'types';

interface QuestionProps {
  question: JeopardyQuestion
  playersInfo: PlayersInfo
}

interface QuestionRouteParams {
  category: string
  score: number
}

class _Question extends React.Component<QuestionProps & DispatchProp & RouteComponentProps<{}>> {
  private isQuestionRouteParams(params: any): params is QuestionRouteParams {
    return params.score != null && params.score != null;
  }

  componentDidMount() {
    if (this.isQuestionRouteParams(this.props.match.params)) {
      const { category, score } = this.props.match.params;

      fetchQuestion(this.props.dispatch, category, score);
    }
  }

  render(): React.ReactNode {
    const { question } = this.props;

    let optionTeams: React.ReactNode;

    if (this.props.playersInfo) {
      optionTeams = (
        <Input type="select" label="Select team">
          <option value="-1">NA</option>
          {Array.from({ length: this.props.playersInfo.numberOfPlayers}).map((val: any, key: number) => (
            <option key={key} value={key}>{key + 1}</option>
          ))}
        </Input>
      );
    }

    return (
      <Row>
        <Col s={12}>
          <Row>
            <Col s={10} offset="s1">
              <h3 className="center" style={{textTransform: 'capitalize'}}>{question.category}</h3>
            </Col>
            <Col s={1}>
              <h3 className="center">{question.score}</h3>
            </Col>
          </Row>

          <Row style={{marginTop: '3em'}}>
            <Col s={12}>
              <h4 className="center">{question.statement}</h4>
            </Col>
          </Row>

          <Row style={{marginTop: '10em'}}>
            <Col m={2} l={1} offset="m7 l9" className="input-field">
              {optionTeams}
            </Col>
            <Col m={3} l={2}>
              <Col s={12}>
                <Button style={{marginTop: '35px', width: '100%'}}>Next</Button>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state: ReducerManager): QuestionProps => {
  return { question: state.QuestionReducer, playersInfo: state.PlayersInfoReducer };
};

export const Question = connect(mapStateToProps)(_Question);
