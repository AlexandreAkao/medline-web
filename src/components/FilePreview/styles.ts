import styled from 'styled-components';

import colors from 'styles/colors';

export const FilePreviewContainer = styled.div`
  background-color: ${colors.white.normal};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const FilePreviewInfo = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
`;

export const FilePreviewActionContainer = styled.div`
  .icon-action {
    margin: 0 0.5rem;
  }
`;
