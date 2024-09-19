const Hero = () => {
    return (
        <section className='w-full desktop:w-1/2 flex flex-col justify-center pt-10 desktop:pt-0 text-white gap-5 desktop:gap-10 text-center desktop:text-left'>
            <h1 className='text-2xl desktop:text-5xl font-bold'>Learn to code by watching others</h1>
            <p className='text-sm desktop:text-base font-medium leading-[1.5rem] desktop:leading-normal'>
                See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but
                understanding how developers think is invaluable.
            </p>
        </section>
    );
};

export default Hero;
