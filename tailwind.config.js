/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'poppins': ['"Poppins"', 'sans-serif'],
            'spartan': ['"League Spartan"', 'sans-serif'] 
        },
        extend: {
            colors: {
                'black': '#333333',
            },
        }
    }
}