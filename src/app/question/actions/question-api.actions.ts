import {createAction, props} from '@ngrx/store';
import { Question } from '../models';

export const getQuestionSuccess = createAction(
    '[Question Api] Get Question Success',
    props<{question: Question}>()
);
export const getQuestionFailure = createAction(
    '[Question Api] Get Question Failure',
    props<{error: string}>()
);
export const fetchAnswersSuccess = createAction(
    '[Question Api] Fetch Answers Success',
    props<{answers: Question}>()
);
export const fetchAnswersFailure = createAction(
    '[Question Api] Fetch Answers Failure',
    props<{error: string}>()
);