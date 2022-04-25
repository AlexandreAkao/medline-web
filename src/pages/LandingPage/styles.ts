import styled from 'styled-components';

import colors from 'styles/colors';
import doctor from 'assets/images/doctor.svg';

export const LandingPageContainer = styled.div`
  background-color: ${colors.primary};
  height: 100%;
  background-image: url(${doctor});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: 50% 0;
`;

export const LandingPageMain = styled.main`
  margin-top: 10rem;
  height: calc(100% - 20rem);
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 0.2fr 1fr 0.5fr 1fr 0.2fr;
  grid-template-areas:
    '. dropdown dropdown . .'
    '. . . text1 .'
    '. text2 . . .';
`;

export const DropdownContainer = styled.div`
  grid-area: dropdown;
`;

export const Text1Container = styled.div`
  grid-area: text1;
  display: flex;
  flex-direction: column;
  color: ${colors.black.soft};
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 2.8rem;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 2px solid ${colors.black.soft};
  }

  span {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Text2Container = styled.div`
  grid-area: text2;
  display: flex;
  flex-direction: column;
  color: ${colors.black.soft};

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    padding-bottom: 4px;
    margin-bottom: 40px;
  }

  span {
    font-size: 2.8rem;
    font-weight: 600;
  }
`;
