module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '390px',
      },
      fontFamily :{
        'Satoshi-Light' : ['Satoshi Light', 'Sans-Serif'],
        'Satoshi-LightItalic' : ['Satoshi LightItalic', 'Sans-Serif'],
        'Satoshi-Regular ' : ['Satoshi Regular', 'Sans-Serif'],
        'Satoshi-Italic ' : ['Satoshi Italic', 'Sans-Serif'],
        'Satoshi-Medium  ' : ['Satoshi Medium  ', 'Sans-Serif'],
        'Satoshi-MediumItalic  ' : ['Satoshi MediumItalic  ', 'Sans-Serif'],
        'Satoshi-Variable  ' : ['Satoshi Variable  ', 'Sans-Serif'],
        'Satoshi-Bold' : ['Satoshi Bold', 'Sans-Serif'],
      },
      colors:{
        'primary' : '#F2F0F1',
        'product-bg' : '#F0EEED',
      }
    },
  },
  plugins: [],
}
