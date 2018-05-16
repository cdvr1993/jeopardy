import { BaseAction, JeopardyQuestion } from 'types';
import { FETCH_QUESTION_SUCCESS_ACTION, FetchQuestionSuccessAction } from 'actions';

const initialQuestion: JeopardyQuestion = {
  answer: '',
  category: '',
  score: 0,
  statement: ''
};

export default (state: JeopardyQuestion = initialQuestion, action: BaseAction) => {
  switch (action.type) {
    case FETCH_QUESTION_SUCCESS_ACTION:
      return (<FetchQuestionSuccessAction>action).question;
    default:
      return state;
  }
}