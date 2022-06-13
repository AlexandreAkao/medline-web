interface IColumn {
  Header: string;
  accessor: string;
  columns?: IColumn[];
  Cell?: (props: import('react-table').UseTableCellProps<unknown>) => React.ReactNode;
}

interface IData {
  [x: string]: React.ReactNode;
}

interface ITableProps {
  columns: IColumn[];
  data: IData[];
}
