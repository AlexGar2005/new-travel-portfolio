/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mob': {
        'max': '429px',
      },
      'pad': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'ultra': '2160px',
    },
    extend: {
      gridTemplateColumns: {
        'features': '.1fr 1fr',
        'places': '1fr .2fr',
        'inCard': '.8fr 1.3fr 1fr',
        'test': '.6fr 1fr',
        'test-xl': '.4fr 1fr',
        'test-lg':'.3fr 1fr',
        'test-md':'.7fr 1fr',
        'test-pad': '.5fr 1fr',
        'features-2xl': '.1fr 1.7fr',
        'features-lg': '.1fr 1.8fr',
        'places-md': '1.2fr .2fr',
        'places-mob': '1.5fr .2fr',
        'inCard-xl': '.8fr 1fr 1.1fr',
        'inCard-lg': '.7fr 1fr 1.1fr',
        'test-images': '.7fr 1.3fr .7fr'
      }
    },
  },
  plugins: [],
}

