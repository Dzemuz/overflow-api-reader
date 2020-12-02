import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromSearch from '../reducers/';
import {Store} from '@ngrx/store';
import {SearchService} from '../service';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchPageActions, SearchApiActions } from '../actions';
import { SearchResult } from '../models/search.model';

@Injectable()
export class SearchEffects {
    
    getSearch$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SearchPageActions.getSearch),
            withLatestFrom(this.store.select(fromSearch.selectParams)),
            switchMap(([action, p]) =>
                this.searchService.getSearch(action.search, p).pipe(
                    map((search: SearchResult) =>
                        SearchApiActions.getSearchSuccess({search}),
                    ),
                    catchError((error: string) =>
                        of(SearchApiActions.getSearchFailure({error})),
                    )
                )
            )
        )
    );

    changePage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(SearchPageActions.changePage),
            withLatestFrom(this.store.select(fromSearch.selectQuery)),
            map(([_,query]) => query?SearchPageActions.getSearch({search:query}):SearchApiActions.getSearchFailure({error:"empty query"})
            )
        )
    );

    constructor(
        private store: Store<fromSearch.State>,
        private actions$: Actions,
        private searchService: SearchService
    ) {}
}
