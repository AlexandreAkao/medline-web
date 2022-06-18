import { useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegUser, FaReceipt, FaPlay, FaUserEdit } from 'react-icons/fa';
import { MdExitToApp } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import Header from 'components/Header';
import { useAuth } from 'hooks/useAuth';
import MedlineLogo from 'assets/images/medline-logo.svg';
import HeaderItem from 'components/HeaderItem';
import OverflowMenu from 'components/OverflowMenu';
import ScreenSizes from 'styles/screenSizes';
import {
  HeaderMenuBurgerContainer,
  HeaderMenuBurgerTitle,
  OverflowMenuNavigation,
  OverflowMenuNavigationItem,
  OverflowMenuTitle,
} from 'components/Header/MedlineHeader.style';
import colors from 'styles/colors';

function MedlineHeader() {
  const navigate = useNavigate();
  const { signed, user, handleLogout } = useAuth();
  const isTablet = useMediaQuery({ query: `(max-width: ${ScreenSizes.medium})` });

  const handleClickRegister = useCallback(() => {
    navigate('/register');
  }, [navigate]);

  const navigationButtons = useMemo(() => {
    return signed && user ? (
      <>
        <HeaderItem as="link" href="/prescription">
          Atestados/Receitas
        </HeaderItem>
        <HeaderItem as="link" href="/request">
          Solicitação
        </HeaderItem>
        <HeaderItem as="link">
          <OverflowMenu render={<FaRegUser size={20} />}>
            <OverflowMenuTitle>Olá, {user.name}</OverflowMenuTitle>
            <OverflowMenuNavigation>
              <HeaderItem href="/edit-profile">
                <FaUserEdit color={colors.grey.normal} fontSize={25} />
                <span>Editar Perfil</span>
              </HeaderItem>
              <OverflowMenuNavigationItem onClick={handleLogout}>
                <MdExitToApp color={colors.grey.normal} fontSize={25} />
                <span>Sair</span>
              </OverflowMenuNavigationItem>
            </OverflowMenuNavigation>
          </OverflowMenu>
        </HeaderItem>
      </>
    ) : (
      <>
        <HeaderItem as="button" onClick={handleClickRegister}>
          Cadastro
        </HeaderItem>
        <HeaderItem as="link" href="/login">
          Entrar
        </HeaderItem>
      </>
    );
  }, [handleClickRegister, handleLogout, signed, user]);

  const navigationButtonsBurger = useMemo(() => {
    return signed && user ? (
      <HeaderMenuBurgerContainer>
        <HeaderMenuBurgerTitle>Olá, {user.name}</HeaderMenuBurgerTitle>
        <HeaderItem href="/prescription">
          <FaReceipt />
          <span>Atestados/Receitas</span>
        </HeaderItem>
        <HeaderItem href="/request">
          <FaPlay />
          <span>Solicitação</span>
        </HeaderItem>
        <HeaderItem href="/edit-profile">
          <FaUserEdit />
          <span>Editar perfil</span>
        </HeaderItem>
        <HeaderItem onClick={handleLogout}>
          <MdExitToApp />
          <span>Sair</span>
        </HeaderItem>
      </HeaderMenuBurgerContainer>
    ) : (
      <>
        <HeaderItem as="link" href="/register">
          Cadastro
        </HeaderItem>
        <HeaderItem as="link" href="/login">
          Entrar
        </HeaderItem>
      </>
    );
  }, [handleLogout, signed, user]);

  return (
    <Header icon={MedlineLogo} iconAlt="Medline logo" isAuthenticated={signed}>
      {isTablet ? navigationButtonsBurger : navigationButtons}
    </Header>
  );
}

export default MedlineHeader;
