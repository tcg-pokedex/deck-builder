Polymer({
  computed: {
    name: "pokemon.set + '_'+ pad(pokemon.number, 3)",
    src: "'http://www.lackeyccg.com/pokemon/high/cards/' + name + '.jpg'"
  },
  pad: function(n, p, c) {
    var n = parseInt(this.pokemon.number);
    var pad_char = typeof c !== 'undefined' ? c : '0';
    var pad = new Array(1 + p).join(pad_char);
    return (pad + n).slice(-pad.length);
  }
});
