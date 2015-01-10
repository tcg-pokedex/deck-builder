var Fluxxor = require('fluxxor');
var constants = require('../constants/set.constants');
var sets = require('./sets.json');
var series = require('./series.json');

var SetStore = Fluxxor.createStore({
  initialize: function() {
    this.sets = sets;
    this.series = series;

    this.bindActions(
      constants.ADD_SET, this.onAddSet,
      constants.REMOVE_SET, this.onRemoveSet,
      constants.ADD_SERIES, this.onAddSeries,
      constants.REMOVE_SERIES, this.onRemoveSeries
    );
  },

  onAddSet: function(payload) {
    this.sets.push(payload.set);
    this.emit('change');
  },

  onRemoveSet: function(payload) {
    this.sets.splice(payload.index, 1);
    this.emit('change');
  },

  onAddSeries: function(payload) {
    this.series.push(payload.series);
    this.emit('change');
  },

  onRemoveSeries: function(payload) {
    this.series.splice(payload.index, 1);
    this.emit('change');
  },

  getState: function() {
    return {
      sets: this.sets,
      series: this.series
    };
  }
});

module.exports = SetStore;
