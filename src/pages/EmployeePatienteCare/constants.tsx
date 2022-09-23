import { AiOutlineEdit } from 'react-icons/ai';
import { UseTableCellProps } from 'react-table';

export const COLUMNS = (openModal: (appointment: IAppointment) => void): IColumn[] => [
  {
    Header: 'Lugar na fila',
    accessor: 'queue_position',
    Cell: ({ value }: UseTableCellProps<IAppointment, number>) => {
      const position = String(value);
      return position.padStart(4, '0');
    },
  },
  {
    Header: 'Nome',
    accessor: 'name',
  },
  {
    Header: 'Previsão de atendimento',
    accessor: 'early_t',
    Cell: ({
      row: {
        original: { early_t: early, late_t: late },
      },
    }: UseTableCellProps<IAppointment, unknown>) => {
      return `${early} - ${late}`;
    },
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: ({ value }: UseTableCellProps<IAppointment, AppointmentStatusType>) => {
      const statusMap: Record<AppointmentStatusType, AppointmentType> = {
        EM_ESPERA_TRIAGEM: 'Em espera Triagem',
        TRIAGEM: 'Triagem',
        ESPERANDO_ATENDIMENTO: 'Esperando Atendimento',
        EM_ATENDIMENTO: 'Em Atendimento',
        ATENDIDO: 'Atendido',
      };

      return statusMap[value];
    },
  },
  {
    Header: '',
    accessor: 'action',
    Cell: ({ row: { original } }: UseTableCellProps<IAppointment, unknown>) => {
      return <AiOutlineEdit size={25} onClick={() => openModal(original)} />;
    },
  },
];

export const PATIENTE_STATUS = [
  { label: 'Em espera Triagem', value: 'EM_ESPERA_TRIAGEM' },
  { label: 'Triagem', value: 'TRIAGEM' },
  { label: 'Esperando Atendimento', value: 'ESPERANDO_ATENDIMENTO' },
  { label: 'Em Atendimento', value: 'EM_ATENDIMENTO' },
  { label: 'Atendido', value: 'ATENDIDO' },
];
