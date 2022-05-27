import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import {
  QueuePageButtonsContainer,
  QueuePageContainer,
  QueuePageInfoContainer,
  QueuePageSection,
} from 'pages/QueuePage/styles';
import MedlineHeader from 'components/Header/MedlineHeader';

function QueuePage() {
  return (
    <QueuePageContainer>
      <MedlineHeader />

      <QueuePageSection>
        <Dropdown
          placeholder="Escolha uma unidade de saúde"
          options={[]}
          buttonConfig={{ children: 'Procurar' }}
        />
        <QueuePageInfoContainer>3 medicos</QueuePageInfoContainer>
        <QueuePageInfoContainer>Hora estimada de atendimento: 15:00 - 15:30</QueuePageInfoContainer>
        <QueuePageButtonsContainer>
          <Button primary={false} size="large">
            Entra na Fila
          </Button>
          <Button primary={false} size="large">
            Solicitações
          </Button>
        </QueuePageButtonsContainer>
      </QueuePageSection>
    </QueuePageContainer>
  );
}

export default QueuePage;
