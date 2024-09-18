import { useState } from 'react';
import { FormContextProvider, FieldValues, FieldErrors } from './context/form-context';
import Input from './inputs/input';
import InputButton from './inputs/input-button';

type FormProps = {
    defaultValues: FieldValues;
    onSubmit: (values: FieldValues) => void;
    children: React.ReactNode;
};

const Form = ({ defaultValues, onSubmit, children }: FormProps) => {
    const [formValues, setFormValues] = useState(defaultValues);
    const [formErrors, setFormErrors] = useState<FieldErrors>({});
    const [submitClicked, setSubmitClicked] = useState(false);

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleUpdateFormErrors = (name: string, errorMessages: string[]) => {
        setFormErrors(prevState => ({
            ...prevState,
            [name]: errorMessages,
        }));
    };

    const handleSubmit = () => {
        setSubmitClicked(true);

        if (!Object.values(formErrors).some(errors => errors.length > 0)) {
            onSubmit(formValues);
        }
    };

    return (
        <FormContextProvider
            formValues={formValues}
            handleFormChange={handleFormChange}
            formErrors={formErrors}
            handleUpdateFormErrors={handleUpdateFormErrors}
            handleSubmit={handleSubmit}
            submitClicked={submitClicked}
        >
            <form className='flex flex-col gap-3 desktop:gap-5'>{children}</form>
        </FormContextProvider>
    );
};

Form.Input = Input;
Form.Button = InputButton;

export default Form;
