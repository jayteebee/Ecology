/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: '#FFFFFF',
          200: '#FEFEFE',
          300: '#FDFDFD',
          400: '#FCFCFC',
          500: '#FBFBFB',
          600: '#FAFAFA',
          700: '#F9F9F9',
          800: '#F8F8F8',
          900: '#F7F7F7',
        },
                black: {
          // Adjusted shades to match the black-based color scheme
          100: '#E0E0E0', // Lightest shade, for disabled or placeholder text
          200: '#B3B3B3',
          300: '#808080', // Light gray, for secondary text
          400: '#666666',
          500: '#4D4D4D', // Default text color
          600: '#333333',
          700: '#262626', // Darker, for emphasized text
          800: '#1A1A1A',
          900: '#0D0D0D', // Darkest shade, for headings or important text
        },
        purple: {
          100: '#F3E5F5',
          200: '#E1BEE7',
          300: '#CE93D8',
          400: '#BA68C8',
          500: '#AB47BC',
          600: '#9C27B0',
          700: '#8E24AA',
          800: '#7B1FA2',
          900: '#6A1B9A',
        },
        green : {
          100: "#285B16",
          200: "#a2df8b",
          300: "#5aa040"
        },
        // Adding text colors
         text:
         
         {
          100: '#E0E0E0', // Lightest shade for disabled or placeholder text
          200: '#B3B3B3',
          300: '#808080', // Light gray for secondary text
          400: '#666666',
          500: '#4D4D4D', // Default text color
          600: '#333333',
          700: '#262626', // Darker for emphasized text
          800: '#1A1A1A',
          900: '#0D0D0D', // Darkest shade for headings or important text
        }
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './app/**/*.{js,ts,jsx,tsx}',
//     './pages/**/*.{js,ts,jsx,tsx}',
//     './components/**/*.{js,ts,jsx,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         cream: {
//           100: '#FFFDF7',
//           200: '#FFF9EF',
//           300: '#FFF5E7',
//           400: '#FFEFDF',
//           500: '#FFEAD7',
//           600: '#FFE5CF',
//           700: '#FFDFC7',
//           800: '#FFDABF',
//           900: '#FFD4B7',
//         },
//         gray: {
//           // Adjusted shades to match the black-based color scheme
//           100: '#E0E0E0', // Lightest shade, for disabled or placeholder text
//           200: '#B3B3B3',
//           300: '#808080', // Light gray, for secondary text
//           400: '#666666',
//           500: '#4D4D4D', // Default text color
//           600: '#333333',
//           700: '#262626', // Darker, for emphasized text
//           800: '#1A1A1A',
//           900: '#0D0D0D', // Darkest shade, for headings or important text
//         },
//         purple: {
//           100: '#F3E5F5',
//           200: '#E1BEE7',
//           300: '#CE93D8',
//           400: '#BA68C8',
//           500: '#AB47BC',
//           600: '#9C27B0',
//           700: '#8E24AA',
//           800: '#7B1FA2',
//           900: '#6A1B9A',
//         },
//       },
//       spacing: {
//         '9/16': '56.25%',
//         '3/4': '75%',
//         '1/1': '100%',
//       },
//       fontFamily: {
//         inter: ['var(--font-inter)', 'sans-serif'],
//         'architects-daughter': ['var(--font-architects-daughter)', 'sans-serif']
//       },
//       fontSize: {
//         xs: '0.75rem',
//         sm: '0.875rem',
//         base: '1rem',
//         lg: '1.125rem',
//         xl: '1.25rem',
//         '2xl': '1.5rem',
//         '3xl': '2rem',
//         '4xl': '2.5rem',
//         '5xl': '3.25rem',
//         '6xl': '4rem',
//       },
//       inset: {
//         'full': '100%',
//       },
//       letterSpacing: {
//         tighter: '-0.02em',
//         tight: '-0.01em',
//         normal: '0',
//         wide: '0.01em',
//         wider: '0.02em',
//         widest: '0.4em',
//       },
//       minWidth: {
//         '10': '2.5rem',
//       },
//       scale: {
//         '98': '.98'
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//   ],
// }
