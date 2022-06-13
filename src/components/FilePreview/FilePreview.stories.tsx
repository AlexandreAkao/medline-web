import { ComponentStory, ComponentMeta } from '@storybook/react';

import FilePreview from 'components/FilePreview';
import colors from 'styles/colors';

export default {
  title: 'FilePreview',
  component: FilePreview,
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
} as ComponentMeta<typeof FilePreview>;

const Template: ComponentStory<typeof FilePreview> = args => <FilePreview {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary - Description - 99/99/9999',
};
