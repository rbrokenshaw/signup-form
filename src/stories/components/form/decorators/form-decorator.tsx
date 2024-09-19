import { StoryFn } from '@storybook/react';
import { FieldValues } from '../../../../components/form/context/form-context';
import Form from '../../../../components/form/form';

export const useFormDecorator = (Story: StoryFn, defaultValues: FieldValues) => {
    return (
        <Form defaultValues={defaultValues} onSubmit={() => {}}>
            <Story />
        </Form>
    );
};
