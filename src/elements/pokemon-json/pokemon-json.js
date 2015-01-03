Polymer({
  ready: function() {
    this.json = JSON.stringify(this.pokemon, null, 4);
    var observer = new ArrayObserver(this.pokemon);
    var other = this;

    observer.open(function(splices) {
      other.json = JSON.stringify(other.pokemon, null, 4);
    });
  },
  update: function() {
    var pokemon = JSON.parse(this.json);
    var other = this;
    this.pokemon.length = 0;
    _.forEach(pokemon, function(p) {
      other.pokemon.push(p);
    });
  },
  toggle: function() {
    this.$.dialog.toggle();
  }
});
