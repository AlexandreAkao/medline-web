import styled from 'styled-components';
import { StylesConfig } from 'react-select';

import { ButtonContainer } from 'components/Button/styles';

export const DropdownContainer = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
  background-color: #fff;
  align-items: center;
  height: 80px;
  width: 100%;

  ${ButtonContainer} {
    box-shadow: none;
    margin-left: 40px;
  }
`;

export const customStyleIcon = {
  marginRight: '8px',
};

export const customStyleSelect: StylesConfig = {
  menu: provided => ({
    ...provided,
  }),
  container: provided => ({
    ...provided,
    flex: 1,
  }),
  control: provided => ({
    ...provided,
    border: 0,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    width: 0,
  }),
};
