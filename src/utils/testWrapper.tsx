import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import { AuthProvider } from 'providers/AuthProvider';

export const renderWithRouter = (
  component: React.ReactNode,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
  return {
    ...render(
      <Router location={history.location} navigator={history}>
        {component}
      </Router>,
    ),
    history,
  };
};

export const renderWithProvider = (
  component: React.ReactNode,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) => {
  return {
    ...render(
      <Router location={history.location} navigator={history}>
        <AuthProvider>{component}</AuthProvider>,
      </Router>,
    ),
    history,
  };
};
