module.exports = {
  content: ["../Pages/**/*.{razor,html,cshtml}", "../Layout/**/*.{razor,html,cshtml}", "../wwwroot/index.html"],
  theme: {
    extend: {
      textColor: ['group-hover', 'hover'],
      stroke: ['group-hover', 'hover'],
      fontFamily: {
        aleo: ['Aleo-Regular', 'sans-serif'],
        aleoBold: ['Aleo-Bold', 'sans-serif'],
        neuropolitical: ['Neuropolitical', 'sans-serif'],
        proggy: ['Proggy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
