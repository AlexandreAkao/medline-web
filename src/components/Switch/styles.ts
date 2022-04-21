import styled from 'styled-components';

import colors from 'styles/colors';

export const SwitchContainer = styled.div`
  display: flex;

  border: 1.5px solid ${colors.black.soft};
  border-radius: 40px;
  background-color: ${colors.white.normal};
  user-select: none;

  cursor: pointer;
`;

export const SwitchOption = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 20px;
    font-size: 1.125rem;
    font-weight: 700;
    flex: 1 1 0;
    z-index: 1;
    text-align: center;
    color: ${colors.black.soft};
  }

  span:first-child {
    color: ${colors.white.normal};
  }
`;

export const SwitchButton = styled.span`
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 50%;
  height: 36px;
  border-radius: 45px;
  transition: 0.2s;
  background-color: ${colors.primary};
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.3);
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  width: 100%;
  background-color: ${colors.white.normal};
  border-radius: 100px;
  position: relative;
  transition: background-color 0.2s;
  cursor: pointer;

  :active ${SwitchButton} {
    width: 55%;
  }
`;

export const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + ${SwitchLabel} {
    ${SwitchButton} {
      left: calc(100% - 2px);
      transform: translateX(-100%);
    }

    ${SwitchOption} {
      span:last-child {
        color: ${colors.white.normal};
      }
      span:first-child {
        color: ${colors.black.soft};
      }
    }
  }
`;
