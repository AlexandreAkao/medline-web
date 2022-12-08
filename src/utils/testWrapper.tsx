import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

import { AuthProvider } from 'providers/AuthProvider';
import { LoaderProvider } from 'providers/LoaderProvider';

export function RouterProviders({
  children,
  route = '/',
  history = createMemoryHistory({ initialEntries: [route] }),
}: IChildren & { route?: string; history?: MemoryHistory }) {
  return (
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  );
}

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
  { route = ['/'], history = createMemoryHistory({ initialEntries: route }) } = {},
) => {
  return {
    ...render(
      <Router location={history.location} navigator={history}>
        <LoaderProvider>
          <AuthProvider>{component}</AuthProvider>,
        </LoaderProvider>
      </Router>,
    ),
    history,
  };
};
