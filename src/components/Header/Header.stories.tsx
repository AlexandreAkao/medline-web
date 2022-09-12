import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaSignOutAlt } from 'react-icons/fa';

import Header from 'components/Header';
import HeaderItem from 'components/HeaderItem';
import colors from 'styles/colors';

export default {
  title: 'Header',
  args: {
    isAuthenticated: false,
    items: [],
    iconAlt: 'icon alt',
  },
  decorators: [
    Story => (
      <div
        style={{
          background: colors.primary.normal,
          width: '100%',
          height: '100%',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Authenticated = Template.bind({});
Authenticated.args = {
  icon: 'https://cdn-icons-png.flaticon.com/512/5277/5277459.png',
  isAuthenticated: true,
  children: (
    <>
      <HeaderItem as="link">Editar Perfil</HeaderItem>
      <HeaderItem as="link">Atestados/Receitas</HeaderItem>
      <HeaderItem as="link">Solicitação</HeaderItem>
      <HeaderItem as="link">
        Olá, user <FaSignOutAlt />
      </HeaderItem>
    </>
  ),
};

export const WithoutAuthenticated = Template.bind({});
WithoutAuthenticated.args = {
  icon: 'https://cdn-icons-png.flaticon.com/512/5277/5277459.png',
  isAuthenticated: false,
  children: (
    <>
      <HeaderItem as="button">Cadastro</HeaderItem>
      <HeaderItem as="link">Entrar</HeaderItem>
    </>
  ),
};
