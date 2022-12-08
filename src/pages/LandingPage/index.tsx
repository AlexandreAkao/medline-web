import { FaHospitalAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  DropdownContainer,
  LandingPageContainer,
  LandingPageMain,
  Text1Container,
  Text2Container,
} from 'pages/LandingPage/styles';
import Dropdown from 'components/Dropdown';
import api from 'service/api';
import MedlineHeader from 'components/Header/MedlineHeader';

function LandingPage() {
  const [ubs, setUbs] = useState<IUbsOptions[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get<IUbs[]>('ubs').then(ubsData => {
      setUbs(
        ubsData.data.map(ubsInfo => ({
          ...ubsInfo,
          label: ubsInfo.name,
          value: String(ubsInfo.id),
        })),
      );
    });
  }, []);

  const handleSearchUbs = (_event?: React.MouseEvent<HTMLButtonElement>, option?: IOption) => {
    return navigate('/queue', {
      state: {
        selectedUbs: option?.value,
      },
    });
  };

  return (
    <LandingPageContainer>
      <MedlineHeader />

      <LandingPageMain>
        <DropdownContainer>
          <Dropdown
            placeholder="Escolha uma unidade de saúde"
            Icon={FaHospitalAlt}
            options={ubs}
            buttonConfig={{ children: 'Procurar', onClick: handleSearchUbs }}
          />
        </DropdownContainer>

        <Text1Container>
          <h1>Encontre e visualize vagas</h1>
          <span>Procure pela unidade de sáude básica mais perto de você!</span>
        </Text1Container>

        <Text2Container>
          <h1>O que fazemos</h1>
          <span>Permitimos que escolha sua vaga sem sair de casa.</span>
        </Text2Container>
      </LandingPageMain>
    </LandingPageContainer>
  );
}

export default LandingPage;
