/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1330px',
    },
    extend: {
      colors: {
        primary: '#3A632F',
        secondary: '#A85013',
        accent: {
          DEFAULT: '#5E9E4D',
          secondary: '#2E4049',
          tertiary: '#FF6D6D'
        },
        title: '#000'
      },
      fontFamily: {
        primary: 'Inter',
        secondary: 'Raleway',
        tertiary: 'Bricolage Grotesque'
      },
      boxShadow: {
        custom1: ' 2px 4px 34.9px 0px rgba(68, 68, 68, 0.25)',
        custom2: '0px 2px 30px 0px rgba(8, 73, 81, 0.06)',
      },
      backgroundImage: {
        homeBg: 'url(../assets/asset/banner-home.png)',
        startgardeningBg: 'url(../assets/asset/background.png)',
        collectionBg: 'url(../assets/asset/daun.png)',
        daunBg: 'url(../assets/asset/bg-daun.png)',
        services: 'url(../assets/img/services/bg.svg)',
        testimonials: 'url(../assets/img/testimonials/bg.svg)',
        departemens: 'url(../assets/img/departments/bg.svg)',
        quoteLeft: 'url(../assets/icons/testimonials/quote-left.svg)',
        quoteRight: 'url(../assets/icons/testimonials/quote-right.svg)',
      }
    },
  },
  plugins: [],
}