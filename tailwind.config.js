/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Base
                background: '#F9F9F9',
                foreground: '#111111',
                // Utility Theme (Mapped to Light Mode)
                'utility-black': '#FFFFFF', // Card BG
                'utility-gray': '#F3F4F6', // Secondary BG
                'utility-border': '#E5E7EB',
                'utility-text': '#111111',
                'utility-subtext': '#555555',
                'utility-accent': '#4F46E5', // Trust Blue
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
