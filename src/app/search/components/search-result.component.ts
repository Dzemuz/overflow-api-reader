import { Component, Input, SimpleChanges, OnChanges, EventEmitter, Output, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SearchResult, PaginationParams } from '../models/search.model';


@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html'
})
export class SearchResultComponent implements OnInit, OnChanges, AfterViewInit {
    @Input() searchResult!: SearchResult | null;

    @Output() changePage = new EventEmitter<PaginationParams>();

    @ViewChild(MatPaginator, { static: false })
    paginator!: MatPaginator;
    
    subscription: Subscription = new Subscription();
    
    constructor() { }

    
    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.subscription.add(this.paginator.page.pipe(
            tap(() => this.changePage.emit({
                pageIndex: this.paginator.pageIndex,
                pageSize: this.paginator.pageSize
            }))
        ).subscribe());
    }

    ngOnChanges(changes: SimpleChanges): void {
        let simpleChange = changes['search'];

        if (simpleChange && !simpleChange.firstChange && this.searchResult) {
            console.log(this.searchResult);
        }
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
