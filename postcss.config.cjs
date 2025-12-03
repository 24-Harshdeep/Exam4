module.exports = {
  plugins: [
    // Use the dedicated PostCSS plugin package for Tailwind
    require('@tailwindcss/postcss')(),
    require('autoprefixer')(),
  ],
}
