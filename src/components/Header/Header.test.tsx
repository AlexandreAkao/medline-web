import { screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import * as stories from 'components/Header/Header.stories';
import { renderWithRouter } from 'utils/testWrapper';
import Header from 'components/Header';

const { Authenticated, WithoutAuthenticated } = composeStories(stories);

const navigate = vi.fn();
vi.mock('react-router-dom', async () => {
  const reactRouterDom = await vi.importActual('react-router-dom');

  return {
    ...(reactRouterDom as Record<string, unknown>),
    useNavigate: () => navigate,
  };
});

describe('Header', () => {
  const renderComponent = (customProps: Partial<IHeaderProps> = {}) => {
    const props: IHeaderProps = {
      isAuthenticated: false,
      icon: 'https://cdn-icons-png.flaticon.com/512/5277/5277459.png',
      iconAlt: 'icon',
      children: undefined,
      ...customProps,
    };
    return renderWithRouter(<Header {...props} />);
  };

  it('should match with snapshot', () => {
    const { container } = renderComponent();
    expect(container).toMatchSnapshot();
  });

  it('should render authenticated header', () => {
    renderWithRouter(<Authenticated />);
    const navigationContainer = screen.getByTestId('test-navigation');
    const itemsContainer = screen.getByTestId('test-navigation-items');
    expect(navigationContainer).toBeInTheDocument();
    expect(navigationContainer).toHaveStyle(`
      box-shadow: 0px 4px 10px 1px rgba(0,0,0,0.25)
    `);
    expect(itemsContainer.childElementCount).toBe(4);
  });

  it('should render header without authenticated', () => {
    renderWithRouter(<WithoutAuthenticated />);
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
    renderComponent();
    const iconElement = screen.getByRole('img');
    await userEvent.click(iconElement);

    expect(iconElement).toBeInTheDocument();
    expect(navigate).toBeCalledWith('/');
  });
});
