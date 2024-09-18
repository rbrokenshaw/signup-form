import React from 'react';
import { createContext } from 'react';

export type FieldValues = Record<string, string>;
export type FieldErrors = { [key: string]: string[] };

type FormContextValues = {
    formValues: FieldValues;
    handleFormChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    formErrors: FieldErrors;
    handleUpdateFormErrors: (name: string, errorMessages: string[]) => void;
    handleSubmit: () => void;
    submitClicked: boolean;
};

export const FormContext = createContext<FormContextValues | undefined>(undefined);

type FormContextProviderProps = FormContextValues & {
    children: React.ReactNode;
};

export const FormContextProvider = ({
    formValues,
    handleFormChange,
    formErrors,
    handleUpdateFormErrors,
    handleSubmit,
    submitClicked,
    children,
}: FormContextProviderProps) => {
    return (
        <FormContext.Provider
            value={{ formValues, handleFormChange, formErrors, handleUpdateFormErrors, handleSubmit, submitClicked }}
        >
            {children}
        </FormContext.Provider>
    );
};
