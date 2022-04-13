import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'components/Button/Button.stories';
import colors from 'styles/colors';

const { Primary, Secondary, Small, Large } = composeStories(stories);

it('should render a primary Button', () => {
  render(<Primary />);
  const buttonElement = screen.getByText(/Primary/i);
  expect(buttonElement).not.toBeNull();
  expect(buttonElement).toHaveStyle({
    color: colors.white.normal,
    backgroundColor: colors.primary,
  });
});

it('should render a secondary Button', () => {
  render(<Secondary />);
  const buttonElement = screen.getByText(/Secondary/i);
  expect(buttonElement).not.toBeNull();
  expect(buttonElement).toHaveStyle({
    color: colors.black.normal,
    backgroundColor: colors.white.normal,
  });
});

it('should render a small Button', () => {
  render(<Small />);
  const buttonElement = screen.getByText(/Small/i);
  expect(buttonElement).not.toBeNull();
});

it('should render a large Button', () => {
  render(<Large />);
  const buttonElement = screen.getByText(/Large/i);
  expect(buttonElement).not.toBeNull();
});
