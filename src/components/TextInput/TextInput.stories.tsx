import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaUserAlt, FaCalendarAlt, FaLock } from 'react-icons/fa';

import TextInput from 'components/TextInput';
import colors from 'styles/colors';

export default {
  title: 'TextInput',
  args: {
    placeholder: 'Placeholder',
  },
  decorators: [
    Story => (
      <div
        style={{
          background: colors.primary,
          width: '100%',
          height: '100%',
          padding: '50px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = args => <TextInput {...args} />;

export const WithIcon = Template.bind({});
WithIcon.args = {
  Icon: FaUserAlt,
  onChange: event => console.log(event),
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Nome',
  onChange: event => console.log(event),
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 20,
};

export const Password = Template.bind({});
Password.args = {
  Icon: FaLock,
  placeholder: 'Senha',
  isPassword: true,
};

export const Date = Template.bind({});
Date.args = {
  mask: '99/99/9999',
  Icon: FaCalendarAlt,
  placeholder: 'Data',
  maxLength: 20,
};

export const Cpf = Template.bind({});
Cpf.args = {
  mask: '999.999.999-99',
  placeholder: 'CPF',
  Icon: FaUserAlt,
};
