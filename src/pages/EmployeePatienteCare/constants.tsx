import { AiOutlineEdit } from 'react-icons/ai';

export const COLUMNS = [
  {
    Header: 'Lugar na fila',
    accessor: 'firstName',
  },
  {
    Header: 'Nome',
    accessor: 'lastName',
  },
  {
    Header: 'Previsão de atendimento',
    accessor: 'age',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: '',
    accessor: 'action',
    Cell: () => <AiOutlineEdit />,
  },
];
