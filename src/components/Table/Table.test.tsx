import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Table/Table.stories';
import Table from 'components/Table';

const { Primary } = composeStories(stories);

describe('Table', () => {
  const renderComponent = (customProps: Partial<ITableProps> = {}) => {
    const props: ITableProps = {
      columns: [],
      data: [],
      ...customProps,
    };
    return render(<Table {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render correctly', () => {
    render(<Primary />);
    const Header1Element = screen.getByText(/First Name/i);
    const Header2Element = screen.getByText(/Last Name/i);
    const Header3Element = screen.getByText(/Age/i);
    const Cell1Element = screen.getByText(/FirstName1/i);
    const Cell2Element = screen.getByText(/FirstName2/i);
    const Cell3Element = screen.getByText(/FirstName3/i);

    expect(Header1Element).toBeInTheDocument();
    expect(Header2Element).toBeInTheDocument();
    expect(Header3Element).toBeInTheDocument();
    expect(Cell1Element).toBeInTheDocument();
    expect(Cell2Element).toBeInTheDocument();
    expect(Cell3Element).toBeInTheDocument();
  });

  it('should render a table with correctly rows', () => {
    renderComponent({
      columns: [
        { Header: 'Header1', accessor: 'Header1' },
        { Header: 'Header2', accessor: 'Header2' },
      ],
      data: [{ Header1: 'Cell1', Header2: 'Cell2' }],
    });

    const rows = screen.getAllByRole('row');

    expect(rows).toHaveLength(2);
  });
});
