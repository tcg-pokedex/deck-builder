var constants = require('../constants/set.constants')

function addSet(set) {
  this.dispatch(constants.ADD_SET, { set: set });
}

function removeSet(index) {
  this.dispatch(constants.REMOVE_SET, { index: index });
}

function addSeries(series) {
  this.dispatch(constants.ADD_SERIES, { series: series });
}

function removeSeries(index) {
  this.dispatch(constants.REMOVE_SERIES, { index: index });
}

module.exports = {
  addSet: addSet,
  removeSet: removeSet,
  addSeries: addSeries,
  removeSeries: removeSeries
};
