import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FaHospitalAlt } from 'react-icons/fa';

import Dropdown from 'components/Dropdown';

export default {
  title: 'Dropdown',
  args: {
    placeholder: 'Escolha uma unidade de saúde',
  },
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const WithOption = Template.bind({});
WithOption.args = {
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  buttonConfig: {
    children: 'Procurar',
    onClick: (event, option) => console.log('Clicked', { event, option }),
  },
  Icon: FaHospitalAlt,
};

export const WithoutOption = Template.bind({});
WithoutOption.args = {
  options: [],
  buttonConfig: { children: 'Procurar', onClick: () => console.log('Clicked') },
  Icon: FaHospitalAlt,
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  options: [],
  buttonConfig: { children: 'Procurar', onClick: () => console.log('Clicked') },
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  options: [
    { label: 'option 1', value: 'option 1' },
    { label: 'option 2', value: 'option 2' },
    { label: 'option 3', value: 'option 3' },
  ],
  Icon: FaHospitalAlt,
};
