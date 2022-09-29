import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import MedlineHeader from 'components/Header/MedlineHeader';
import Table from 'components/Table';
import {
  EmployeePatienteCareContainer,
  EmployeePatienteCareMain,
  EmployeePatienteCareModalContainer,
  EmployeePatienteCareTitle,
} from 'pages/EmployeePatienteCare/styles';
import { COLUMNS, PATIENTE_STATUS } from 'pages/EmployeePatienteCare/constants';
import api from 'service/api';
import Modal from 'components/Modal';
import Dropdown from 'components/Dropdown';
import { useLoader } from 'hooks/useLoader';

function EmployeePatienteCare() {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [patienteSelected, setPatienteSelected] = useState<IAppointment>();
  const { setIsLoading } = useLoader();

  const handleOpenModal = (appointment: IAppointment) => {
    setIsVisible(true);
    setPatienteSelected(appointment);
  };

  const handleCloseModal = () => {
    setIsVisible(false);
    setPatienteSelected(undefined);
  };

  const updatePatientes = async () => {
    const patients = await api.get<IAppointment[]>('appointment');

    setAppointments(patients.data.filter(patient => patient.queue_position !== null));
  };

  const handleChangePatienteStatus = async (_event?: React.MouseEvent<HTMLButtonElement>, option?: IOption) => {
    try {
      setIsLoading(true);
      const status = PATIENTE_STATUS.findIndex(value => value.value === option?.value);
      const response = await api.patch(`appointment/${patienteSelected?.id}`, { status });

      if (response.status !== 200) {
        toast.error('Ocorreu um error');
        return;
      }

      updatePatientes();
      toast.success('Paciente atualizado com sucesso!');
      handleCloseModal();
    } catch (e) {
      toast.error('Ocorreu um error');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    updatePatientes();
  }, []);

  return (
    <EmployeePatienteCareContainer>
      <MedlineHeader />
      <Modal isVisible={isVisible} onClose={handleCloseModal}>
        <EmployeePatienteCareModalContainer>
          <h2>Edite o status do paciente: {patienteSelected?.name}</h2>
          <Dropdown
            placeholder="Esolha um status"
            options={PATIENTE_STATUS.filter(value => value.value !== patienteSelected?.status)}
            buttonConfig={{ children: 'Atualizar', onClick: handleChangePatienteStatus }}
          />
        </EmployeePatienteCareModalContainer>
      </Modal>
      <EmployeePatienteCareMain>
        <EmployeePatienteCareTitle>Atendimento</EmployeePatienteCareTitle>
        <Table columns={COLUMNS(handleOpenModal)} data={appointments as unknown as IData[]} />
      </EmployeePatienteCareMain>
    </EmployeePatienteCareContainer>
  );
}

export default EmployeePatienteCare;
