
module.exports = {
    content: [
      "./views/**/*.ejs", // Include EJS files
      "./public/*.{html,js}" // Include static HTML files
    ],
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fontFamily:{
          zenDots: ['Zen Dots', 'cursive'],
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }