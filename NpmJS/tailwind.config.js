module.exports = {
  content: ["../Pages/**/*.{razor,html,cshtml}", "../Layout/**/*.{razor,html,cshtml}", "../wwwroot/index.html"],
  theme: {
    extend: {
      fontFamily: {
        aleo: ['Aleo-Regular', 'sans-serif'],
        aleoBold: ['Aleo-Bold', 'sans-serif'],
        neuropolitical: ['Neuropolitical', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
