import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from 'example/components/stories/Button/Button.stories';

const { Primary } = composeStories(stories);

it('renders in the loading state', () => {
  render(<Primary />);
  const buttonElement = screen.getByText(/Button/i);
  expect(buttonElement).not.toBeNull();
});
