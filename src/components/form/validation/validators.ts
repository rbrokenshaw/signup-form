export type ValidatorProps = {
    value: string;
    inputName?: string;
};

export const validators = {
    required: ({ value, inputName }: ValidatorProps) => {
        if (!value || value.trim() === '') {
            return `${inputName} cannot be empty`;
        }
    },
    isEmail: ({ value }: ValidatorProps) => {
        if (
            !value ||
            !value
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            return 'Looks like this is not an email';
        }
    },
};
