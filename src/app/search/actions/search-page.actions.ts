import {createAction, props} from '@ngrx/store';
import { PaginationParams } from '../models';


export const getSearch = createAction(
    '[Search Page] Get Search',
    props<{search:string}>()
);
export const changePage = createAction(
    '[Search Page] Change Page',
    props<{params:PaginationParams}>()
);