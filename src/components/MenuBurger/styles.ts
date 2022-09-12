import styled from 'styled-components';

import colors from 'styles/colors';

export const MenuBurgerContainer = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 3rem;
    height: 30px;
    right: 3rem;
    top: 3rem;
  }

  .bm-burger-bars {
    background: ${colors.black.soft};
    transition: 0.1s ease all;
  }

  .bm-burger-bars-hover {
    background: ${colors.grey.dark};
    transition: 0.1s ease all;
  }

  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  .bm-cross {
    background: ${colors.grey.dark};
  }

  .bm-menu-wrap {
    position: fixed;
    height: 100%;
    top: 0;
  }

  .bm-menu {
    background: ${colors.primary.light};
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  .bm-morph-shape {
    fill: #373a47;
  }

  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  .bm-item {
    display: inline-block;
  }

  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
