import type { Meta, StoryObj } from '@storybook/react';
import Hero from '../../../../views/signup/components/hero';

const meta = {
    title: 'Views/Sign Up/Components/Hero',
    component: Hero,
    parameters: {
        backgrounds: {
            values: [{ name: 'Red', value: '#FF7978' }],
            default: 'Red',
        },
    },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
};
