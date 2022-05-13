import { render } from '@testing-library/react';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

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
