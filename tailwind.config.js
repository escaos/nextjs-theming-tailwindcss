/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
      './src/containers/**/*.{js,ts,jsx,tsx}',
      './src/app/**/*.{js,ts,jsx,tsx}',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      // Background colors
      'bg-[#2e9cca]',
      'bg-[#29648A]',
      'bg-[#ffffff]',
      'bg-[#25274d]',
      'bg-[#464866]',
      'bg-[#AAABB8]',

      // Text colors
      'text-[#2e9cca]',
      'text-[#29648A]',
      'text-[#ffffff]',
      'text-[#25274d]',
      'text-[#464866]',
      'text-[#AAABB8]',
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
