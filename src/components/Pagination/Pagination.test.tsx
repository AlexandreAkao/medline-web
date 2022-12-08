import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Pagination/Pagination.stories';
import Pagination from 'components/Pagination';

const { Primary } = composeStories(stories);

describe('Pagination', () => {
  const renderComponent = (customProps: Partial<IPaginationProps> = {}) => {
    const props: IPaginationProps = {
      pageCount: 10,
      ...customProps,
    };

    return render(<Pagination {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render a primary Pagination', () => {
    render(<Primary />);
    const labelElement = screen.getAllByRole('button');
    expect(labelElement).toHaveLength(9);
  });
});
