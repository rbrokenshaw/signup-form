import { useFormContext } from '../context/hooks/use-form-context';

const InputButton = ({ value }: { value: string }) => {
    const { handleSubmit } = useFormContext();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        handleSubmit();
    };

    return (
        <button
            className='bg-customGreen hover:bg-hoverGreen text-white uppercase p-4 pt-5 rounded-md drop-shadow-customButton tracking-wide'
            onClick={handleClick}
        >
            {value}
        </button>
    );
};

export default InputButton;
