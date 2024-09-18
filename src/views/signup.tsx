import CallToAction from '../components/call-to-action';
import Hero from '../components/hero';
import FormSignup from './forms/form-signup';

const SignUp = () => {
    return (
        <section className='main-bg h-screen bg-cover bg-customRed flex desktop:items-center justify-center'>
            <div className='w-full max-w-3xl p-7 desktop:max-w-full desktop:p-0 border-box flex flex-col justify-center desktop:flex-row desktop:w-5/6 gap-10'>
                <Hero />
                <div className='desktop:w-1/2 flex flex-col gap-6'>
                    <CallToAction />
                    <FormSignup />
                </div>
            </div>
        </section>
    );
};

export default SignUp;
