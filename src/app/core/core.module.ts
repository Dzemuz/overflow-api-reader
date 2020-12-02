import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { HeaderComponent } from './components/header.component';

export const COMPONENTS = [
    HeaderComponent
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class CoreModule {}
