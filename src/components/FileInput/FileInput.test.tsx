import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/FileInput/FileInput.stories';
import FileInput from 'components/FileInput';

const { AllFiles, MultipleFile, OnlyImage, OnlyAudio, OnlyVideo, OnlyDoc } = composeStories(stories);

describe('FileInput', () => {
  const renderComponent = (customProps: Partial<IFileInputProps> = {}) => {
    const props: IFileInputProps = {
      children: 'FileInput example',
      ...customProps,
    };
    return render(<FileInput {...props} />);
  };

  const makeFakeFile = (fileName = 'image', type: FileInputAccept = 'image/jpeg'): File =>
    new File([fileName], `${fileName}.${type.split('/')[1]}`, { type });

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a input file that accept all file types', async () => {
    render(<AllFiles />);
    const buttonElement = screen.getByText(/AllFiles/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const files = [makeFakeFile(), makeFakeFile(), makeFakeFile()];

    await userEvent.upload(inputFileElement, files);

    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(1);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([files[0]]);
  });

  it('should render a files input that accept multiple files', async () => {
    render(<MultipleFile />);
    const buttonElement = screen.getByText(/MultipleFile/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const files = [makeFakeFile(), makeFakeFile(), makeFakeFile()];

    await userEvent.upload(inputFileElement, files);

    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(3);
    expect(Array.from(inputFileElement.files as FileList)).toEqual(files);
  });

  it('should render a files input that accept only image', async () => {
    render(<OnlyImage multiple />);
    const buttonElement = screen.getByText(/OnlyImage/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const filesNotAccepted = [
      makeFakeFile('audio', 'audio/mpeg'),
      makeFakeFile('video', 'video/mpeg'),
      makeFakeFile('doc', 'application/pdf'),
    ];
    const filesAccepted = [makeFakeFile(), makeFakeFile(), makeFakeFile()];

    await userEvent.upload(inputFileElement, filesNotAccepted);
    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(0);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([]);

    await userEvent.upload(inputFileElement, filesAccepted);
    expect(inputFileElement.files).toHaveLength(3);
    expect(Array.from(inputFileElement.files as FileList)).toEqual(filesAccepted);
  });

  it('should render a files input that accept only audio', async () => {
    render(<OnlyAudio multiple />);
    const buttonElement = screen.getByText(/OnlyAudio/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const filesNotAccepted = [
      makeFakeFile(),
      makeFakeFile('video', 'video/mpeg'),
      makeFakeFile('doc', 'application/pdf'),
    ];
    const filesAccepted = [
      makeFakeFile('audio', 'audio/mpeg'),
      makeFakeFile('audio', 'audio/mpeg'),
      makeFakeFile('audio', 'audio/mpeg'),
    ];

    await userEvent.upload(inputFileElement, filesNotAccepted);
    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(0);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([]);

    await userEvent.upload(inputFileElement, filesAccepted);
    expect(inputFileElement.files).toHaveLength(3);
    expect(Array.from(inputFileElement.files as FileList)).toEqual(filesAccepted);
  });

  it('should render a files input that accept only video', async () => {
    render(<OnlyVideo multiple />);
    const buttonElement = screen.getByText(/OnlyVideo/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const filesNotAccepted = [
      makeFakeFile(),
      makeFakeFile('audio', 'audio/mpeg'),
      makeFakeFile('doc', 'application/pdf'),
    ];
    const filesAccepted = [
      makeFakeFile('video', 'video/mpeg'),
      makeFakeFile('video', 'video/mpeg'),
      makeFakeFile('video', 'video/mpeg'),
    ];

    await userEvent.upload(inputFileElement, filesNotAccepted);
    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(0);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([]);

    await userEvent.upload(inputFileElement, filesAccepted);
    expect(inputFileElement.files).toHaveLength(3);
    expect(Array.from(inputFileElement.files as FileList)).toEqual(filesAccepted);
  });

  it('should render a files input that accept only document', async () => {
    render(<OnlyDoc multiple />);
    const buttonElement = screen.getByText(/OnlyDoc/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const filesNotAccepted = [makeFakeFile(), makeFakeFile('audio', 'audio/mpeg'), makeFakeFile('video', 'video/mpeg')];
    const filesAccepted = [
      makeFakeFile('doc', 'application/*'),
      makeFakeFile('doc', 'application/*'),
      makeFakeFile('doc', 'application/*'),
    ];

    await userEvent.upload(inputFileElement, filesNotAccepted);
    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(0);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([]);

    await userEvent.upload(inputFileElement, filesAccepted);
    expect(inputFileElement.files).toHaveLength(3);
    expect(Array.from(inputFileElement.files as FileList)).toEqual(filesAccepted);
  });

  it('should render call ', async () => {
    const onChange = vi.fn();
    renderComponent({ onChange });
    const buttonElement = screen.getByText(/FileInput example/i);
    const inputFileElement = screen.getByTestId('file-input-test') as HTMLInputElement;
    const file = makeFakeFile();

    await userEvent.upload(inputFileElement, file);
    expect(buttonElement).not.toBeNull();
    expect(inputFileElement.files).toHaveLength(1);
    expect(Array.from(inputFileElement.files as FileList)).toEqual([file]);
    expect(onChange).toBeCalledWith([file]);
  });
});
