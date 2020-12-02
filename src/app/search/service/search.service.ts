import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PaginationParams, SearchResult } from '../models/search.model';


@Injectable({
    providedIn: 'root'
})
export class SearchService {
    constructor(private http: HttpClient) {}
    
    public getSearch(value:string, p:PaginationParams): Observable<SearchResult> {

        const params = new HttpParams()
        .set("key", "U4DMV*8nvpm3EOpvf69Rxw((")
        .set("site", "stackoverflow")
        .set("page", p.pageIndex.toString())
        .set("pagesize", p.pageSize.toString())
        .set("order", "desc")
        .set("sort", "votes")
        .set("intitle", value)
        .set("filter", "!9_bDE.B6I");
        
        return this.http.get<SearchResult>(environment.api + 'search', {params})
        .pipe(
            map((res: SearchResult) => {
                return res;
            }),
            catchError((error: HttpErrorResponse) => {
                return throwError(error.error.error_message);
            })
        );
    }
}
