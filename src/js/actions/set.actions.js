var constants = require('../constants/set.constants')

function addSet(set) {
  this.dispatch(constants.ADD_SET, { set: set });
}

function deleteSet(index) {
  this.dispatch(constants.DELETE_SET, { index: index });
}

function addSeries(series) {
  this.dispatch(constants.ADD_SERIES, { series: series });
}

function deleteSeries(index) {
  this.dispatch(constants.DELETE_SERIES, { index: index });
}

module.exports = {
  addSet: addSet,
  deleteSet: deleteSet,
  addSeries: addSeries,
  deleteSeries: deleteSeries
};
