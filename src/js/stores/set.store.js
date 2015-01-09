var Fluxxor = require('fluxxor');
var constants = require('../constants/set.constants');
var sets = require('./sets.json');

var SetStore = Fluxxor.createStore({
  initialize: function() {
    this.sets = sets;

    this.bindActions(
      constants.ADD_SET, this.onAddSet,
      constants.DELETE_SET, this.onDeleteSet
    );
  },

  onAddSet: function(payload) {
    this.sets.push(payload.set);
    this.emit('change');
  },

  onDeleteSet: function(payload) {
    this.sets.splice(payload.index, 1);
    this.emit('change');
  },

  getState: function() {
    return this.sets;
  }
});

module.exports = SetStore;
