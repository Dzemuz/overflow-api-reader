import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromSearch from '../reducers';
import { SearchPageActions } from '../actions';
import { PaginationParams } from '../models';

@Component({
  template: `
      <app-search
        [query]="query$ | async"
        [error]="error$ | async"
        (submitQuery)="onSubmitQuery($event)">
      </app-search>
      <app-search-result *ngIf="searchResult$ | async"
        [searchResult]="searchResult$ | async"
        (changePage)="onChangePage($event)">
      </app-search-result>
      `
})
export class SearchPageComponent {
  query$ = this.store.pipe(select(fromSearch.selectQuery));
  searchResult$ = this.store.pipe(select(fromSearch.selectSearch));
  error$ = this.store.pipe(select(fromSearch.selectSearchPageError));

  constructor(private store: Store<fromSearch.State>) {
  }
  onSubmitQuery(search: string) {
    this.store.dispatch(SearchPageActions.getSearch({ search }));
  }
  onChangePage(params: PaginationParams) {
    params.pageIndex++;
    this.store.dispatch(SearchPageActions.changePage({ params }));
  }
}