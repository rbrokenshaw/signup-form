import { useContext } from 'react';
import { FormContext } from '../form-context';

export const useFormContext = () => {
    const context = useContext(FormContext);

    if (context === undefined) {
        throw new Error('"Form" child components cannot be rendered outside of the <Form> component');
    }
    return context;
};
