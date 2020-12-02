import {createSelector, createFeatureSelector, combineReducers, Action} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import * as fromSearchPage from './search-page.reducer';

export const searchFeatureKey = 'search';

export interface SearchState {
    [fromSearchPage.searchPageFeatureKey]: fromSearchPage.State;
}

export interface State extends fromRoot.State {
    [searchFeatureKey]: SearchState;
}

export function reducers(state: SearchState | undefined, action: Action) {
    return combineReducers({
        [fromSearchPage.searchPageFeatureKey]: fromSearchPage.reducer,
    })(state, action);
}

export const selectSearchState = createFeatureSelector<State, SearchState>(searchFeatureKey);

export const selectSearchPageState = createSelector(
    selectSearchState,
    (state: SearchState) => state.searchPage
);
export const selectSearchPageError = createSelector(
    selectSearchPageState,
    fromSearchPage.selectError
);
export const selectSearch = createSelector(
    selectSearchPageState,
    fromSearchPage.selectSearch
);
export const selectQuery = createSelector(
    selectSearchPageState,
    fromSearchPage.selectQuery
);
export const selectParams = createSelector(
    selectSearchPageState,
    fromSearchPage.selectParams
);
