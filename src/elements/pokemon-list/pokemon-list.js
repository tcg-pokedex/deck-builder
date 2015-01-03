Polymer({
  remove: function(event) {
    var index = event.currentTarget.attributes.pokemon.value;
    this.pokemon.splice(index, 1);
  }
});
