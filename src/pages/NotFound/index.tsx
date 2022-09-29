import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';
import { useAuth } from 'hooks/useAuth';
import {
  GlobalStyle,
  NotFoundContainer,
  NotFoundMessage,
  NotFoundSubTitle,
  NotFoundTitle,
} from 'pages/NotFound/styles';

function NotFound() {
  const navigate = useNavigate();
  const { isEmployee } = useAuth();

  const handleGoToHome = () => navigate(isEmployee ? '/employee/patiente-care' : '/');

  return (
    <NotFoundContainer>
      <GlobalStyle />
      <NotFoundTitle>Oops!</NotFoundTitle>
      <NotFoundSubTitle>404 - Página não encontrada</NotFoundSubTitle>
      <NotFoundMessage role="article">
        A página que você está procurando pode ter sido removida teve seu nome alterado ou está temporariamente
        indisponível.
      </NotFoundMessage>
      <Button onClick={handleGoToHome}>Voltar para Home</Button>
    </NotFoundContainer>
  );
}

export default NotFound;
