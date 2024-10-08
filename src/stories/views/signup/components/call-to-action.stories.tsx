import type { Meta, StoryObj } from '@storybook/react';
import CallToAction from '../../../../views/signup/components/call-to-action';

const meta = {
    title: 'Views/Sign Up/Components/Call To Action',
    component: CallToAction,
} satisfies Meta<typeof CallToAction>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};
