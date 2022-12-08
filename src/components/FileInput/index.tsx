import { ChangeEvent, useRef } from 'react';

import Button from 'components/Button';
import { FileInputContainer } from 'components/FileInput/styles';

function FileInput({ children, acceptFile, multiple, onChange, size = 'medium', primary = true }: IFileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadFile = () => {
    inputRef.current?.click();
  };

  const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files as FileList);

    onChange && onChange(files);
  };

  return (
    <>
      <Button size={size} primary={primary} onClick={onUploadFile}>
        {children}
      </Button>
      <FileInputContainer
        data-testid="file-input-test"
        ref={inputRef}
        type="file"
        onChange={onChangeFile}
        accept={acceptFile?.join(', ')}
        multiple={multiple}
      />
    </>
  );
}

export default FileInput;
