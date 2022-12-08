import { UseTableCellProps } from 'react-table';

export const COLUMNS: IColumn[] = [
  {
    Header: 'Lugar na fila',
    accessor: 'statusaa',
    Cell: ({ row }) => {
      const position = String(row.index + 1);
      return position.padStart(4, '0');
    },
  },
  {
    Header: 'Nome',
    accessor: 'createdBy.name',
  },
  {
    Header: 'CPF',
    accessor: 'createdBy.cpf',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }: UseTableCellProps<IRequest, RequestStatusType>) => {
      const mapStatus: Record<RequestStatusType, string> = {
        EM_ESPERA: 'Em espera',
        CONCLUIDO: 'Concluído',
        REJEITADO: 'Rejeitado',
      };

      return mapStatus[value];
    },
  },
];
