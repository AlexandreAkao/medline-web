import { addDecorator } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom'
import GlobalStyle from "../src/styles/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
