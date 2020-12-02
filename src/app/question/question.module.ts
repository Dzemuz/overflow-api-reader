import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import * as fromQuestion from './reducers';
import { QuestionEffects } from './effects';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './components';
import { QuestionPageComponent } from './containers';
import { SharedModule } from '../common/shared.module';


export const COMPONENTS = [
  QuestionComponent,
  QuestionPageComponent
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    FormsModule,
    QuestionRoutingModule,
    StoreModule.forFeature(fromQuestion.questionFeatureKey, fromQuestion.reducers),
    EffectsModule.forFeature([QuestionEffects]),
  ],
  declarations: COMPONENTS,
  providers: []
})
export class QuestionModule { }