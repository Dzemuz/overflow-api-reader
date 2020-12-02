import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromQuestion from '../reducers/';
import {Store} from '@ngrx/store';
import {QuestionService} from '../service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { QuestionPageActions, QuestionApiActions } from '../actions';
import { Question } from '../models/question.model';

@Injectable()
export class QuestionEffects {
    
    getQuestion$ = createEffect(() =>
        this.actions$.pipe(
            ofType(QuestionPageActions.getQuestion),
            switchMap((action) =>
                this.questionService.getQuestion(action.id).pipe(
                    map((question: Question) =>
                        QuestionApiActions.getQuestionSuccess({question}),
                    ),
                    catchError((error: string) =>
                        of(QuestionApiActions.getQuestionFailure({error})),
                    )
                )
            )
        )
    );

    getQuestionAnswer$ = createEffect(() =>
        this.actions$.pipe(
            ofType(QuestionPageActions.fetchAnswers),
            switchMap((action) =>
                this.questionService.getQuestionAnswers(action.id).pipe(
                    map((question: Question) =>{
                        let onlyAccepted = {...question};
                        let checkAccepted = onlyAccepted.items.some(item => item.is_accepted === true);
                        if(checkAccepted){
                            onlyAccepted = {...question};
                            onlyAccepted.items = question.items.filter((i)=>i.is_accepted);
                            return QuestionApiActions.fetchAnswersSuccess({answers:onlyAccepted})
                        }else
                            return QuestionApiActions.fetchAnswersSuccess({answers: question})
                    }),
                    catchError((error: string) =>
                        of(QuestionApiActions.fetchAnswersFailure({error})),
                    )
                )
            )
        )
    );

    constructor(
        private store: Store<fromQuestion.State>,
        private actions$: Actions,
        private questionService: QuestionService,
        private router: Router
    ) {}
}
