/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('./dist/config/tailwind-preset').default
  ],
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
}

// When using as an installed package:
// module.exports = {
//   presets: [
//     require('@somayiasamy/mnh-ds').tailwindPreset
//   ],
//   content: ['./src/**/*.{js,jsx,ts,tsx}'],
// }
