
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  mode: 'jit', // Optional for Tailwind 3.0+
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
};

// module.exports = {
//   theme: {
//     extend: {
//       backgroundImage: {
//         'custom-radial': 'radial-gradient(circle farthest-side, rgba(255,0,182,.15), rgba(255,255,255,0))',
//       },
//     },
//   },
// };
