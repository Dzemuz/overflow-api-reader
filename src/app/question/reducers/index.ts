import {createSelector, createFeatureSelector, combineReducers, Action} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromQuestionPage from './question-page.reducer';

export const questionFeatureKey = 'question';

export interface QuestionState {
    [fromQuestionPage.questionPageFeatureKey]: fromQuestionPage.State;
}

export interface State extends fromRoot.State {
    [questionFeatureKey]: QuestionState;
}

export function reducers(state: QuestionState | undefined, action: Action) {
    return combineReducers({
        [fromQuestionPage.questionPageFeatureKey]: fromQuestionPage.reducer,
    })(state, action);
}

export const selectQuestionState = createFeatureSelector<State, QuestionState>(questionFeatureKey);

export const selectQuestionPageState = createSelector(
    selectQuestionState,
    (state: QuestionState) => state.questionPage
);
export const selectQuestionPageError = createSelector(
    selectQuestionPageState,
    fromQuestionPage.selectError
);
export const selectQuestion = createSelector(
    selectQuestionPageState,
    fromQuestionPage.selectQuestion
);
export const selectAnswers = createSelector(
    selectQuestionPageState,
    fromQuestionPage.selectAnswers
);
export const selectLoading = createSelector(
    selectQuestionPageState,
    fromQuestionPage.selectLoading
);
