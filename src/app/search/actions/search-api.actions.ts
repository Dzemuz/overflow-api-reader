import {createAction, props} from '@ngrx/store';
import { SearchResult } from '../models';

export const getSearchSuccess = createAction(
    '[Search Api] Get Search Success',
    props<{search: SearchResult}>()
);
export const getSearchFailure = createAction(
    '[Search Api] Get Search Failure',
    props<{error: string}>()
);