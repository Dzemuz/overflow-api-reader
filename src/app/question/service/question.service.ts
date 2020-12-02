import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Question } from '../models/question.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class QuestionService {
    constructor(private http: HttpClient) {}

    public getQuestion(id:string): Observable<Question> {
        const params = new HttpParams()
        .set("site", "stackoverflow")
        .set("order", "desc")
        .set("sort", "activity")
        .set("filter", "!9_bDDxJY5"); //with body
        return this.http.get<Question>(environment.api+'questions'+'/'+id, {params})
        .pipe(
            map((res: Question) => {
                return res;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error.error.error_message);
            })
        );
    }
    public getQuestionAnswers(id:string): Observable<Question> {
        const params = new HttpParams()
        .set("site", "stackoverflow")
        .set("order", "desc")
        .set("sort", "votes")//usually the accepted answer is the most positive
        .set("filter", "!9_bDE(fI5"); //with bodies
        return this.http.get<Question>(environment.api+'questions'+'/'+id+'/answers', {params})
        .pipe(
            map((res: Question) => {
                return res;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error.error.error_message);
            })
        );
    }

}
