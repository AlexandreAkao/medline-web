import { FaHospitalAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import {
  QueuePageButtonsContainer,
  QueuePageInfoContainer,
  QueuePageOnQueueTitle,
  QueuePageSection,
} from 'pages/QueuePage/styles';
import api from 'service/api';
import colors from 'styles/colors';

function OnQueue({ queueInfo, updateQueue }: IOnQueueProps) {
  const [ubs, setUbs] = useState<IUbs>();

  const handleLeaveQueue = async () => {
    await api.delete('appointment');
    await updateQueue();
  };

  useEffect(() => {
    api.get<IUbs>(`ubs/${queueInfo.ubsId}`).then(ubsData => {
      setUbs(ubsData.data);
    });

    return () => setUbs(undefined);
  }, [queueInfo.ubsId]);

  return (
    <QueuePageSection>
      <QueuePageOnQueueTitle>
        <FaHospitalAlt color={colors.grey.normal} />
        <span>{ubs?.name}</span>
      </QueuePageOnQueueTitle>
      <QueuePageInfoContainer>Lugar na fila: {queueInfo.queue_position}</QueuePageInfoContainer>
      <QueuePageInfoContainer>
        Hora estimada de atendimento: {queueInfo.early_t} - {queueInfo.late_t}
      </QueuePageInfoContainer>
      <QueuePageButtonsContainer>
        <Button primary={false} size="large" onClick={handleLeaveQueue}>
          Desistir
        </Button>
      </QueuePageButtonsContainer>
    </QueuePageSection>
  );
}

export default OnQueue;
