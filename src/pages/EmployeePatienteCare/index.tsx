import MedlineHeader from 'components/Header/MedlineHeader';
import Table from 'components/Table';
import {
  EmployeePatienteCareContainer,
  EmployeePatienteCareMain,
  EmployeePatienteCareTitle,
} from 'pages/EmployeePatienteCare/styles';
import { COLUMNS } from 'pages/EmployeePatienteCare/constants';

function EmployeePatienteCare() {
  return (
    <EmployeePatienteCareContainer>
      <MedlineHeader />

      <EmployeePatienteCareMain>
        <EmployeePatienteCareTitle>Atendimento</EmployeePatienteCareTitle>
        <Table columns={COLUMNS} data={[]} />
      </EmployeePatienteCareMain>
    </EmployeePatienteCareContainer>
  );
}

export default EmployeePatienteCare;
