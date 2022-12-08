import { ComponentStory, ComponentMeta } from '@storybook/react';

import Switch from 'components/Switch';

export default {
  title: 'Switch',
  args: {},
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => <Switch {...args} />;

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  optionLeft: { label: 'Atestado', value: 'left' },
  optionRight: { label: 'Receita', value: 'right' },
  onChange: option => console.log(option),
};

export const MediumWidth = Template.bind({});
MediumWidth.args = {
  optionLeft: { label: 'Atestado', value: 'left' },
  optionRight: { label: 'Receita', value: 'right' },
};
MediumWidth.decorators = [
  Story => (
    <main style={{ width: '50vw' }}>
      <Story />
    </main>
  ),
];

export const SmallWidth = Template.bind({});
SmallWidth.args = {
  optionLeft: { label: 'Atestado', value: 'left' },
  optionRight: { label: 'Receita', value: 'right' },
};
SmallWidth.decorators = [
  Story => (
    <main style={{ width: '20vw' }}>
      <Story />
    </main>
  ),
];
