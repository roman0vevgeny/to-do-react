/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx, html}',
    './index.html',
    './src/App.scss',
  ],
  theme: {
    fontFamily: {
      normal: ['Gilroy-Regular', 'sans-serif'],
      medium: ['Gilroy-Medium', 'sans-serif'],
      bold: ['Gilroy-Bold', 'sans-serif'],
      extraBold: ['Gilroy-ExtraBold', 'sans-serif'],
      // serif: ['inter', 'serif'],
    },
    borderWidth: {
      0: '0px',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    fontSize: {
      12: [
        '12px',
        {
          lineHeight: '1',
          fontWeight: '400',
        },
      ],
      14: [
        '14px',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '400',
        },
      ],
      16: [
        '16px',
        {
          lineHeight: '19.5px',
          fontWeight: '600',
        },
      ],
      18: [
        '18px',
        {
          lineHeight: '19.5px',
          fontWeight: '400',
        },
      ],
      20: [
        '20px',
        {
          lineHeight: '25px',
          fontWeight: '500',
        },
      ],
      22: [
        '22px',
        {
          lineHeight: '40px',
          fontWeight: '400',
        },
      ],
      24: [
        '24px',
        {
          lineHeight: '40px',
          fontWeight: '400',
        },
      ],
      26: [
        '26px',
        {
          lineHeight: '40px',
          fontWeight: '400',
        },
      ],
      28: [
        '28px',
        {
          lineHeight: '40px',
          fontWeight: '400',
        },
      ],
      30: [
        '30px',
        {
          lineHeight: '1.233',
          fontWeight: '900',
        },
      ],
      40: [
        '40px',
        {
          lineHeight: '1.2',
          fontWeight: '900',
        },
      ],
      44: [
        '44px',
        {
          lineHeight: '1.2',
          fontWeight: '900',
        },
      ],
      50: [
        '50px',
        {
          lineHeight: '1.2',
          fontWeight: '900',
        },
      ],
      70: '70px',
    },
    gradientColorStops: {
      //       theme => ({
      // ...theme('colors'),
    },
    extend: {
      colors: {
        current: 'currentColor',
        // main: 'var(--color-main)',
      },
      textColor: {
        gray: 'var(--color-text-gray)',
        grayHover: 'var(--color-text-gray-hover)',
        main: 'var(--color-main)',
        menu: 'var(--menu-text)',
        task: 'var(--task-text)',
        checkboxIcon: 'var(--checkbox--icon-active)',
      },
      backgroundColor: {
        main: 'var(--color-main)',
        mainBg: 'var(--color-main-bg)',
        gray: 'var(--color-bg-gray)',
        grayHover: 'var(--color-bg-gray-hover)',
        menu: 'var(--menu-button-hover)',
        nav: 'var(--nav-bg)',
        navButtonHover: 'var(--navbutton-bg-hover)',
        checkmark: "url('/src/assets/Checkmark.svg')",
        checkboxActive: 'var(--checkbox-active)',
        devider: 'var(--stroke)',
      },
      borderColor: {
        header: 'var(--border-header)',
        search: 'var(--menu-text)',
        checkbox: 'var(--color-text-gray)',
        stroke: 'var(--stroke)',
        checkboxActive: 'var(--checkbox-active)',
      },
      placeholderColor: {
        search: 'var(--menu-text)',
      },
      screens: {
        '3xl': '1600px',
        'widescreen': { raw: '(min-aspect-ratio: 3/2)' },
        'tallscreen': { raw: '(max-aspect-ratio: 13/20)' },
      },
      // backgroundImage: {
      //   checkmark: "url('/src/assets/Checkmark.svg')",
      // },
      boxShadow: {
        button: '0 0 15px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
      },
    },
    opacity: {
      0: '0',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      80: '0.8',
      85: '0.85',
      90: '0.9',
      100: '1',
    },
    lineHeight: {
      0: '0',
      1: '1',
      1.2: '1.2',
      1.233: '1.233',
      1.5: '1.5',
      1.6: '1.6',
      1.8: '1.8',
      2: '2',
      2.5: '2.5',
      3: '3',
      3.5: '3.5',
      4: '4',
      4.5: '4.5',
      5: '5',
    },
    fill: ({ theme }) => ({
      gray: theme('colors.gray'),
    }),
  },
}
