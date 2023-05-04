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
      sans: ['Montserrat', 'sans-serif'],
      serif: ['inter', 'serif'],
    },
    fontSize: {
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
      'loginFirst': 'var(--color-gradient-login-first)',
      'loginSecond': 'var(--color-gradient-login-second)',
      'loginHoverFirst': 'var(--color-gradient-login-hover-first)',
      'loginHoverSecond': 'var(--color-gradient-login-hover-second)',
      'sectionFirst': 'var(--color-gradient-bg-section-first)',
      'sectionSecond': 'var(--color-gradient-bg-section-second)',
      'categoryFirst': 'var(--color-category-bg-first)',
      'categorySecond': 'var(--color-category-bg-second)',
      'subcategoryFirst': 'var(--color-subcategory-bg-first)',
      'subcategorySecond': 'var(--color-subcategory-bg-second)',
      'formFirst': 'var(--color-login-form-first)',
      'formSecond': 'var(--color-login-form-second)',
      'roseFirst': 'var(--color-bg-rose-first)',
      'roseSecond': 'var(--color-bg-rose-second)',
      'roseFirstHover': 'var(--color-bg-rose-first-hover)',
      'roseSecondHover': 'var(--color-bg-rose-second-hover)',
      'instructionCardFirst': 'var(--color-bg-instructioncard-first)',
      'instructionCardSecond': 'var(--color-bg-instructioncard-second)',
      'login-form-first': '#7312D3',
      'login-form-second': '#7472D8',
    },
    extend: {
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        gray: 'var(--color-text-gray)',
        accent: 'var(--color-text-accent)',
        blue: 'var(--color-text-always-blue)',
        light: 'var(--color-text-light)',
        button: 'var(--color-text-button)',
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        menuButton: 'var(--color-bg-menu-button)',
        menuHover: 'var(--color-bg-menu-button-hover)',
        white: 'var(--color-bg-white)',
        whiteHover: 'var(--color-bg-white-hover)',
        scrollTrack: 'var(--color-bg-scroll-track)',
        scroll: 'var(--color-bg-scroll)',
        line: 'var(--color-bg-line)',
        input: 'var(--color-bg-input)',
      },
      borderColor: {
        input: 'var(--color-border-input)',
        focus: 'var(--color-border-input-focus)',
        search: 'var(--color-border-search)',
        searchFocus: 'var(--color-border-search-focus)',
      },
      placeholderColor: {
        search: 'var(--color-placeholder-search)',
        searchHover: 'var(--color-placeholder-search-hover)',
      },
      // Adds a new breakpoint in addition to the default breakpoints
      screens: {
        '3xl': '1600px',
        'widescreen': { raw: '(min-aspect-ratio: 3/2)' },
        'tallscreen': { raw: '(max-aspect-ratio: 13/20)' },
      },
      backgroundImage: {
        'footer-texture': "url('/src/assets/firstFigure.png')",
        'footer-texture-sm': "url('/src/assets/firstFigureSm.png')",
        'ball': "url('/src/assets/ball-mask.svg')",
        'ball-sm': "url('/src/assets/ball-mask-sm.svg')",
        'logo': "url('/src/assets/Logo.svg')",
        'star': "url('/src/assets/Star.svg')",
        'starSub': "url('/src/assets/Star-sub.svg')",
        'starInst': "url('/src/assets/Star-inst.svg')",
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
  },
}
