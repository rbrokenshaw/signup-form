import { validators } from '../validators';

describe('Validators - Required', () => {
    test('Input is valid - return undefined', () => {
        expect(validators.required({ value: 'value', inputName: 'Input' })).toEqual(undefined);
        expect(validators.required({ value: '1', inputName: 'Input' })).toEqual(undefined);
        expect(validators.required({ value: 'abc123', inputName: 'Input' })).toEqual(undefined);
        expect(validators.required({ value: '   value   ', inputName: 'Input' })).toEqual(undefined);
    });

    test('Input is invalid - return error message', () => {
        const errorMessage = 'Input cannot be empty';

        expect(validators.required({ value: '', inputName: 'Input' })).toEqual(errorMessage);
        expect(validators.required({ value: '    ', inputName: 'Input' })).toEqual(errorMessage);
    });
});

describe('Validators - isEmail', () => {
    test('Input is valid - return undefined', () => {
        expect(validators.isEmail({ value: 'test@example.com' })).toEqual(undefined);
        expect(validators.isEmail({ value: 'abc@test.co.uk' })).toEqual(undefined);
        expect(validators.isEmail({ value: 'firstname.lastname@company.email' })).toEqual(undefined);
    });

    test('Input is invalid - return error message', () => {
        const errorMessage = 'Looks like this is not an email';

        expect(validators.isEmail({ value: '' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: '     ' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: 'test' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: 'value@' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: 'value@domain' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: '@email.com' })).toEqual(errorMessage);
        expect(validators.isEmail({ value: 'test @ test.com' })).toEqual(errorMessage);
    });
});
