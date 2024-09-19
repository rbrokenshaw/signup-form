import { FieldValues } from '../../../components/form/context/form-context';
import Form from '../../../components/form/form';
import { validators } from '../../../components/form/validation/validators';

const FormSignup = () => {
    const defaultValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values: FieldValues) => {
        console.info('Form submitted with valid data:', values);
    };

    return (
        <div className='flex flex-col gap-5 bg-white p-5 desktop:p-10 rounded-xl drop-shadow-custom border border-gray-200'>
            <Form defaultValues={defaultValues} onSubmit={handleSubmit}>
                <Form.Input type='text' name='firstName' placeholder='First Name' validators={[validators.required]} />
                <Form.Input type='text' name='lastName' placeholder='Last Name' validators={[validators.required]} />
                <Form.Input
                    type='email'
                    name='email'
                    placeholder='Email Address'
                    validators={[validators.required, validators.isEmail]}
                />
                <Form.Input type='password' name='password' placeholder='Password' validators={[validators.required]} />
                <Form.Button value='Claim your free trial' />
            </Form>

            <span className='text-xs text-grayishBlue text-center px-4 '>
                By clicking this button, you are agreeing to our <a href='/path/to/tos'>Terms and Services</a>
            </span>
        </div>
    );
};

export default FormSignup;
