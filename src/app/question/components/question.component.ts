import { Component, Input, SimpleChanges, OnChanges, OnDestroy, EventEmitter, Output, OnInit } from '@angular/core';
import { Question } from '../models/question.model';


@Component({
    selector: 'app-question',
    templateUrl: './question.component.html'
})
export class QuestionComponent implements OnInit, OnChanges {
    @Input() question!: Question | null;
    @Input() answer!: Question | null;
    @Input() error!: string | null;


    @Output() fetchAnswers = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
        this.question?.items 
    }
    ngOnChanges(changes: SimpleChanges): void {
        let simpleChange = changes['question'];

        if (simpleChange && !simpleChange.firstChange && this.question) {
            // console.log(this.question);
            if(this.question!.items[0].is_answered)this.fetchAnswers.emit();
        }
    }
}
