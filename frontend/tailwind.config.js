
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      screens: {
        'tablet': '768px',   // Tailwind's default md (for tablets)
        'laptop': '1024px',  // Tailwind's default lg (for laptops)
        'laptopL': '1280px', // Tailwind's xl (large laptops)
        'desktop': '1536px', // Tailwind's 2xl (for desktops)
        // '125%': { raw: '(min-width: 1536px) and (-webkit-min-device-pixel-ratio: 1.25)' },
      },
      fontFamily: {
        roboto: ['Roboto Condensed', 'sans-serif'], // Define your font name
      },
      transitionDuration: {
        '2000': '2000ms', // Custom duration of 2000ms (2 seconds)
        '5000': '5000ms', // Custom duration of 5000ms (5 seconds)
      },
      letterSpacing: {
        custom: '-0.0138em',   // Custom tracking value
        customTight: '-0.002em',
        customTight1: '-0.00174em',
        customWide: '0.0057em',  // Another custom tracking value
        customWide1: '0.00640em',
        customWide2: '0.028em',
      },
      fontWeight: {
        'extra-light': 100,
        'customBold': 550,
        'extra-heavy': 1000, // Custom font weight
      },

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

// module.exports = {
//   theme: {
//     extend: {
//       screens: {
//         'tablet': '768px',   // Tailwind's default md (for tablets)
//         'laptop': '1024px',  // Tailwind's default lg (for laptops)
//         'laptopL': '1280px', // Tailwind's xl (large laptops)
//         'desktop': '1536px', // Tailwind's 2xl (for desktops)
//       },
//     },
//   },
// };
