import ReactPaginate from 'react-paginate';

import { PaginationContainer } from 'components/Pagination/styles';

function Pagination({
  pageCount,
  previousLabel = '<',
  nextLabel = '>',
  className = 'pagination-container',
  onPageChange,
  ...rest
}: IPaginationProps) {
  return (
    <PaginationContainer>
      <ReactPaginate
        {...rest}
        previousLabel={previousLabel}
        nextLabel={nextLabel}
        className={className}
        pageCount={pageCount}
        onPageChange={onPageChange}
      />
    </PaginationContainer>
  );
}

export default Pagination;
