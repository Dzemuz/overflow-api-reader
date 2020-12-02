import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {QuestionPageComponent} from './containers';

const routes: Routes = [{path: 'question/:id', component: QuestionPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QuestionRoutingModule {}