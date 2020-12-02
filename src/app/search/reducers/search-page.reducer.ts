import {SearchApiActions, SearchPageActions} from '../actions';
import {createReducer, on} from '@ngrx/store';
import { PaginationParams, SearchResult } from '../models/search.model';

export const searchPageFeatureKey = 'searchPage';

export interface State {
    searchResult: SearchResult | null,
    query: string | null,
    params: PaginationParams,
    error: string | null;
}

export const initialState: State = {
    searchResult:null,
    query:null,
    params:{pageIndex:1, pageSize:10},
    error: null,
};

export const reducer = createReducer(
    initialState,
    on(SearchPageActions.getSearch,
        (state, action)=>({...state, query:action.search})),
    on(SearchApiActions.getSearchSuccess,
        (state, action) => ({ ...state, searchResult: action.search })),
    on(
        SearchApiActions.getSearchFailure,
        (state, err) => ({ ...state, error: err.error })),
    on(SearchPageActions.changePage,
        (state, action)=>({...state, params:action.params })),
);

export const selectError = (state: State) => state.error;
export const selectSearch = (state: State) => state.searchResult;
export const selectQuery = (state: State) => state.query;
export const selectParams = (state: State) => state.params;
