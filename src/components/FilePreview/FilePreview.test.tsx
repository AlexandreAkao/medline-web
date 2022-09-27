import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/FilePreview/FilePreview.stories';
import FilePreview from 'components/FilePreview';
import { downloadFile } from 'utils/file';
import { fileMock } from '__tests__/mocks/file.mock';
import api from 'service/api';

const { Primary } = composeStories(stories);

vi.mock('utils/file');

describe('FilePreview', () => {
  const renderComponent = (customProps: Partial<IFilePreviewProps> = {}) => {
    const props: IFilePreviewProps = {
      children: 'FilePreview example',
      status: 'ready',
      file: null,
      ...customProps,
    };
    return render(<FilePreview {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a primary Button', () => {
    render(<Primary />);
    const containerlement = screen.getByText(/Primary - Description - 99\/99\/9999/i);
    expect(containerlement).not.toBeNull();
  });

  describe('should render icon status', () => {
    it('check icon when status is ready', () => {
      renderComponent();
      const containerlement = screen.getByText(/FilePreview example/i);
      const statusIconElement = screen.getByTestId('icon-ready-test');
      expect(containerlement).toBeInTheDocument();
      expect(statusIconElement).toBeInTheDocument();
    });

    it('hourglass icon when status is ready', () => {
      renderComponent({ status: 'waiting' });
      const containerlement = screen.getByText(/FilePreview example/i);
      const statusIconElement = screen.getByTestId('icon-waiting-test');
      expect(containerlement).toBeInTheDocument();
      expect(statusIconElement).toBeInTheDocument();
    });

    it('cancel icon when status is ready', () => {
      renderComponent({ status: 'cancel' });
      const containerlement = screen.getByText(/FilePreview example/i);
      const statusIconElement = screen.getByTestId('icon-cancel-test');
      expect(containerlement).toBeInTheDocument();
      expect(statusIconElement).toBeInTheDocument();
    });
  });

  describe('should call method to download', async () => {
    it('when no file provider', async () => {
      const downloadFileMock = vi.mocked(downloadFile);
      renderComponent();
      const downloadIconElement = screen.getByTestId('icon-download-test');
      await userEvent.click(downloadIconElement);

      expect(downloadIconElement).toBeInTheDocument();
      expect(downloadFileMock).not.toBeCalled();
    });

    it('when file is provider', async () => {
      const downloadFileMock = vi.mocked(downloadFile);
      vi.spyOn(api, 'get').mockImplementation(() =>
        Promise.resolve({
          data: 'any blob file',
        }),
      );
      renderComponent({ file: fileMock });
      const downloadIconElement = screen.getByTestId('icon-download-test');
      await userEvent.click(downloadIconElement);

      expect(downloadIconElement).toBeInTheDocument();
      expect(downloadFileMock).toBeCalled();
    });
  });
});
