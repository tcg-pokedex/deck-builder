Polymer({
  ready: function() {
    var observer = new ArrayObserver(this.pokemon);
    this.cards = [];
    var other = this;

    observer.open(function(splices) {
      other.pokemonToCards();
    });
  },
  pokemonToCards: function() {
    this.cards = [];
    var other = this;
    _.forEach(this.pokemon, function(pokemon) {
      _.times(parseInt(pokemon.quantity), function(n){
        other.cards.push(pokemon);
      });
    });
  }
})
