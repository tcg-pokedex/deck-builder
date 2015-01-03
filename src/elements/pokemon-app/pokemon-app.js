Polymer({
  created: function(){
    this.pokemon = [];
  },
  handleAdd: function(event) {
    this.pokemon.push(event.detail);
  },
  toggleDialog: function() {
    this.$.json.toggle();
  }
});
