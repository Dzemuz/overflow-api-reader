import {Component, OnDestroy} from '@angular/core';
import {Store, select} from '@ngrx/store';
import * as fromQuestion from '../reducers';
import * as fromRoot from '../../reducers/index';
import { QuestionPageActions } from '../actions';
import { Router } from '@angular/router';

@Component({
    template: `
      <app-question
        [question]="question$ | async"
        [answer]="answer$ | async"
        [error]="error$ | async"
        (fetchAnswers)="onFetchAnswers()">
      </app-question>`
})
export class QuestionPageComponent implements OnDestroy{
    question$  = this.store.pipe(select(fromQuestion.selectQuestion));
    answer$  = this.store.pipe(select(fromQuestion.selectAnswers));
    error$ = this.store.pipe(select(fromQuestion.selectQuestionPageError));

    currentQuestionId:string = this.router.url.split('/')[2];

    constructor(private store: Store<fromQuestion.State>, private router:Router) {
        this.store.dispatch(QuestionPageActions.getQuestion({id:this.currentQuestionId}));
    }
    ngOnDestroy() {
        this.store.dispatch(QuestionPageActions.clear());
    }
    onFetchAnswers(){
        this.store.dispatch(QuestionPageActions.fetchAnswers({id:this.currentQuestionId}));
    }
}