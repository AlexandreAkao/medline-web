import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';

import * as stories from 'components/Header/Header.stories';
import { renderWithProvider } from 'utils/testWrapper';
import Header from 'components/Header';

const { Authenticated, WithoutAuthenticated } = composeStories(stories);

describe('Header', () => {
  const renderComponent = (customProps: Partial<IHeaderProps> = {}, route = ['/']) => {
    const props: IHeaderProps = {
      isAuthenticated: false,
      icon: 'https://cdn-icons-png.flaticon.com/512/5277/5277459.png',
      iconAlt: 'icon',
      children: undefined,
      ...customProps,
    };
    return renderWithProvider(<Header {...props} />, { route });
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render authenticated header', () => {
    renderWithProvider(<Authenticated />);
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();
    expect(navigationContainer).toHaveStyle(`
      box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.25)
    `);
    expect(itemsContainer.childElementCount).toBe(4);
  });

  it('should render header without authenticated', () => {
    renderWithProvider(<WithoutAuthenticated />);
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();
    expect(navigationContainer).toHaveStyle(`
      box-shadow: ${''}
    `);
    expect(itemsContainer.childElementCount).toBe(2);
  });

  it('should render header without items', () => {
    renderComponent();
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();
    expect(itemsContainer.childElementCount).toBe(0);
  });

  it('should redirect to LandingPage when clicked on icon', async () => {
    const { history } = renderComponent({}, ['/any-url']);

    const iconElement = screen.getByRole('link');
    await userEvent.click(iconElement);

    expect(iconElement).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');
  });
});
