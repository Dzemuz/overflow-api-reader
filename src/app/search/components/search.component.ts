import { Component, Input, SimpleChanges, OnChanges, OnDestroy, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    @Input() query!: string | null;
    @Input() error!: string | null;

    @Output() submitQuery = new EventEmitter<string>();

    constructor() { }

    formSearch: FormGroup = new FormGroup({
        search: new FormControl('', Validators.required)
    });
    
    ngOnInit(): void {
        if(this.query)this.formSearch.get('search')?.setValue(this.query);
    }
    // ngOnChanges(changes: SimpleChanges): void {
    //     let simpleChange = changes['query'];

    //     if (simpleChange && !simpleChange.firstChange && this.query) {
    //         console.log(this.query);
            
    //         this.formSearch.get('search')?.setValue(this.query);
    //     }
    // }
    submit(){
        if (this.formSearch.valid) {
            let result = this.formSearch.get('search')?.value;
            console.log(result);
            this.submitQuery.emit(result);
        }else this.formSearch.get('search')?.markAsTouched({onlySelf: true});
    }
}
