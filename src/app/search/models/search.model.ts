export interface SearchResult {
    has_more: boolean,
    items: Array<any>
    quota_max: number,
    quota_remaining: number,
    total:number
}

export interface PaginationParams {
    pageIndex: number;
    pageSize: number;
  }