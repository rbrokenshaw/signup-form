import type { Meta, StoryObj } from '@storybook/react';

import Input from '../../../../components/form/inputs/input';
import { useFormDecorator } from '../decorators/form-decorator';

const meta = {
    title: 'Components/Form/Inputs/Input',
    component: Input,
    decorators: [StoryObj => useFormDecorator(StoryObj, { input: '' })],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name',
    },
};
