/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      purple: '#8000FF',
      lighterPurple: '#db1499',
      black: '#000000',
      lavender: '#E0C0FF',
      gray: '#D9D9D9',
      darkergray: '#939393',
      lightergray: '#F5F5F5',
      grayvariant: '#CECECE',
      darkTheme: '#121212',
      darkThemeGray: '#212121',
      grayvariant: '#242424',
    },
    extend: {
      backgroundImage: {
        hero: "url('/src/app/img/banner.jpeg')",
      },
    },
  },
  plugins: [],
};
