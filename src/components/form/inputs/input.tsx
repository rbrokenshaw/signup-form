import { useEffect, useState } from 'react';
import { useFormContext } from '../context/hooks/use-form-context';
import { ValidatorProps } from '../validation/validators';

import { default as errorIcon } from '../../../images/icon-error.svg';

type InputProps = {
    type: string;
    name: string;
    placeholder: string;
    validators?: ((props: ValidatorProps) => string | undefined)[];
};

const Input = ({ type, name, placeholder, validators }: InputProps) => {
    const { formValues, handleFormChange, formErrors, handleUpdateFormErrors, submitClicked } = useFormContext();

    const [touched, setTouched] = useState(false);
    const showErrors = submitClicked && formErrors[name] && formErrors[name].length > 0;

    useEffect(() => {
        validateInput(formValues[name]);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const validateInput = (value: string) => {
        if (validators) {
            const messages: string[] = [];

            validators.forEach(validator => {
                const message = validator({ value, inputName: placeholder });

                if (message) {
                    messages.push(message);
                }
            });

            handleUpdateFormErrors(name, messages);
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        validateInput(event.target.value);
        handleFormChange(event);
    };

    return (
        <div className='flex flex-col gap-2'>
            <input
                className={`${
                    showErrors
                        ? 'text-customRed border-2 border-customRed focus:border-customRed placeholder-opacity-0'
                        : 'text-black border-gray-300 focus:border-darkBlue'
                } ${
                    touched && 'focus:placeholder-opacity-0'
                } text-sm font-semibold tracking-wide placeholder-gray-500 border focus:outline-none focus:ring-0 rounded-md px-6 py-4`}
                type={type}
                name={name}
                value={formValues[name]}
                placeholder={placeholder}
                onChange={handleChange}
                onFocus={() => setTouched(true)}
            />

            {showErrors ? (
                <>
                    <img src={errorIcon} className='w-6 absolute right-[40px] desktop:right-[70px] mt-4' />
                    <span className='text-xs text-right text-customRed italic font-semibold'>
                        {formErrors[name][0]}
                    </span>
                </>
            ) : null}
        </div>
    );
};

export default Input;
