import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppComponent} from './core/containers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ROOT_REDUCERS, metaReducers } from './reducers';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core';
import { MaterialModule } from './common/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SearchModule } from './search/search.module';
import { QuestionModule } from './question/question.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    MaterialModule,
    SearchModule,
    QuestionModule,
    NgbModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      },
    }),
    StoreRouterConnectingModule.forRoot({
      routerState: RouterState.Minimal
    }),
    StoreDevtoolsModule.instrument({
       name: 'Stack overflow Api viewer' 
    }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
