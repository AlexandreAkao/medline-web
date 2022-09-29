import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from 'components/Button';
import MedlineHeader from 'components/Header/MedlineHeader';
import { EmployeePatienteCareTitle } from 'pages/EmployeePatienteCare/styles';
import {
  EmployeePrescriptionDetailsButtons,
  EmployeePrescriptionDetailsContainer,
  EmployeePrescriptionDetailsInformation,
  EmployeePrescriptionDetailsInformationData,
  EmployeePrescriptionDetailsInformationDescription,
  EmployeePrescriptionDetailsMain,
  EmployeePrescriptionDetailsVizualizer,
  EmployeePrescriptionNotFoundContainer,
} from 'pages/EmployeePrescriptionDetails/styles';
import api from 'service/api';
import { downloadFile } from 'utils/file';
import { UpdateRequestEnum } from 'pages/EmployeePrescriptionDetails/types';
import { useLoader } from 'hooks/useLoader';

function EmployeePrescriptionDetails() {
  const [request, setRequest] = useState<IRequest>();
  const [prescriptionFound, setPrescriptionFound] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useParams<{ id: string }>();
  const { setIsLoading } = useLoader();

  const handleDownloadFile = async () => {
    const data = await api.get(`file/${request?.attachment.id}`, { responseType: 'blob' });
    downloadFile(data.data, request?.attachment.name ?? '');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const updateRequest = (status: UpdateRequestEnum) => async () => {
    try {
      setIsLoading(true);
      const data = await api.put(`request/${location.id}`, {
        status,
      });

      if (data.status === 200) {
        setIsLoading(false);
        navigate('/employee/prescription');
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    api
      .get<IRequest>(`request/${location.id}`)
      .then(data => {
        setRequest(data.data);
      })
      .catch(() => {
        setPrescriptionFound(false);
      });
  }, [location.id]);

  return (
    <EmployeePrescriptionDetailsContainer>
      <MedlineHeader />
      {prescriptionFound ? (
        <EmployeePrescriptionDetailsMain>
          <EmployeePatienteCareTitle>Atestados e Receitas</EmployeePatienteCareTitle>

          <EmployeePrescriptionDetailsInformation>
            <EmployeePrescriptionDetailsInformationData>
              <span>
                <strong>Nome:</strong> {request?.createdBy.name ?? '...'}
              </span>
              <span>
                <strong>CPF:</strong> {request?.createdBy.cpf ?? '000.000.000-00'}
              </span>
              <span>
                <strong>Solicitação:</strong> {request?.type ?? '...'}
              </span>
              <span>
                <strong>Data de envio:</strong>
                {request?.createdAt ? new Date(request?.createdAt ?? 0).toLocaleDateString('pt-BR') : '00/00/0000'}
              </span>
            </EmployeePrescriptionDetailsInformationData>

            <EmployeePrescriptionDetailsInformationDescription>
              <h1>Descrição</h1>
              <span>{request?.text}</span>
            </EmployeePrescriptionDetailsInformationDescription>
          </EmployeePrescriptionDetailsInformation>

          <EmployeePrescriptionDetailsVizualizer onClick={handleDownloadFile}>
            Baixar documento
          </EmployeePrescriptionDetailsVizualizer>

          <EmployeePrescriptionDetailsButtons>
            <Button size="large" onClick={handleGoBack}>
              Voltar
            </Button>
            <div>
              <Button size="large" onClick={updateRequest(UpdateRequestEnum.refuse)}>
                Negado
              </Button>
              <Button size="large" onClick={updateRequest(UpdateRequestEnum.accept)}>
                Enviar
              </Button>
            </div>
          </EmployeePrescriptionDetailsButtons>
        </EmployeePrescriptionDetailsMain>
      ) : (
        <EmployeePrescriptionDetailsMain>
          <EmployeePrescriptionDetailsInformation>
            <EmployeePrescriptionNotFoundContainer>
              <h3>Atestado/Receita não encontrada</h3>
              Nenhum Atestado/Receita com id <strong>{location.id}</strong> encontrado
            </EmployeePrescriptionNotFoundContainer>
          </EmployeePrescriptionDetailsInformation>
        </EmployeePrescriptionDetailsMain>
      )}
    </EmployeePrescriptionDetailsContainer>
  );
}

export default EmployeePrescriptionDetails;
