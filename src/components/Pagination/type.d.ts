type ReactPaginateProps = import('react-paginate').ReactPaginateProps;

interface IPaginationProps extends ReactPaginateProps {
  pageCount: number;
  onPageChange?: (selectedItem: { selected: number }) => void;
  previousLabel?: string;
  nextLabel?: string;
  className?: string;
}
