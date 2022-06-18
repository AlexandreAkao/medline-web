import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from 'components/Radio';
import colors from 'styles/colors';

export default {
  title: 'Radio',
  args: {},
  component: Radio,
  decorators: [
    Story => (
      <div
        style={{
          background: colors.primary,
          width: '100%',
          height: '100%',
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = args => <Radio {...args} />;

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
