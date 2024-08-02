/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}"],
  theme: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'primary-dark': '#222831',
        'primary-light': '#393E46',
        'secondary-dark': '#00ADB5',
        'secondary-light': '#EEEEEE',
        'invalid': '#FF0000',
      },
  },
  plugins: [],
}

