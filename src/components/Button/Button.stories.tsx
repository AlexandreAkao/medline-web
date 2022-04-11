import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from 'components/Button';

export default {
  title: 'Button',
  args: {
    size: 'medium',
    primary: true,
  },
  component: Button,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  onClick: () => console.log('Clicked'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  onClick: () => console.log('Clicked'),
  primary: false,
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large',
};
