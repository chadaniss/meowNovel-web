module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'red-wine': '#BD2F85'
      }
    }
  },
  plugins: [require('flowbite/plugin')]
};
