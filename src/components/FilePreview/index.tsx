import { HiDownload, HiCheck, HiDocumentSearch, HiX } from 'react-icons/hi';
import { FaHourglassHalf } from 'react-icons/fa';
import { useMemo } from 'react';

import {
  FilePreviewActionContainer,
  FilePreviewContainer,
  FilePreviewInfo,
} from 'components/FilePreview/styles';

function FilePreview({ children, status }: IFilePreviewProps) {
  const IconStatus = useMemo(() => {
    switch (status) {
      case 'ready':
        return HiCheck;
      case 'cancel':
        return HiX;
      case 'waiting':
        return FaHourglassHalf;
      default:
        return FaHourglassHalf;
    }
  }, [status]);

  return (
    <FilePreviewContainer>
      <FilePreviewInfo>{children}</FilePreviewInfo>
      <FilePreviewActionContainer>
        <IconStatus size={25} className="icon-action" data-testid={`icon-${status}-test`} />
        <HiDownload size={25} className="icon-action" />
        <HiDocumentSearch size={25} className="icon-action" />
      </FilePreviewActionContainer>
    </FilePreviewContainer>
  );
}

export default FilePreview;
