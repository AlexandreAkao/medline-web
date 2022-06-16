import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

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
} from 'pages/EmployeePrescriptionDetails/styles';
import api from 'service/api';

function EmployeePrescriptionDetails() {
  const navigate = useNavigate();

  const downloadFile = async () => {
    const file = await api.get('file/3', {
      responseType: 'blob',
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjFhZWY1NjlmNTI0MTRlOWY0YTcxMDRiNmQwNzFmMDY2ZGZlZWQ2NzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWVkbGluZS1hdXRoIiwiYXVkIjoibWVkbGluZS1hdXRoIiwiYXV0aF90aW1lIjoxNjU1NDE1MDg5LCJ1c2VyX2lkIjoiRUtMQThuTGhtZlpPckhYV2VmdkRvemVHMFF5MiIsInN1YiI6IkVLTEE4bkxobWZaT3JIWFdlZnZEb3plRzBReTIiLCJpYXQiOjE2NTU0MTUwODksImV4cCI6MTY1NTQxODY4OSwiZW1haWwiOiJmdW5jaW9uYXJpb0BtZWRsaW5lLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJmdW5jaW9uYXJpb0BtZWRsaW5lLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ikdKPc6zmAP7dBd10kQTGNzpEQjQVooJra-9EtK-5lxGO_cFkkPCezMfW5cEggDvjfbgbgpR4cyViAp98xMsjhCX3qYjq86bieDzY043FwN5RT5Lt1UiMysFaN6FjXfR9rZLKPeTChBdiY-5xA11MC42CJfvHzajoyy4PUbEsEvrZxzD4w9h3G1Z06A6xcEp9bnBPjpmi6ROlS80H798Jy669I10Oy1mYaUmIh4f1o-sJOTUq7DRZKE9pLzhy8v3J1QavFZOQ0kCnbxWZH3Y9CA0mf-1c7IvYS1DVEXgJPangJchv0s0JVWgmna4_IeOIxQFwzna89gG7DKNPB31AA',
      },
    });
    const filename = file.headers['content-disposition'].split('filename=')[1];
    const url = window.URL.createObjectURL(file.data);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <EmployeePrescriptionDetailsContainer>
      <MedlineHeader />
      <EmployeePrescriptionDetailsMain>
        <EmployeePatienteCareTitle>Atestados e Receitas</EmployeePatienteCareTitle>

        <EmployeePrescriptionDetailsInformation>
          <EmployeePrescriptionDetailsInformationData>
            <span>Gilson Bezerra</span>
            <span>000.000.000-00</span>
            <span>Solicitação: Atestado</span>
            <span>Data de envio: 18/03/22</span>
          </EmployeePrescriptionDetailsInformationData>

          <EmployeePrescriptionDetailsInformationDescription>
            <h1>Descrição</h1>
            <span>Desejo um atestado médico, pois testei positivo para covid-19</span>
          </EmployeePrescriptionDetailsInformationDescription>
        </EmployeePrescriptionDetailsInformation>

        <EmployeePrescriptionDetailsVizualizer onClick={downloadFile}>
          Baixar documento
        </EmployeePrescriptionDetailsVizualizer>

        <EmployeePrescriptionDetailsButtons>
          <Button size="large" onClick={handleGoBack}>
            Voltar
          </Button>
          <div>
            <Button size="large">Negado</Button>
            <Button size="large">Enviar</Button>
          </div>
        </EmployeePrescriptionDetailsButtons>
      </EmployeePrescriptionDetailsMain>
    </EmployeePrescriptionDetailsContainer>
  );
}

export default EmployeePrescriptionDetails;
