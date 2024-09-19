import type { Meta, StoryObj } from '@storybook/react';

import Form, { FormProps } from '../../../components/form/form';
import { validators } from '../../../components/form/validation/validators';

const meta = {
    title: 'Components/Form',
    component: Form,
} satisfies Meta<typeof Form>;

export default meta;

export const Default: StoryObj<FormProps> = {
    render: args => (
        <Form {...args}>
            <Form.Input type='text' name='firstName' placeholder='First Name' />
            <Form.Input type='text' name='lastName' placeholder='Last Name' />
            <Form.Input type='email' name='email' placeholder='Email Address' />
            <Form.Input type='password' name='password' placeholder='Password' />
            <Form.Button value='Submit' />
        </Form>
    ),

    args: {
        onSubmit: () => console.log('submitted'),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    },
};

export const DefaultWithValidation: StoryObj<FormProps> = {
    render: args => (
        <Form {...args}>
            <Form.Input type='text' name='firstName' placeholder='First Name' validators={[validators.required]} />
            <Form.Input type='text' name='lastName' placeholder='Last Name' validators={[validators.required]} />
            <Form.Input
                type='email'
                name='email'
                placeholder='Email Address'
                validators={[validators.required, validators.isEmail]}
            />
            <Form.Input type='password' name='password' placeholder='Password' validators={[validators.required]} />
            <Form.Button value='Submit' />
        </Form>
    ),

    args: {
        onSubmit: () => console.log('submitted'),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
    },
};

export const WithDefaultValues: StoryObj<FormProps> = {
    render: args => (
        <Form {...args}>
            <Form.Input type='text' name='firstName' placeholder='First Name' />
            <Form.Input type='text' name='lastName' placeholder='Last Name' />
            <Form.Input type='email' name='email' placeholder='Email Address' />
            <Form.Input type='password' name='password' placeholder='Password' />
            <Form.Button value='Submit' />
        </Form>
    ),

    args: {
        onSubmit: () => {},
        defaultValues: {
            firstName: 'Joe',
            lastName: 'Bloggs',
            email: 'test@example.com',
            password: '',
        },
    },
};
