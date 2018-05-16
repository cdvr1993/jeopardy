import {  BaseAction, Dispatcher, JSONResponse, JeopardyQuestion, Question } from 'types';

export interface FetchQuestionSuccessAction extends BaseAction{ question: any }
export const FETCH_QUESTION_SUCCESS_ACTION = 'FQSA';
export function fetchQuestionSuccessAction(question: JeopardyQuestion): FetchQuestionSuccessAction {
  return { type: FETCH_QUESTION_SUCCESS_ACTION, question };
}

const FetchQuestionMock: JSONResponse<Question> = {
  data: {
    data: <Question>{
      statement: 'The amount of time between World Cups',
      answer: '4 years'
    }
  },
  status: 200,
  statusText: null,
  config: null,
  headers: null
}

export function fetchQuestion(dispatch: Dispatcher, category: string, score: number) {
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(FetchQuestionMock), 100)
  }).then((response: JSONResponse<Question>) => {
    const question = Object.assign({ category, score }, response.data.data);
    dispatch(fetchQuestionSuccessAction(question));
  });
}
