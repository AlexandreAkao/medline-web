import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from 'components/Checkbox';
import colors from 'styles/colors';

export default {
  title: 'Checkbox',
  args: {},
  component: Checkbox,
  decorators: [
    Story => (
      <div
        style={{
          background: colors.primary.normal,
          width: '100%',
          height: '100%',
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  id: 'primary',
  primary: true,
  onChange: event => console.log(event.target.checked),
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  id: 'secondary',
  primary: false,
};
