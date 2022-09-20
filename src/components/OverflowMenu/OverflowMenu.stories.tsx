import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { FaBoxOpen } from 'react-icons/fa';

import OverflowMenu from 'components/OverflowMenu';

export default {
  title: 'OverflowMenu',
  component: OverflowMenu,
} as ComponentMeta<typeof OverflowMenu>;

const Template: ComponentStory<typeof OverflowMenu> = args => <OverflowMenu {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  render: 'Primary',
  children: (
    <div>
      <h1>Title</h1>
      <span>Option 1</span>
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex perferendis ipsum voluptates non nisi nihil
        accusantium, amet cupiditate molestiae qui aliquid dolores, numquam eligendi! Commodi recusandae impedit
        accusamus labore dolor.
      </span>
    </div>
  ),
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  render: <FaBoxOpen size={30} role="img" />,
  children: (
    <div>
      <h1>Title</h1>
      <span>Option 1</span>
      <button type="button" onClick={action('clicked')}>
        Click me
      </button>
    </div>
  ),
};
