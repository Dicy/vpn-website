import type {Config} from "tailwindcss";

export default {
  content: [],
  theme: {
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      mono: ['"JetBrains Mono"', 'monospace']
    },
    fontSize: {
      'h1': ['2.25rem', {lineHeight: '2.5rem'}], // 36px
      'h2': ['1.5rem', {lineHeight: '2rem'}], // 24px
      'subtitle': ['1.25rem', {lineHeight: '1.75rem', fontWeight: '500'}], // 20px
      'medium': ['1.125rem', {lineHeight: '1.75rem'}], // 18px
      'normal': ['1rem', {lineHeight: '1.5rem'}], // 16px
      'small': ['0.875rem', {lineHeight: '1.25rem', fontWeight: '300'}], // 14px
      'tiny': ['0.75rem', {lineHeight: '1rem'}], // 12px
    },
    colors: {
      'inherit': 'inherit',
      'current': 'currentColor',
      'transparent': 'transparent',
      'white': '#ffffff',
      'black': '#000000',
      'blue': {
        100: 'hsl(222, 95%, 88%)',
        200: 'hsl(222, 95%, 82%)',
        300: 'hsl(222, 91%, 71%)',
        400: 'hsl(222, 86%, 65%)',
        500: 'hsl(222, 73%, 54%)',
        600: 'hsl(222, 72%, 39%)',
        700: 'hsl(222, 77%, 27%)'
      },
      'gray': {
        100: 'hsl(222, 48%, 90%)',
        200: 'hsl(222, 34%, 75%)',
        300: 'hsl(222, 19%, 54%)',
        400: 'hsl(222, 20%, 40%)',
        500: 'hsl(222, 20%, 28%)',
        600: 'hsl(222, 22%, 19%)',
        700: 'hsl(222, 18%, 14%)',
        800: 'hsl(222, 18%, 11%)',
        900: 'hsl(222, 10%, 5%)'
      },
      'red': {
        100: 'hsl(356, 100%, 89%)',
        200: 'hsl(356, 98%, 80%)',
        300: 'hsl(352, 85%, 66%)',
        400: 'hsl(348, 68%, 47%)',
        500: 'hsl(347, 70%, 39%)',
        600: 'hsl(344, 77%, 27%)',
        900: 'hsl(344, 86%, 11%)'
      },
      'green': {
        100: 'hsl(102, 90%, 92%)',
        500: 'hsl(102, 76%, 30%)',
        600: 'hsl(102, 76%, 21%)',
        900: 'hsl(102, 88%, 10%)'
      },
      'bright-green': 'hsl(102, 100%, 54%)',
      'sky-blue': 'hsl(192, 95%, 65%)'
    },
    spacing: {
      0: '0',
      2: '0.125rem', // 2px
      4: '0.25rem', // 4px
      8: '0.5rem', // 8px
      12: '0.75rem', // 12px
      16: '1rem', // 16px
      20: '1.25rem', // and so on
      24: '1.5rem',
      28: '1.75rem',
      32: '2rem',
      36: '2.25rem',
      48: '3rem',
      64: '4rem',
      80: '5rem',
      96: '6rem',
      128: '8rem',
      192: '12rem',
      256: '16rem',
      320: '20rem',
      384: '24rem'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      none: 'none',
      '4': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      '4-lg': '0px 4px 12px rgba(0, 0, 0, 0.52)'
    }
  }
} as Config;
