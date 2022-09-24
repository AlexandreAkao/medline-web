import { useEffect, useState } from 'react';

import {
  PrescriptionPageContainer,
  PrescriptionPageStatus,
  PrescriptionPageTitle,
} from 'pages/PrescriptionPage/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import FilePreview from 'components/FilePreview';
import Pagination from 'components/Pagination';
import api from 'service/api';

function PrescriptionPage() {
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState<Pick<IPagination, 'totalElements' | 'totalPages' | 'size'>>({
    totalElements: 0,
    totalPages: 0,
    size: 0,
  });

  const mapStatus: Record<RequestStatusType, FilePreviewStatusTypes> = {
    EM_ESPERA: 'waiting',
    CONCLUIDO: 'ready',
    REJEITADO: 'cancel',
  };

  const handlePageChange = (item: { selected: number }) => {
    setCurrentPage(item.selected);
  };

  useEffect(() => {
    api
      .get<IPagination<IRequest>>('request', {
        params: {
          page: currentPage,
          size: 5,
        },
      })
      .then(data => {
        const { content, ...rest } = data.data;
        setRequests(content);
        setPagination(rest);
      });
  }, [currentPage]);

  return (
    <PrescriptionPageContainer>
      <MedlineHeader />
      <PrescriptionPageStatus>
        <PrescriptionPageTitle>Atestados e Receitas</PrescriptionPageTitle>
        {requests.map(request => (
          <FilePreview key={request.id} status={mapStatus[request.status]} file={request.attachment}>
            {request.type} - {request.description} - {new Date(request.createdAt).toLocaleDateString('pt-BR')}
          </FilePreview>
        ))}
        <Pagination pageCount={pagination.totalPages} onPageChange={handlePageChange} />
      </PrescriptionPageStatus>
    </PrescriptionPageContainer>
  );
}

export default PrescriptionPage;
