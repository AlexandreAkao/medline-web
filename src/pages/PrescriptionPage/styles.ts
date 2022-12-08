import styled from 'styled-components';

import colors from 'styles/colors';
import doctors from 'assets/images/doctors-blur.png';
import { FilePreviewContainer } from 'components/FilePreview/styles';

export const PrescriptionPageContainer = styled.main`
  background-color: ${colors.primary.normal};
  height: 100%;
  overflow: auto;
  background-image: url(${doctors});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 1000px;
`;

export const PrescriptionPageTitle = styled.h3`
  color: ${colors.white.normal};
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 3rem;
`;

export const PrescriptionPageStatus = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin: 2rem auto;

  ${FilePreviewContainer} {
    margin: 1rem 0;
  }
`;
