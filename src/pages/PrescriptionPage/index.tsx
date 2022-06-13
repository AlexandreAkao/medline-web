import {
  PrescriptionPageContainer,
  PrescriptionPageStatus,
  PrescriptionPageTitle,
} from 'pages/PrescriptionPage/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import FilePreview from 'components/FilePreview';

function PrescriptionPage() {
  return (
    <PrescriptionPageContainer>
      <MedlineHeader />
      <PrescriptionPageStatus>
        <PrescriptionPageTitle>Atestados e Receitas</PrescriptionPageTitle>

        <FilePreview status="ready">Teste1</FilePreview>
        <FilePreview status="cancel">Teste2</FilePreview>
        <FilePreview status="waiting">Teste3</FilePreview>
      </PrescriptionPageStatus>
    </PrescriptionPageContainer>
  );
}

export default PrescriptionPage;
