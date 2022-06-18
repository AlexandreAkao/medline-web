import { useEffect, useState } from 'react';
import { FaHospitalAlt } from 'react-icons/fa';

import api from 'service/api';
import Button from 'components/Button';
import Dropdown from 'components/Dropdown';
import {
  QueuePageButtonsContainer,
  QueuePageInfoContainer,
  QueuePageSection,
} from 'pages/QueuePage/styles';

function NotOnQueue({ selectedUbsId, updateQueue }: INotOnQueueProps) {
  const [ubs, setUbs] = useState<IUbsOptions[]>([]);
  const [selectedUbs, setSelectedUbs] = useState<IUbsOptions>();

  const handleSelectOption = async (value: unknown) => {
    if (value) {
      const valueOption = value as IUbsOptions;
      const ubsData = await api.get<IUbs>(`ubs/${valueOption?.id}`);

      setSelectedUbs({ ...valueOption, ...ubsData.data });
    }
  };

  const handleEnterQueue = async () => {
    await api.post(`appointment/ubs/${selectedUbs?.id}`);
    await updateQueue();
  };

  useEffect(() => {
    api.get<IUbs[]>('ubs').then(ubsData => {
      const ubsFormated = ubsData.data.map(ubsInfo => ({
        ...ubsInfo,
        label: ubsInfo.name,
        value: String(ubsInfo.id),
      }));

      setUbs(ubsFormated);

      if (selectedUbsId) {
        const ubsSelectedById = ubsFormated.find(ubsInfo => String(ubsInfo.id) === selectedUbsId);

        if (ubsSelectedById) {
          api.get<IUbs>(`ubs/${selectedUbsId}`).then(ubsInfoData => {
            setSelectedUbs({ ...ubsSelectedById, ...ubsInfoData.data });
          });
        }
      }
    });
  }, [selectedUbsId]);

  return (
    <QueuePageSection>
      <Dropdown
        placeholder="Escolha uma unidade de saúde"
        Icon={FaHospitalAlt}
        onSelect={handleSelectOption}
        options={ubs}
        value={selectedUbs}
      />
      <QueuePageInfoContainer>{selectedUbs?.doctors} medicos</QueuePageInfoContainer>
      <QueuePageInfoContainer>
        Hora estimada de atendimento: {selectedUbs?.early_t} - {selectedUbs?.late_t}
      </QueuePageInfoContainer>
      <QueuePageButtonsContainer>
        <Button primary={false} size="large" onClick={handleEnterQueue}>
          Entra na Fila
        </Button>
      </QueuePageButtonsContainer>
    </QueuePageSection>
  );
}

export default NotOnQueue;
