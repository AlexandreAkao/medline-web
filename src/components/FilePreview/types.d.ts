type FilePreviewStatusTypes = 'ready' | 'waiting' | 'cancel';

interface IFilePreviewProps {
  children: React.ReactNode;
  status: FilePreviewStatusTypes;
}
