var constants = require('../constants/set.constants')

function addSet(set) {
  this.dispatch(constants.ADD_SET, { set: set });
}

function deleteSet(index) {
  this.dispatch(constants.DELETE_SET, { index: index });
}

module.exports = {
  addSet: addSet,
  deleteSet: deleteSet
};
