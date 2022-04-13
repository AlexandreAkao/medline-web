import { render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

export const renderWithRouter = (component: React.ReactNode) =>
  render(<MemoryRouter>{component}</MemoryRouter>);
