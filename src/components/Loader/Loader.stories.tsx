import { ComponentStory, ComponentMeta } from '@storybook/react';

import Loader from 'components/Loader';
import colors from 'styles/colors';

export default {
  title: 'Loader',
  args: {},
  component: Loader,
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
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = () => <Loader />;

export const Primary = Template.bind({});
Primary.args = {};
