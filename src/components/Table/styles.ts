import styled from 'styled-components';

import colors from 'styles/colors';

export const TableContainer = styled.div`
  table {
    border-spacing: 0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    width: 100%;
    overflow: hidden;
    border-collapse: separate;

    thead {
      tr {
        background-color: ${colors.primary.lighter};
      }
    }

    tbody {
      tr {
        :nth-child(even) {
          background-color: ${colors.white.lighter};
        }
        :nth-child(odd) {
          background-color: ${colors.white.normal};
        }

        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 2px solid ${colors.white.lightest};
      border-right: 2px solid ${colors.white.lightest};

      :last-child {
        border-right: 0;
        text-align: center;
      }
    }

    th {
      padding: 1rem;
    }
  }
`;
