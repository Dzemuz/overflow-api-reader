import {QuestionApiActions, QuestionPageActions} from '../actions';
import {createReducer, on} from '@ngrx/store';
import { Question } from '../models/question.model';

export const questionPageFeatureKey = 'questionPage';

export interface State {
    question: Question | null,
    answers: Question | null,
    error: string | null;
    loading: boolean;
}

export const initialState: State = {
    question:null,
    answers:null,
    error: null,
    loading:true
};

export const reducer = createReducer(
    initialState,
    on(QuestionPageActions.getQuestion,
        (state)=>({...state, loading:true})),
    on(QuestionApiActions.getQuestionSuccess,
        (state, action) => ({ ...state, question: action.question, loading:false })),
    on(
        QuestionApiActions.getQuestionFailure,
        (state, err) => ({ ...state, error: err.error, loading:false })),

    on(QuestionPageActions.fetchAnswers,
        (state)=>({...state, answers:null, loading:true})),
    on(QuestionApiActions.fetchAnswersSuccess,
        (state, action) => ({ ...state, answers: action.answers, loading:false })),
    on(
        QuestionApiActions.fetchAnswersFailure,
        (state, err) => ({ ...state, error: err.error, loading:false })),
    on(
        QuestionPageActions.clear,
        state => ({ ...initialState,  })),
);

export const selectError = (state: State) => state.error;
export const selectLoading = (state: State) => state.loading;
export const selectQuestion = (state: State) => state.question;
export const selectAnswers = (state: State) => state.answers;
