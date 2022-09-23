import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Modal from 'components/Modal';
import colors from 'styles/colors';

export default {
  title: 'Modal',
  args: {},
  component: Modal,
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
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isVisible: true,
  customStyles: {},
  onOpen: action('Open'),
  onClose: action('Close'),
  children: <div>Any children</div>,
};
