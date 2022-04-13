import styled from 'styled-components';

import colors from 'styles/colors';

export const HeaderItemContainer = styled.div`
  a {
    color: ${colors.white.normal};
    font-weight: 700;
    font-size: 1rem;
    transition: 0.2s ease all;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      transition: 0.2s ease all;
      color: ${colors.white.light};
    }

    * {
      margin-left: 8px;
    }
  }
`;
