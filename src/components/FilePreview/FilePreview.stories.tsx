import { ComponentStory, ComponentMeta } from '@storybook/react';
import withMock from 'storybook-addon-mock';

import FilePreview from 'components/FilePreview';
import colors from 'styles/colors';
import { fileMock } from '__tests__/mocks/file.mock';

export default {
  title: 'FilePreview',
  component: FilePreview,
  decorators: [
    Story => (
      <div
        style={{
          background: colors.primary.normal,
          width: '100%',
          height: '100%',
          padding: '50px',
        }}
      >
        <Story />
      </div>
    ),
    withMock,
  ],
} as ComponentMeta<typeof FilePreview>;

const Template: ComponentStory<typeof FilePreview> = args => <FilePreview {...args} />;

export const Primary = Template.bind({});
Primary.parameters = {
  mockData: [
    {
      url: 'http://any-url/file/1',
      method: 'GET',
      status: 200,
      response: { file: 'any-file' },
    },
  ],
};
Primary.args = {
  children: 'Primary - Description - 99/99/9999',
  file: fileMock,
};
