import { ComponentStory, ComponentMeta } from '@storybook/react';

import Pagination from 'components/Pagination';
import colors from 'styles/colors';

export default {
  title: 'Pagination',
  args: {},
  component: Pagination,
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
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = args => <Pagination {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  pageCount: 10,
};
