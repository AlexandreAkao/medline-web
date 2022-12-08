export const paginationMock = (content: Record<string, unknown>[]): IPagination => ({
  content,
  pageable: {
    sort: {
      sorted: false,
      unsorted: true,
      empty: true,
    },
    pageNumber: 0,
    pageSize: 10,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 6,
  first: true,
  number: 0,
  sort: {
    sorted: false,
    unsorted: true,
    empty: true,
  },
  numberOfElements: 6,
  size: 10,
  empty: false,
});
