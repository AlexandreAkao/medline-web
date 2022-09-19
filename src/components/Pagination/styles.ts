import styled from 'styled-components';

import colors from 'styles/colors';

export const PaginationContainer = styled.div`
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  .pagination-container {
    display: flex;

    li {
      font-size: 1.125rem;
      cursor: pointer;
      background-color: ${colors.white.lightest};
      color: ${colors.black.soft};

      a {
        display: inline-flex;
        padding: 1rem;
      }
    }

    .selected {
      background-color: ${colors.primary.lighter};
      color: ${colors.primary.normal};
      font-weight: 600;
      border: 1px;
    }

    .previous {
      border-radius: 1rem 0 0 1rem;
    }

    .next {
      border-radius: 0 1rem 1rem 0;
    }

    .disabled {
      cursor: auto;
    }
  }
`;
