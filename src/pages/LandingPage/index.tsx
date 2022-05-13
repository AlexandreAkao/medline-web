import { FaHospitalAlt } from 'react-icons/fa';

import {
  DropdownContainer,
  LandingPageContainer,
  LandingPageMain,
  Text1Container,
  Text2Container,
} from 'pages/LandingPage/styles';
import Header from 'components/Header';
import HeaderItem from 'components/HeaderItem';
import MedlineLogo from 'assets/images/medline-logo.svg';
import Dropdown from 'components/Dropdown';

function LandingPage() {
  return (
    <LandingPageContainer>
      <Header icon={MedlineLogo} iconAlt="Medline logo" isAuthenticated={false}>
        <HeaderItem as="button">Cadastro</HeaderItem>
        <HeaderItem as="link" href="/login">
          Entrar
        </HeaderItem>
      </Header>

      <LandingPageMain>
        <DropdownContainer>
          <Dropdown
            placeholder="Escolha uma unidade de saúde"
            Icon={FaHospitalAlt}
            options={[]}
            buttonConfig={{ children: 'Procurar' }}
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
