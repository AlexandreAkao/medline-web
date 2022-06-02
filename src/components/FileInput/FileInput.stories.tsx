import { ComponentStory, ComponentMeta } from '@storybook/react';

import FileInput from 'components/FileInput';

export default {
  title: 'FileInput',
  component: FileInput,
} as ComponentMeta<typeof FileInput>;

const Template: ComponentStory<typeof FileInput> = args => <FileInput {...args} />;

export const AllFiles = Template.bind({});
AllFiles.args = {
  children: <div>AllFiles</div>,
};

export const OnlyImage = Template.bind({});
OnlyImage.args = {
  children: <div>OnlyImage</div>,
  acceptFile: ['image/*'],
};

export const OnlyAudio = Template.bind({});
OnlyAudio.args = {
  children: <div>OnlyAudio</div>,
  acceptFile: ['audio/*'],
};

export const OnlyVideo = Template.bind({});
OnlyVideo.args = {
  children: <div>OnlyVideo</div>,
  acceptFile: ['video/*'],
};

export const OnlyDoc = Template.bind({});
OnlyDoc.args = {
  children: <div>OnlyDoc</div>,
  acceptFile: ['application/*'],
  onChange(files) {
    console.log(files);
  },
};

export const MultipleFile = Template.bind({});
MultipleFile.args = {
  children: <div>MultipleFile</div>,
  multiple: true,
};
