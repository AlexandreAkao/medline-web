import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

import * as stories from 'components/Modal/Modal.stories';
import Modal from 'components/Modal';

const { Primary } = composeStories(stories);

describe('Modal', () => {
  const renderComponent = (customProps: Partial<IModalProps> = {}) => {
    const props: IModalProps = {
      isVisible: true,
      children: 'modal example',
      ...customProps,
    };
    return render(<Modal {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a Modal', () => {
    render(<Primary />);
    const modalElement = screen.getByTestId(/test-modal-container/i);
    expect(modalElement).toBeInTheDocument();
  });

  it('should not render Modal', () => {
    const { container } = renderComponent({ isVisible: false });
    expect(container.childElementCount).toBeFalsy();
  });

  it('should call onOpen when open Modal', () => {
    const onOpen = vi.fn();
    renderComponent({ onOpen });
    expect(onOpen).toBeCalled();
  });

  it('should call onClose when close Modal', async () => {
    const onClose = vi.fn();
    renderComponent({ onClose });
    const modalElement = screen.getByTestId(/test-modal-container/i);

    await userEvent.click(modalElement);

    expect(onClose).toBeCalled();
  });
});
