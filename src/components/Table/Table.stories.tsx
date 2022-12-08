import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AiOutlineEdit } from 'react-icons/ai';

import Table from 'components/Table';

export default {
  title: 'Table',
  component: Table,
  decorators: [
    Story => (
      <div
        style={{
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = args => <Table {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  columns: [
    {
      Header: 'First Name',
      accessor: 'firstName',
    },
    {
      Header: 'Last Name',
      accessor: 'lastName',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },
    {
      Header: '',
      accessor: 'action',
      Cell: ({ value }) => {
        if (typeof value === 'function') return value();

        return value;
      },
    },
  ],
  data: [
    {
      firstName: 'FirstName1',
      lastName: 'LastName1',
      age: 8,
      action: () => <AiOutlineEdit />,
    },
    {
      firstName: 'FirstName2',
      lastName: 'LastName2',
      age: 20,
      action: () => <AiOutlineEdit />,
    },
    {
      firstName: 'FirstName3',
      lastName: 'LastName3',
      age: 100,
      action: () => <AiOutlineEdit />,
    },
  ],
};
