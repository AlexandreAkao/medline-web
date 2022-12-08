import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Loader/Loader.stories';
import Loader from 'components/Loader';

const { Primary } = composeStories(stories);

describe('Loader', () => {
  const renderComponent = (customProps: Partial<ILoaderProps> = {}) => {
    const props: ILoaderProps = {
      isVisible: true,
      ...customProps,
    };
    return render(<Loader {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a Loader', () => {
    render(<Primary />);
    const spinElement = screen.getByTestId(/test-loader-spin/i);
    expect(spinElement).toBeInTheDocument();
  });

  it('should not render Loader', () => {
    const { container } = renderComponent({ isVisible: false });
    expect(container.childElementCount).toBeFalsy();
  });
});
