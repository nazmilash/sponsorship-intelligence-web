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
                background: '#FFFFFF',
                'background-alt': '#F9FAFB',
                foreground: '#111827',
                'foreground-muted': '#4B5563',

                // Brand
                'brand-purple': '#7C3AED', // Electric Purple
                'brand-purple-hover': '#6D28D9',
                'brand-green': '#10B981', // Success Green

                // Utility
                'utility-border': '#E5E7EB',
                'utility-gray': '#F3F4F6',
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
                serif: ['var(--font-playfair)', 'Playfair Display', 'serif'],
            },
            backgroundImage: {
                'gradient-fade': 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFFFFF 100%)',
            },
        },
    },
    plugins: [],
}
