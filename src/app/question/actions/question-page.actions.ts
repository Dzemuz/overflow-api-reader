import {createAction, props} from '@ngrx/store';


export const getQuestion = createAction(
    '[Question Page] Get Question',
    props<{id:string}>()
);
export const fetchAnswers = createAction(
    '[Question Page] Fetch Answers',
    props<{id:string}>()
);

export const clear = createAction(
    '[Question Page] Clear'
);