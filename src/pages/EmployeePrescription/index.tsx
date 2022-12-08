import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  EmployeePrescriptionContainer,
  EmployeePrescriptionMain,
  EmployeePrescriptionTitle,
} from 'pages/EmployeePrescription/styles';
import MedlineHeader from 'components/Header/MedlineHeader';
import Table from 'components/Table';
import { COLUMNS } from 'pages/EmployeePrescription/constants';
import Pagination from 'components/Pagination';
import api from 'service/api';

function EmployeePrescription() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagination, setPagination] = useState<Pick<IPagination, 'totalElements' | 'totalPages' | 'size'>>({
    totalElements: 0,
    totalPages: 0,
    size: 0,
  });

  const handlePageChange = (item: { selected: number }) => {
    setCurrentPage(item.selected);
  };

  const handleOnClickRow = (request: IData) => {
    navigate(`/employee/prescription-details/${request.id}`);
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
    <EmployeePrescriptionContainer>
      <MedlineHeader />

      <EmployeePrescriptionMain>
        <EmployeePrescriptionTitle>Atestados e Receitas</EmployeePrescriptionTitle>
        <Table columns={COLUMNS} data={requests as unknown as IData[]} onClickRow={handleOnClickRow} />
        <Pagination pageCount={pagination.totalPages} onPageChange={handlePageChange} />
      </EmployeePrescriptionMain>
    </EmployeePrescriptionContainer>
  );
}

export default EmployeePrescription;
