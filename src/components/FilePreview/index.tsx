import { HiDownload, HiCheck, HiX } from 'react-icons/hi';
import { FaHourglassHalf } from 'react-icons/fa';
import { useMemo } from 'react';

import { FilePreviewActionContainer, FilePreviewContainer, FilePreviewInfo } from 'components/FilePreview/styles';
import { downloadFile } from 'utils/file';
import api from 'service/api';
import colors from 'styles/colors';

function FilePreview({ children, status, file }: IFilePreviewProps) {
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

  const handleDownloadFile = async () => {
    if (file) {
      const data = await api.get(`file/${file?.id}`, { responseType: 'blob' });
      downloadFile(data.data, file?.name ?? '');
    }
  };

  return (
    <FilePreviewContainer>
      <FilePreviewInfo>{children}</FilePreviewInfo>
      <FilePreviewActionContainer>
        <IconStatus size={25} className="icon-action" data-testid={`icon-${status}-test`} />
        <HiDownload
          size={25}
          color={colors.primary.darkest}
          className="icon-action download"
          onClick={handleDownloadFile}
          data-testid="icon-download-test"
        />
      </FilePreviewActionContainer>
    </FilePreviewContainer>
  );
}

export default FilePreview;
