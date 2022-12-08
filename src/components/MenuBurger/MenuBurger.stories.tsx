import { ComponentStory, ComponentMeta } from '@storybook/react';

import MenuBurger from 'components/MenuBurger';

export default {
  title: 'MenuBurger',
  component: MenuBurger,
} as ComponentMeta<typeof MenuBurger>;

const Template: ComponentStory<typeof MenuBurger> = args => <MenuBurger {...args} />;

const options = (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <span>Option 1</span>
    <span>Option 2</span>
    <span>Option 3</span>
    <span>Option 4</span>
  </div>
);

export const Slide = Template.bind({});
Slide.args = {
  children: options,
  type: 'slide',
};

export const Bubble = Template.bind({});
Bubble.args = {
  children: options,
  type: 'bubble',
};

export const Elastic = Template.bind({});
Elastic.args = {
  children: options,
  type: 'elastic',
};

export const FallDown = Template.bind({});
FallDown.args = {
  children: options,
  type: 'fallDown',
};

export const Push = Template.bind({});
Push.args = {
  children: options,
  type: 'push',
};

export const PushRotate = Template.bind({});
PushRotate.args = {
  children: options,
  type: 'pushRotate',
};

export const Reveal = Template.bind({});
Reveal.args = {
  children: options,
  type: 'reveal',
};

export const ScaleDown = Template.bind({});
ScaleDown.args = {
  children: options,
  type: 'scaleDown',
};

export const ScaleRotate = Template.bind({});
ScaleRotate.args = {
  children: options,
  type: 'scaleRotate',
};

export const Stack = Template.bind({});
Stack.args = {
  children: options,
  type: 'stack',
};
