/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            mobile: '375px',
            desktop: '1440px',
        },

        extend: {
            colors: {
                customRed: 'hsl(0, 100%, 74%)',
                customGreen: 'hsl(154, 59%, 51%)',
                hoverGreen: 'hsl(154, 59%, %)',
                customBlue: 'hsl(248, 32%, 49%)',
                darkBlue: 'hsl(248, 32%, 49%)',
                grayishBlue: 'hsl(246, 25%, 77%)',
            },
            dropShadow: {
                custom: '0px 8px 0px rgba(0, 0, 0, 0.2)',
                customButton: '0px 4px 0px hsl(154, 59%, 45%)',
            },
        },
    },
    plugins: [],
};
