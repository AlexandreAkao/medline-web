import {
  EmployeePrescriptionContainer,
  EmployeePrescriptionMain,
  EmployeePrescriptionTitle,
} from 'pages/EmployeePrescription/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import Table from 'components/Table';
import { COLUMNS } from 'pages/EmployeePrescription/constants';

function EmployeePrescription() {
  return (
    <EmployeePrescriptionContainer>
      <MedlineHeader />

      <EmployeePrescriptionMain>
        <EmployeePrescriptionTitle>Atestados e Receitas</EmployeePrescriptionTitle>
        <Table columns={COLUMNS} data={[]} />
      </EmployeePrescriptionMain>
    </EmployeePrescriptionContainer>
  );
}

export default EmployeePrescription;
