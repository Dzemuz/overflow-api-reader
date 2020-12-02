import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import * as fromSearch from './reducers';
import { SearchEffects } from './effects';
import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent, SearchResultComponent } from './components';
import { SearchPageComponent } from './containers';
import { MaterialModule } from '../common/material-module';


export const COMPONENTS = [
    SearchComponent,
    SearchResultComponent,
    SearchPageComponent
];

@NgModule ({
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    SearchRoutingModule,
    StoreModule.forFeature(fromSearch.searchFeatureKey, fromSearch.reducers),
    EffectsModule.forFeature([SearchEffects]),
  ],
  declarations: COMPONENTS,
  providers: []
})
export class SearchModule {}