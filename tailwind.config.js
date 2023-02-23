/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.*'
    ],
    theme: {
        extend: {
            margins: {
              '20vh': '20vh'
            },
            positions: {
                '12px': '12px',
                '-110px': '-110px',
                '180px' : '180px',
                '70%' : '70%'
            },
            colors: {
                blue: ['#617C8C'],
                darkBlue: ['#0D1C26'],
                darkBlueSecondary: ['#1F3140'],
                lightBlue: ['#5E88BF'],
                lightBlueSecondary: ['#6B98BF']
            }
        },
    },
    plugins: [],
}
