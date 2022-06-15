module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '320px',
      'sm': '576px',
      'md': '768px',
      'lg': '990px',
      'xl': '1200px'
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        'bg' : '#040C18',
        'primary': '#FF4820',
        'linear': '#AE67FA',
        'ternary': '#052D56',
        'black': '#000000',
        'heaven': '#FFFFFF',
        'footer': '#2D333F'
      }
    },
  },
  plugins: [],
}
