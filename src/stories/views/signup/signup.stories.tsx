import type { Meta, StoryObj } from '@storybook/react';
import SignUp from '../../../views/signup/signup';

const meta = {
    title: 'Views/Sign Up/Sign Up',
    component: SignUp,
} satisfies Meta<typeof SignUp>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
