import type { Meta, StoryObj } from '@storybook/react';

import InputButton from '../../../../components/form/inputs/input-button';
import { useFormDecorator } from '../decorators/form-decorator';

const meta = {
    title: 'Components/Form/Inputs/Input Button',
    component: InputButton,
    decorators: [StoryObj => useFormDecorator(StoryObj, { value: '' })],
} satisfies Meta<typeof InputButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        value: 'Submit',
    },
};
