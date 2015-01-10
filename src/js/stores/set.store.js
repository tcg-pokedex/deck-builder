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
      constants.DELETE_SET, this.onDeleteSet,
      constants.ADD_SERIES, this.onAddSeries,
      constants.DELETE_SERIES, this.onDeleteSeries
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

  onAddSeries: function(payload) {
    this.series.push(payload.series);
    this.emit('change');
  },

  onDeleteSeries: function(payload) {
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
