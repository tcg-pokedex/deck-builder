Polymer({
  ready: function() {
    var observer = new ArrayObserver(this.pokemon);
    this.count = 0;
    var other = this;

    observer.open(function(splices) {
      other.count = other.pokemonCount();
    });
  },
  remove: function(event) {
    var index = event.currentTarget.attributes.pokemon.value;
    this.pokemon.splice(index, 1);
  },
  pokemonCount: function() {
    return _.reduce(this.pokemon, function(sum, object){
      return sum + parseInt(object.quantity);
    }, 0);
  }
});
