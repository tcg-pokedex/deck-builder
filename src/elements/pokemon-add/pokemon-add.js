Polymer({
  quantity: 0,
  number: 0,
  ready: function() {
    this.sets = [
    ]
  },
  addCard: function(event) {
    event.preventDefault();
    this.fire('add', {quantity: this.quantity, set: this.set, number: this.number});
    this.quantity = 0;
    this.set = "";
    this.number = 0;
  }
});
