interface ISort {
  sorted: boolean;
  empty: boolean;
  unsorted: boolean;
}

interface IPageable {
  sort: ISort;
  pageNumber: number;
  pageSize: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

interface IPagination<T = Record<string, unknown>> {
  content: T[];
  pageable: IPageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  sort: ISort;
  first: boolean;
  size: number;
  number: number;
  numberOfElements: number;
  empty: boolean;
}
