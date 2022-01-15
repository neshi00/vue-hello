new Vue({
  el: "#app",
  data: {
    messaggio: "Hello Vue",
    immagineRandom: "https://unsplash.it/300/300?image=",
    input: " ",
    h1Colors: "colors",
  },
  methods: {
    inviaNome: function () {
      this.messaggio = "Ciao" + this.input;
    },
  },
});
