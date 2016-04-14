var copy = require('../../../../build/tasks/copy');
var path = require('path');

var copyOperations = [
  {
    from: 'node_modules/leaflet/dist/leaflet.css',
    to: 'node_modules/leaflet/dist/leaflet.scss'
  },
  {
    from: 'node_modules/leaflet/dist/images',
    to: 'assets/images/leaflet'
  }
];

module.exports = function(config) {
  var promises = [];

  copyOperations.forEach(function(operation) {
    operation.from = path.join(config.includePath, operation.from);
    operation.to = path.join(config.destination, operation.to);

    promises.push(copy.copy(operation.from, operation.to))
  });

  return Promise.all(promises);
};
