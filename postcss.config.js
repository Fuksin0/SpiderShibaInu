export default {
  plugins: {
    tailwindcss: {},
    'postcss-rename': {
      strategy: 'minimal',
      by: 'whole',
      ids: true,
    },
    autoprefixer: {},
  },
}
