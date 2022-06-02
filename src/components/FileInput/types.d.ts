type FileInputSize = 'small' | 'medium' | 'large';

type FileInputAccept =
  | 'application/pdf'
  | 'application/zip'
  | 'application/*'
  | 'audio/mpeg'
  | 'audio/*'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/png'
  | 'image/*'
  | 'text/css'
  | 'text/html'
  | 'text/plain'
  | 'text/*'
  | 'video/mpeg'
  | 'video/*';

interface IFileInputProps {
  children: React.ReactNode;
  acceptFile?: FileInputAccept[];
  size?: FileInputSize;
  primary?: boolean;
  multiple?: boolean;
  onChange?: (files: File[]) => void;
}
