type AppointmentStatusType = 'EM_ESPERA_TRIAGEM' | 'TRIAGEM' | 'ESPERANDO_ATENDIMENTO' | 'EM_ATENDIMENTO' | 'ATENDIDO';

interface IAppointment {
  id: number;
  queue_position: number;
  name: string;
  status: AppointmentStatusType;
  early_t: string;
  late_t: string;
  ubsId: null;
  cpf: string;
}
